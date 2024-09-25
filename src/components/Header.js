import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import capital from '../images/capital.png';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header
        className="flex text-lg content-around
      justify-evenly  max-[600px]:text-sm max-[1043px]:flex-wrap
      [1043px]:gap-y-px w-full gap-x-20 max-[382px]:text-xs"
      >
        <p className="title-wallet">
          <img
            src={ capital }
            alt="imagem de uma mão com dinheiro"
          />
          TrybeWallet
        </p>
        <p className="email-wallet">
          {`Email: ${email}`}
        </p>
        <p className="cost-wallet">
          Despesa Total:
          <span id="wallet-value">
            R$
            {' '}
            {expenses
              .reduce((acc, curr) => acc + Number(curr
                .exchangeRates[curr.currency].ask * curr.value), 0)
              .toFixed(2).replace('.', ',')}
          </span>
          <span className="header-currency-field">
            {' '}
            BRL
          </span>
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.arrayOf(propTypes.shape({
    currency: propTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(Header);
