import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionDelete, actionEditInit } from '../redux/actions';

class Table extends Component {
  deleteTag = (id) => {
    const { dispatch } = this.props;
    dispatch(actionDelete(id));
  };

  editTag = (id) => {
    const { dispatch } = this.props;
    dispatch(actionEditInit(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div
        className={ 'w-auto overflow-x-auto max-w-full py-4'
          + 'px-2 bg-gray-50 rounded-lg shadow-lg' }
      >
        <table
          className={ 'w-full table-auto border-collapse'
            + 'bg-white rounded-lg shadow-md' }
        >
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="border-b p-4 text-left">Descrição</th>
              <th className="border-b p-4 text-left">Tag</th>
              <th className="border-b p-4 text-left">Método de pagamento</th>
              <th className="border-b p-4 text-left">Valor</th>
              <th className="border-b p-4 text-left">Moeda</th>
              <th className="border-b p-4 text-left">Câmbio utilizado</th>
              <th className="border-b p-4 text-left">Valor convertido</th>
              <th className="border-b p-4 text-left">Moeda de conversão</th>
              <th className="border-b p-4 text-left">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => {
              const {
                description,
                value,
                method,
                tag,
                currency,
                exchangeRates,
                id,
              } = expense;
              const { name, ask } = exchangeRates[currency];
              const convert = Number(ask * value);

              return (
                <tr
                  key={ description }
                  className="border-t border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  <td className="p-4 border-b">{description}</td>
                  <td className="p-4 border-b">{tag}</td>
                  <td className="p-4 border-b">{method}</td>
                  <td className="p-4 border-b">
                    {Number(value).toFixed(2).replace('.', ',')}
                  </td>
                  <td className="p-4 border-b">{name}</td>
                  <td className="p-4 border-b">
                    {Number(ask).toFixed(2).replace('.', ',')}
                  </td>
                  <td className="p-4 border-b">
                    {convert.toFixed(2).replace('.', ',')}
                  </td>
                  <td className="p-4 border-b">Real</td>
                  <td className="p-4 border-b flex gap-2">
                    <button
                      className={ 'bg-green-500 text-white px-3 py-1'
                        + 'rounded-lg shadow-md hover:bg-green-400 transition' }
                      onClick={ () => this.editTag(id) }
                      data-testid="edit-btn"
                    >
                      Editar
                    </button>
                    <button
                      className={ 'bg-red-500 text-white px-3 py-1 rounded-lg'
                        + ' shadow-md hover:bg-red-400 transition' }
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
