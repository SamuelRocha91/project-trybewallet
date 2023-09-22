import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { saveEmail } from '../redux/actions';

const classButton = 'bg-blue-600 p-2 w-full text-white rounded-lg shadow-lg';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      const verifyValidate = this.validation();
      this.setState({ isDisabled: !(verifyValidate) });
    });
  };

  saveDataAndRedirect = () => {
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(saveEmail(email));
    history.push('/carteira');
  };

  validation = () => {
    const { email, password } = this.state;
    const minLength = 6;
    const passwordValidate = password.length >= minLength;
    const regularExpressionEmailValidate = /\S+@\S+\.\S+/;
    return regularExpressionEmailValidate.test(email) && passwordValidate;
  };

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div
        className="min-h-screen bg-hero-pattern mix-blend-lighten bg-cover
      flex items-center justify-center"
      >
        <div
          className="bg-white flex flex-col shadow-lg
        items-center justify-center gap-y-5 p-10 rounded-xl"
        >
          <h1 className="text-3xl font-bold text-green-400">Trybe Wallet</h1>
          <input
            data-testid="email-input"
            placeholder="Digite seu email"
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            className="p-1 border"
          />
          <input
            data-testid="password-input"
            placeholder="Senha"
            type="password"
            value={ password }
            name="password"
            onChange={ this.handleChange }
            className="p-1 border"
          />
          <button
            onClick={ this.saveDataAndRedirect }
            disabled={ isDisabled }
            className={ isDisabled ? `${classButton} opacity-60` : classButton }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: propTypes.func.isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
