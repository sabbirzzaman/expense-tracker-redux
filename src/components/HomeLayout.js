import React from 'react';
import Balance from './Balance';
import Form from './Form';
import Transactions from './transactions/Transactions';

const HomeLayout = () => {
    return (
        <div className="App">
            <div className="header">
                <h1>Expense Tracker</h1>
            </div>

            <div className="main">
                <div className="container">
                    <Balance />
                    <Form />
                    <Transactions />
                </div>
            </div>

            <div className="footer">&copy;2022 Learn with Sumit</div>
        </div>
    );
};

export default HomeLayout;