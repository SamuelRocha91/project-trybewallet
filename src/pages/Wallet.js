import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div
        className="min-h-screen bg-hero-pattern mix-blend-lighten bg-cover
      flex items-center flex-col gap-1.5"
      >
        <div
          className="bg-white w-4/5 flex flex-col shadow-lg opacity-70
        items-center justify-center gap-y-5 p-10 rounded-xl gap-y-10"
        >
          <Header />
          <WalletForm />
        </div>
        <Table />
      </div>
    );
  }
}

export default Wallet;
