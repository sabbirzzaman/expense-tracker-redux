import React from 'react';
import TransactionsPage from './TransactionsPage/TransactionsPage';

const TransactionsLayout = () => {
    return (
        <div className="App">
            <div className="header">
                <h1>All Transactions</h1>
            </div>

            <div className="main">
                <div className="container">
                    <TransactionsPage />
                </div>
            </div>

            <div className="footer">&copy;2022 Learn with Sumit</div>
        </div>
    );
};

export default TransactionsLayout;
