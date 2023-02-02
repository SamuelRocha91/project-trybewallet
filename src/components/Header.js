import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ `Email: ${email}` }</p>
        <p>Despesa Total: R$</p>
        <p data-testid="total-field">
          {expenses
            .reduce((acc, curr) => acc + Number(curr
              .exchangeRates[curr.currency].ask * curr.value), 0)
            .toFixed(2)}
        </p>
        <span data-testid="header-currency-field">BRL</span>
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
