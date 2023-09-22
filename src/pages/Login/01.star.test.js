import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouterAndRedux } from '../../tests/helpers/renderWith';

describe('Desenvolve testes automatizados para o componente login e...', () => {
  const valideEmail = 'samuel@samuel.com';
  const invalidEmail = 'samuel';
  const passwordValid = '123456';
  const passwordInvalid = '1234';
  const TestIdEmail = 'email-input';
  const TestIdPassword = 'password-input';

  test('verifica se a rota para essa página é "/"', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    expect(history.location.pathname).toBe('/');
  });

  test('verifica se o elemento renderiza um elemento pra senha e um para o email', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId(TestIdEmail);
    const inputPassword = screen.getByTestId(TestIdPassword);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  test('verifica se o elemento renderiza um botão com o nome "entrar" ', () => {
    renderWithRouterAndRedux(<App />);

    const button = screen.getByRole('button', { name: /entrar/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/ENTRAR/i);
  });

  test('verifica se o botão é habilitado com um email e uma senha válida', () => {
    renderWithRouterAndRedux(<App />);

    const button = screen.getByRole('button', { name: /entrar/i });

    expect(button).toHaveProperty('disabled', true);
    expect(button.disabled).toBe(true);

    const inputEmail = screen.getByTestId(TestIdEmail);
    const inputPassword = screen.getByTestId(TestIdPassword);

    userEvent.type(inputEmail, valideEmail);

    expect(button).toHaveProperty('disabled', true);
    expect(button.disabled).toBe(true);

    userEvent.type(inputPassword, passwordValid);

    expect(button).toHaveProperty('disabled', false);
    expect(button.disabled).toBe(false);
  });

  test('verifica se o botão permanece desabilitado com email e senhas inválidos', () => {
    renderWithRouterAndRedux(<App />);

    const button = screen.getByRole('button', { name: /entrar/i });
    const inputEmail = screen.getByTestId(TestIdEmail);
    const inputPassword = screen.getByTestId(TestIdPassword);

    userEvent.type(inputEmail, invalidEmail);

    expect(button).toHaveProperty('disabled', true);
    expect(button.disabled).toBe(true);

    userEvent.type(inputPassword, passwordInvalid);

    expect(button).toHaveProperty('disabled', true);
    expect(button.disabled).toBe(true);

    userEvent.clear(inputPassword);
    userEvent.clear(inputEmail);

    userEvent.type(inputPassword, 'abcde');
    expect(button.disabled).toBe(true);

    userEvent.type(inputEmail, 'samuel@samuel');
    expect(button.disabled).toBe(true);

    userEvent.clear(inputEmail);
    userEvent.type(inputEmail, 'samuel.com');
    expect(button.disabled).toBe(true);

    userEvent.clear(inputPassword);
    userEvent.type(inputPassword, 'abcdef');
    expect(button.disabled).toBe(true);
  });

  test('verifica se ao clicar no botão a rota muda para "/carteira"', () => {
    const { history, store } = renderWithRouterAndRedux(<App />);

    const button = screen.getByRole('button', { name: /entrar/i });

    expect(button.disabled).toBe(true);

    expect(history.location.pathname).toBe('/');

    const inputEmail = screen.getByTestId(TestIdEmail);
    const inputPassword = screen.getByTestId(TestIdPassword);

    userEvent.type(inputEmail, valideEmail);
    userEvent.type(inputPassword, passwordValid);

    expect(button.disabled).toBe(false);

    userEvent.click(button);

    expect(history.location.pathname).toBe('/carteira');
    expect(store.getState().user.email).toBe(valideEmail);
  });
});
