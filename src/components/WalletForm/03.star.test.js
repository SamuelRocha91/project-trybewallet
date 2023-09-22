import React from 'react';
import { screen } from '@testing-library/react';
import App from '../../App';
import { renderWithRouterAndRedux } from '../../tests/helpers/renderWith';
import mockData from '../../tests/helpers/mockData';

describe('Desenvolve testes automatizados para o formulário de despesas e...', () => {
  const initialEntries = ['/carteira'];
  const descriptionInput = 'description-input';
  const valueInput = 'value-input';
  const currencyInput = 'currency-input';
  const currenciesLength = 15;
  const method = 'method-input';
  const arrayCurrency = ['USD', 'CAD', 'EUR',
    'GBP', 'ARS', 'BTC', 'LTC', 'JPY', 'CHF', 'AUD',
    'CNY', 'ILS', 'ETH', 'XRP', 'DOGE'];

  const arrayMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const arrayTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

  test('verifica a existência campos para adição de despesa', () => {
    renderWithRouterAndRedux(<App />, { initialEntries });
    const inputDescription = screen.getByTestId(descriptionInput);
    const inputNumber = screen.getByTestId(valueInput);
    const selectCurrency = screen.getByTestId(currencyInput);
    const selectMethod = screen.getByTestId(method);
    const selectTag = screen.getByTestId('tag-input');

    expect(inputDescription).toBeInTheDocument();
    expect(inputNumber).toBeInTheDocument();
    expect(selectCurrency).toBeInTheDocument();
    expect(selectMethod).toBeInTheDocument();
    expect(selectTag).toBeInTheDocument();
  });

  test('verifica se a API é chamada com o endpoint https://economia.awesomeapi.com.br/json/all', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const { store } = renderWithRouterAndRedux(<App />, { initialEntries });
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://economia.awesomeapi.com.br/json/all');

    const optionUsd = await screen.findByRole('option', { name: 'USD' });
    expect(optionUsd).toBeInTheDocument();
    expect(store.getState().wallet.currencies.length).toBe(currenciesLength);
    expect(store.getState().wallet.currencies).toEqual(arrayCurrency);
  });

  test('verifica se as options foram renderizadas', async () => {
    global.fetch.mockRestore();
    renderWithRouterAndRedux(<App />, { initialEntries });
    const optionUsd = await screen.findByRole('option', { name: 'USD' });
    expect(optionUsd).toBeInTheDocument();

    for (let index = 1; index < arrayCurrency.length; index += 1) {
      expect(screen.getByRole('option', { name:
        arrayCurrency[index] }).selected).toBe(false);
    }
    arrayMethod.forEach((payment) => {
      expect(screen.getByRole('option', { name:
            payment })).toBeInTheDocument();
    });
    arrayTag.forEach((tagOption) => {
      expect(screen.getByRole('option', { name:
              tagOption })).toBeInTheDocument();
    });
  });
});
