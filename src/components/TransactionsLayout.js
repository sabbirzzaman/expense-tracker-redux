import React from 'react';
import Transactions from './transactions/Transactions';

const TransactionsLayout = () => {
    return (
        <div className="App">
            <div className="header">
                <h1>All Transactions</h1>
            </div>

            <div className="main">
                <div className="container">
                    <Transactions />
                </div>
            </div>

            <div className="footer">&copy;2022 Learn with Sumit</div>
        </div>
    );
};

export default TransactionsLayout;