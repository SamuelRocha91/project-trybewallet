import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Verifica se a página inicial', () => {
  const valideEmail = 'samuel@samuel.com';
  const invalidEmail = 'samuel';
  const passwordValid = '123456';
  const passwordInvalid = '1234';
  const TestIdEmail = 'email-input';
  const TestIdPassword = 'password-input';

  test('renderiza dois inputs e um botão inicialmente desabilitado', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(TestIdEmail);
    const inputPassword = screen.getByTestId(TestIdPassword);
    const button = screen.getByRole('button', { name: /entrar/i });

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button.disabled).toBe(true);
  });

  test('só habilita o botão em caso de ter ao mesmo tempo um email e uma senha válidos', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(TestIdEmail);
    const inputPassword = screen.getByTestId(TestIdPassword);
    const button = screen.getByRole('button', { name: /entrar/i });

    expect(button).toHaveProperty('disabled', true);

    userEvent.type(inputEmail, invalidEmail);
    expect(inputEmail).toHaveValue(invalidEmail);
    expect(button).toHaveProperty('disabled', true);

    userEvent.type(inputPassword, passwordInvalid);
    expect(inputPassword).toHaveValue(passwordInvalid);
    expect(button).toHaveProperty('disabled', true);

    userEvent.clear(inputEmail);
    userEvent.clear(inputPassword);

    expect(inputPassword).toHaveValue('');
    expect(inputEmail).toHaveValue('');

    userEvent.type(inputEmail, valideEmail);
    expect(inputEmail).not.toHaveValue(invalidEmail);
    expect(inputEmail).toHaveValue(valideEmail);
    expect(button).toHaveProperty('disabled', true);

    userEvent.type(inputPassword, passwordValid);
    expect(inputPassword).not.toHaveValue(passwordInvalid);
    expect(inputPassword).toHaveValue(passwordValid);
    expect(button).toHaveProperty('disabled', false);

    userEvent.clear(inputEmail);
    expect(button).toHaveProperty('disabled', true);
  });

  test('redireciona o usuário para uma nova rota ao digitar email e senha válidos e clicar no botão', () => {
    const { history, store } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(TestIdEmail);
    const inputPassword = screen.getByTestId(TestIdPassword);
    const button = screen.getByRole('button', { name: /entrar/i });

    expect(history.location.pathname).toBe('/');

    userEvent.type(inputEmail, valideEmail);
    userEvent.type(inputPassword, passwordValid);
    userEvent.click(button);

    expect(history.location.pathname).not.toBe('/');
    expect(history.location.pathname).toBe('/carteira');
    expect(store.getState().user.email).toBe(valideEmail);
    expect(screen.getByTestId('value-input')).toBeInTheDocument();
  });
});
