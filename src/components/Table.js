import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionDelete } from '../redux/actions';

class Table extends Component {
  deleteTag = (id) => {
    const { dispatch } = this.props;
    console.log('aqui');
    dispatch(actionDelete(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          <tbody>
            {expenses.map((expense) => {
              const { description,
                value, method, tag, currency, exchangeRates, id } = expense;
              const { name, ask } = exchangeRates[currency];
              const convert = Number(ask * value);
              return (
                <tr key={ description }>
                  <td>
                    {' '}
                    { description }
                  </td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ Number(value).toFixed(2) }</td>
                  <td>{ name }</td>
                  <td>{ Number(ask).toFixed(2) }</td>
                  <td>{ convert.toFixed(2) }</td>
                  <td>Real</td>
                  <td>
                    <button
                      onClick={ () => this.deleteTag(id) }
                      data-testid="delete-btn"
                    >
                      Excluir
                    </button>

                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: propTypes.arrayOf(propTypes.shape({
    currency: propTypes.string.isRequired,
  })).isRequired,
  dispatch: propTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
