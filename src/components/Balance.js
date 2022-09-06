import React from 'react';
import { useSelector } from 'react-redux';
import numberWithComma from '../utils/numberWIthComma';

const Balance = () => {
    const {transactions} = useSelector(state => state.transactions);

    let balance = 0;

    if(transactions.length > 0) {
        transactions.forEach((transaction => {
            if(transaction.type === 'income') {
                balance += transaction.amount
            } else {
                balance -= transaction.amount
            }
        }))
    }

    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳ </span>
                <span>{numberWithComma(balance)}</span>
            </h3>
        </div>
    );
};

export default Balance;
