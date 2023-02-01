import React, { Component } from 'react';
import { connect } from 'react-redux';
import proptypes from 'prop-types';
import { fetchApiCurrencies } from '../redux/actions';

class WalletForm extends Component {
  state = {
    current: 'USD',
    value: '',
    description: '',
    methodPayment: 'dinheiro',
    tag: 'alimentacao',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApiCurrencies());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { currencies } = this.props;
    const { current, description, value, methodPayment, tag } = this.state;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            name="value"
            value={ value }
            onChange={ this.handleChange }
            data-testid="value-input"
            min="0"
            type="number"
            id="value"
          />
        </label>
        <select
          data-testid="currency-input"
          name="current"
          id="current"
          onChange={ this.handleChange }
          value={ current }
        >
          Moeda:
          {currencies && currencies.map((currencie) => (
            <option
              key={ currencie }
              value={ currencie }
            >
              { currencie }
            </option>))}
        </select>
        <select
          data-testid="method-input"
          name="methodPayment"
          id="methodPayment"
          value={ methodPayment }
          onChange={ this.handleChange }
        >
          Método de pagamento:
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          name="tag"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          Tag:
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: proptypes.arrayOf(proptypes.string).isRequired,
  dispatch: proptypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
