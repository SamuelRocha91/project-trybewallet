import React, { Component } from 'react';
import { connect } from 'react-redux';
import proptypes from 'prop-types';
import { fetchApiCurrencies,
  fetchApiExpenses, actionEfetiveEdit } from '../redux/actions';

class WalletForm extends Component {
  state = {
    currency: 'USD',
    value: '',
    description: '',
    method: 'Dinheiro',
    tag: 'Alimentacao',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApiCurrencies());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  saveTag = () => {
    const { dispatch, expenses } = this.props;
    const infos = {
      ...this.state,
      id: expenses.length,
    };
    dispatch(fetchApiExpenses(infos));
    this.setState({ currency: 'USD',
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentacao' });
  };

  editTag = () => {
    const { idToEdit, expenses, dispatch } = this.props;
    const { currency, value, description, method, tag } = this.state;
    const filteredData = expenses.map((expense) => {
      if (Number(expense.id) === Number(idToEdit)) {
        return ({
          tag,
          currency,
          value,
          description,
          method,
          id: expense.id,
          exchangeRates: expense.exchangeRates,
        });
      }
      return expense;
    });
    dispatch(actionEfetiveEdit(filteredData));
    this.setState({ currency: 'USD',
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentacao' });
  };

  render() {
    const { currencies, editor } = this.props;
    const { currency, description, value, method, tag } = this.state;
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
          name="currency"
          id="current"
          onChange={ this.handleChange }
          value={ currency }
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
          name="method"
          id="methodPayment"
          value={ method }
          onChange={ this.handleChange }
        >
          Método de pagamento:
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          name="tag"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          Tag:
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
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
        <button
          onClick={ editor ? this.editTag : this.saveTag }
        >
          {editor ? 'Editar despesa' : 'Adicionar despesa' }
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
});

WalletForm.propTypes = {
  currencies: proptypes.arrayOf(proptypes.string).isRequired,
  dispatch: proptypes.func.isRequired,
  expenses: proptypes.arrayOf(proptypes.shape({
    currency: proptypes.string.isRequired,
  })).isRequired,
  editor: proptypes.bool.isRequired,
  idToEdit: proptypes.number.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
