import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import mockData from './helpers/mockData';

describe('Verifica se a rota "/carteira', () => {
  const initialEntries = ['/carteira'];
  const descriptionTag = 'despesa de medicamentos';

  test('renderiza um header com um campo de email, um de despesa e outro de moeda', () => {
    renderWithRouterAndRedux(<App />, { initialEntries });

    const renderEmail = screen.getByTestId('email-field');
    const textTag = screen.getByText('Despesa Total: R$');
    const tagTotal = screen.getByTestId('total-field');
    const current = screen.getByTestId('header-currency-field');

    expect(renderEmail).toBeInTheDocument();
    expect(textTag).toBeInTheDocument();
    expect(tagTotal).toBeInTheDocument();
    expect(current).toBeInTheDocument();
    expect(tagTotal).toHaveTextContent('0.00');
    expect(current).toHaveTextContent('BRL');
  });

  test('verifica se quando existe um email salvo na store se ele é renderizado no Header', () => {
    const initialState = { user: {
      email: 'samuel@samuel.com',
    } };

    renderWithRouterAndRedux(<App />, { initialEntries, initialState });

    const renderEmail = screen.getByTestId('email-field');

    expect(renderEmail).toHaveTextContent(/Email: samuel@samuel.com/i);
  });

  test('verifica se quando existe uma despesa salva, se o seu valor é atualizado no Header', () => {
    const initialState = {
      wallet: {
        expenses: [{ exchangeRates: mockData,
          currency: 'USD',
          value: '5',
          description: 'aaaa',
          method: 'Dinheiro',
          tag: 'Alimentacao',
          id: 0 }],
      },
    };
    renderWithRouterAndRedux(<App />, { initialEntries, initialState });

    const tagTotal = screen.getByTestId('total-field');

    expect(tagTotal).toHaveTextContent('23.77');
  });
  test('renderiza todos os campos de formulário, o botão e se é possível digitar nos campos', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries });

    const optionUsd = await screen.findByRole('option', { name: 'USD' });
    const trybeWallet = screen.getByText(/trybeWallet/i);
    const inputNumber = screen.getByTestId('value-input');
    const inputDescription = screen.getByTestId('description-input');
    const selectCurrency = screen.getByTestId('currency-input');
    const selectMethod = screen.getByTestId('method-input');
    const selectTag = screen.getByTestId('tag-input');
    const button = screen.getByRole('button', { name: /adicionar despesa/i });

    expect(inputDescription).toBeInTheDocument();
    expect(inputNumber).toBeInTheDocument();
    expect(selectCurrency).toBeInTheDocument();
    expect(selectMethod).toBeInTheDocument();
    expect(selectTag).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(trybeWallet).toBeInTheDocument();
    expect(optionUsd.selected).toBeTruthy();

    userEvent.type(inputNumber, '6');

    expect(inputNumber).toHaveValue(6);

    userEvent.type(inputDescription, descriptionTag);

    expect(inputDescription).toHaveValue(descriptionTag);

    userEvent.selectOptions(selectMethod, ['Cartão de crédito']);

    expect(selectMethod).toHaveValue('Cartão de crédito');

    userEvent.selectOptions(selectTag, ['Trabalho']);

    expect(selectTag).toHaveValue('Trabalho');

    userEvent.selectOptions(selectCurrency, ['CAD']);

    expect(selectCurrency).toHaveValue('CAD');
  });

  test('possibilita adicionar uma despesa ao store e se essa alteração modifica o Header', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => mockData,
    }));

    const objectStore = {
      exchangeRates: mockData,
      currency: 'USD',
      value: '6',
      description: 'despesa de medicamentos',
      method: 'Dinheiro',
      tag: 'Alimentacao',
      id: 0,
    };

    const { store } = renderWithRouterAndRedux(<App />, { initialEntries });

    const optionUsd = await screen.findByRole('option', { name: 'USD' });
    const inputNumber = screen.getByTestId('value-input');
    const inputDescription = screen.getByTestId('description-input');
    const button = screen.getByRole('button', { name: /adicionar despesa/i });

    expect(optionUsd.selected).toBeTruthy();

    userEvent.type(inputNumber, '6');
    userEvent.type(inputDescription, descriptionTag);
    userEvent.click(button);

    expect(inputNumber).not.toHaveValue(6);
    expect(inputDescription).not.toHaveValue(descriptionTag);

    const tagValue = await screen.findByText('28.52');

    expect(tagValue).toHaveTextContent('28.52');
    expect(store.getState().wallet.expenses[0]).toEqual(objectStore);
  });
});
