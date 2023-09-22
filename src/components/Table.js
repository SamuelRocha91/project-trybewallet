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
        className="
      w-auto max-[715px]:overflow-x-auto [715px]:flex [715px]w-10/12"
      >
        <table
          className="max-[1264px]:text-sm m-auto
          table-auto border border-separate max-[560px]:w-6/12
          max-[1136px]:text-xs  max-[715px]:w-8/12
        bg-cyan-500 w-10/12  max-[715px]:overflow-x-auto"
        >
          <tr className="w-full">
            <th className="border p-2">Descrição</th>
            <th className="border p-2">Tag</th>
            <th className="border p-2">Método de pagamento</th>
            <th className="border p-2">Valor</th>
            <th className="border p-2">Moeda</th>
            <th className="border p-2">Câmbio utilizado</th>
            <th className="border p-2">Valor convertido</th>
            <th className="border p-2">Moeda de conversão</th>
            <th className="border p-2">Editar/Excluir</th>
          </tr>
          <tbody>
            {expenses.map((expense) => {
              const { description,
                value, method, tag, currency, exchangeRates, id } = expense;
              const { name, ask } = exchangeRates[currency];
              const convert = Number(ask * value);
              return (
                <tr key={ description }>
                  <td className="border p-2">
                    {' '}
                    { description }
                  </td>
                  <td className="border p-2">{ tag }</td>
                  <td className="border p-2">{ method }</td>
                  <td className="border p-2">{ Number(value).toFixed(2) }</td>
                  <td className="border p-2">{ name }</td>
                  <td className="border p-2">{ Number(ask).toFixed(2) }</td>
                  <td className="border p-2">{ convert.toFixed(2) }</td>
                  <td className="border p-2">Real</td>
                  <td className="flex flex-col gap-1">
                    <button
                      className="bg-green-600 p-2 w-full
                      text-white rounded-lg shadow-lg hover:opacity-70"
                      onClick={ () => this.editTag(id) }
                      data-testid="edit-btn"
                    >
                      Editar
                    </button>
                    <button
                      onClick={ () => this.deleteTag(id) }
                      data-testid="delete-btn"
                      className="bg-red-600 p-2 w-full text-white rounded-lg shadow-lg
                      hover:opacity-70"

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
