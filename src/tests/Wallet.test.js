import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import mockData from './helpers/mockData';

describe('Verifica se a rota "/carteira', () => {
  const initialEntries = ['/carteira'];
  const descriptionTag = 'despesa de medicamentos';
  const editarDespesa = 'Editar despesa';
  const descriptionInput = 'description-input';
  const valueInput = 'value-input';
  const initialState = {
    user: { email: 'samuel@samuel.com' },
    wallet: {
      expenses: [{
        exchangeRates: mockData,
        currency: 'USD',
        value: '6',
        description: descriptionTag,
        method: 'Dinheiro',
        tag: 'Alimentacao',
        id: 0,
      }],
      currencies: [
        'USD', 'CAD', 'GBP',
        'ARS', 'BTC', 'LTC',
        'EUR', 'JPY', 'CHF',
        'AUD', 'CNY', 'ILS',
        'ETH', 'XRP', 'DOGE',
      ],
    },
  };

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
    renderWithRouterAndRedux(
      <App />,
      { initialEntries, initialState },
    );

    const renderEmail = screen.getByTestId('email-field');

    expect(renderEmail).toHaveTextContent(/Email: samuel@samuel.com/i);
  });

  test('verifica se quando existe uma despesa salva, se o seu valor é atualizado no Header', () => {
    renderWithRouterAndRedux(<App />, { initialEntries, initialState });

    const tagTotal = screen.getByTestId('total-field');

    expect(tagTotal).toHaveTextContent('28.52');
  });
  test('renderiza todos os campos de formulário, o botão e se é possível digitar nos campos', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries });

    const optionUsd = await screen.findByRole('option', { name: 'USD' });
    const trybeWallet = screen.getByText(/trybeWallet/i);
    const inputNumber = screen.getByTestId(valueInput);
    const inputDescription = screen.getByTestId(descriptionInput);
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
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    renderWithRouterAndRedux(<App />, { initialEntries });

    const optionUsd = await screen.findByRole('option', { name: 'USD' });
    const inputNumber = screen.getByTestId(valueInput);
    const inputDescription = screen.getByTestId(descriptionInput);
    const button = screen.getByRole('button', { name: /adicionar despesa/i });

    expect(optionUsd.selected).toBeTruthy();

    userEvent.type(inputNumber, '6');
    userEvent.type(inputDescription, descriptionTag);
    userEvent.click(button);

    expect(inputNumber).not.toHaveValue(6);
    expect(inputDescription).not.toHaveValue(descriptionTag);
  });

  test('renderiza títulos de uma tabela', () => {
    global.fetch.mockRestore();
    const titles = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    renderWithRouterAndRedux(<App />, { initialEntries });
    const tableTitles = screen.getAllByRole('columnheader');

    for (let index = 0; index < titles.length; index += 1) {
      expect(tableTitles[index]).toHaveTextContent(titles[index]);
    }
  });

  test('renderiza os elementos de despesa adicionados', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries, initialState });
    const optionUsd = await screen.findByRole('option', { name: 'USD' });
    expect(optionUsd).toBeInTheDocument();
    expect(screen.queryByText('Dólar Americano/Real Brasileiro')).toBeInTheDocument();
    expect(screen.queryByText('Real')).toBeInTheDocument();
    expect(screen.queryByText('4.75')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Excluir/i })).toBeInTheDocument();
    expect(screen.queryByText('despesa de medicamentos')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /Excluir/i }));
    expect(screen.queryByText('Dólar Americano/Real Brasileiro')).not.toBeInTheDocument();
  });

  test('Verifica se é possível editar uma das despesas salvas na carteira', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries, initialState });
    const optionUsd = await screen.findByRole('option', { name: 'USD' });
    const inputDescription = screen.getByTestId(descriptionInput);

    expect(optionUsd).toBeInTheDocument();
    expect(inputDescription).toHaveValue('');
    expect(screen.getByText('Real')).toBeInTheDocument();
    expect(screen.getByText('4.75')).toBeInTheDocument();
    expect(screen.getByTestId('edit-btn')).toBeInTheDocument();
    expect(screen.getByText(descriptionTag)).toBeInTheDocument();
    expect(optionUsd.selected).toBe(true);
    expect(optionUsd.value).toBe('USD');

    userEvent.click(screen.queryByTestId('edit-btn'));

    expect(screen.getByText(editarDespesa)).toBeInTheDocument();

    const inputNumber = screen.getByTestId('value-input');
    userEvent.type(inputNumber, '7');
    userEvent.type(inputDescription, 'sete reais');

    userEvent.click(screen.getByText(editarDespesa));

    expect(inputNumber).not.toHaveValue('7');
    expect(inputDescription).toHaveValue('');
    expect(screen.getByText('7.00')).toBeInTheDocument();
    expect(screen.getByText('sete reais')).toBeInTheDocument();
    expect(screen.queryByText(descriptionTag)).not.toBeInTheDocument();

    userEvent.type(inputNumber, '5');
    userEvent.type(inputDescription, 'cinco reais');
    userEvent.click(screen.getByRole('button', { name: /Adicionar despesa/i }));
    expect(await screen.findByText('cinco reais')).toBeInTheDocument();

    userEvent.click(screen.getAllByTestId('edit-btn')[1]);

    userEvent.type(inputNumber, '9');
    userEvent.type(inputDescription, 'nove reais');
    userEvent.click(screen.getByText('Editar despesa'));

    expect(screen.getByText('nove reais')).toBeInTheDocument();

    expect(screen.getAllByTestId('edit-btn')).toHaveLength(2);
  });
});
