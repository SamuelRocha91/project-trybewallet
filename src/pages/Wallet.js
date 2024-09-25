import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div
        className="min-h-screen bg-hero-pattern mix-blend-lighten bg-cover
      flex items-center flex-col gap-1.5"
      >
        <div
          className="bg-white w-4/5 flex flex-col shadow-lg opacity-70
        items-center justify-center p-10 rounded-xl gap-y-10 mt-2"
        >
          <Header />
          <WalletForm />
        </div>
        {expenses.length > 0 && <Table />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  expenses: propTypes.arrayOf(propTypes.shape({
    currency: propTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(Wallet);
