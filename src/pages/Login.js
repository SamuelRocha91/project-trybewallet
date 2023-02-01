import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { saveEmail } from '../redux/actions';

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
      <div>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          value={ password }
          name="password"
          onChange={ this.handleChange }
        />
        <button
          onClick={ this.saveDataAndRedirect }
          disabled={ isDisabled }
        >
          Entrar

        </button>
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
