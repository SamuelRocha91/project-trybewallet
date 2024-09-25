import React, { Component } from 'react';
import { connect } from 'react-redux';
import proptypes from 'prop-types';
import {
  fetchApiCurrencies,
  fetchApiExpenses,
  actionEfetiveEdit,
  actionUpdateFinish,
} from '../redux/actions';
import '../App.css';

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

  componentDidUpdate() {
    const { idToEdit, expenses, editor, update, dispatch } = this.props;
    if (editor && update === 0) {
      const expense = expenses.find((cost) => cost.id === idToEdit);
      console.log(expense);

      this.setState({
        currency: expense.currency,
        value: expense.value,
        description: expense.description,
        method: expense.method,
        tag: expense.tag,
      }, () => {
        dispatch(actionUpdateFinish());
      });
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  saveTag = () => {
    const { dispatch, expenses } = this.props;
    const infos = {
      ...this.state,
      id: expenses.length * Math.random(),
    };
    dispatch(fetchApiExpenses(infos));
    this.setState({ currency: 'USD',
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentacao',
    });
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
      <div className="expense-card">
        <div className="expense-card-child">
          <label className="expense-value" htmlFor="value">
            Valor:
            <input
              name="value"
              value={ value }
              onChange={ this.handleChange }
              min="0"
              type="number"
              id="value"
            />
          </label>
          <label htmlFor="current" className="expense-currency">
            Moeda:
            <select
              name="currency"
              className="current"
              id="current"
              onChange={ this.handleChange }
              value={ currency }
            >
              {currencies && currencies.map((currencie) => (
                <option
                  key={ currencie }
                  value={ currencie }
                >
                  { currencie }
                </option>))}
            </select>
          </label>
          <section className="expense-method">
            <p>Método de pagamento:</p>
            <select
              name="method"
              id="methodPayment"
              className="current"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </section>
        </div>
        <div className="expense-card-details">
          <section className="category-expense">
            <p> Categoria de despesa:</p>
            <select
              name="tag"
              id="tag"
              value={ tag }
              onChange={ this.handleChange }
              className="current"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </section>
          <label htmlFor="description" className="description-expense">
            Descrição da despesa:
            <input
              type="text"
              id="description"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <button
          className="btn-add-expense"
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
  update: state.wallet.update,
});

WalletForm.propTypes = {
  currencies: proptypes.arrayOf(proptypes.string).isRequired,
  dispatch: proptypes.func.isRequired,
  expenses: proptypes.arrayOf(proptypes.shape({
    currency: proptypes.string.isRequired,
    value: proptypes.string.isRequired,
    description: proptypes.string.isRequired,
    tag: proptypes.string.isRequired,
    method: proptypes.string.isRequired,
  })).isRequired,
  editor: proptypes.bool.isRequired,
  idToEdit: proptypes.number.isRequired,
  update: proptypes.number.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
