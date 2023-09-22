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
    update: 0,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApiCurrencies());
  }

  componentDidUpdate() {
    const { idToEdit, expenses, editor } = this.props;
    const { update } = this.state;
    if (editor && update === 0) {
      this.setState({
        currency: expenses[idToEdit].currency,
        value: expenses[idToEdit].value,
        description: expenses[idToEdit].description,
        method: expenses[idToEdit].method,
        tag: expenses[idToEdit].tag,
        update: 1,
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
      update: 0 });
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
      <div
        className="flex flex-col gap-y-7 gap-x-2 text-sky-600
      max-[800px]:text-sm max-[720px]:text-xs flex-wrap"
      >
        <div
          className="flex gap-x-14 justify-center flex-wrap
         max-[948px]:gap-y-5"
        >
          <label className="flex gap-x-2 w-1/6 self-center" htmlFor="value">
            Valor:
            <input
              className="border border-cyan-600 w-full
              p-1  max-[8000px]:w-14 max-[795px]:p-1"
              name="value"
              value={ value }
              onChange={ this.handleChange }
              data-testid="value-input"
              min="0"
              type="number"
              id="value"
            />
          </label>
          <label className="flex gap-x-2" htmlFor="current">
            Moeda:
            <select
              className="p-0.5"
              data-testid="currency-input"
              name="currency"
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
          <section className="flex gap-x-2 max-[490px]:gap-x-1">
            <p>Método de pagamento:</p>
            <select
              className="p-0.5"
              data-testid="method-input"
              name="method"
              id="methodPayment"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </section>
        </div>
        <div
          className="flex justify-center items-center gap-x-7
        flex-wrap max-[1010px]:gap-y-5"
        >
          <section className="flex gap-x-2">
            <p> Categoria de despesa:</p>
            <select
              className="p-0.5"
              data-testid="tag-input"
              name="tag"
              id="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </section>
          <label className="flex gap-x-2" htmlFor="description">
            Descrição da despesa:
            <input
              className="border border-cyan-600 max-[795px]:p-1"
              data-testid="description-input"
              type="text"
              id="description"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <button
          onClick={ editor ? this.editTag : this.saveTag }
          className="bg-green-600 p-2 w-full text-white rounded-lg shadow-lg "
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
    value: proptypes.string.isRequired,
    description: proptypes.string.isRequired,
    tag: proptypes.string.isRequired,
    method: proptypes.string.isRequired,
  })).isRequired,
  editor: proptypes.bool.isRequired,
  idToEdit: proptypes.number.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
