import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totalTransactions } from '../features/transaction/transactionSlice';
import numberWithComma from '../utils/numberWIthComma';

const Balance = () => {
    const { balance } = useSelector((state) => state.transactions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(totalTransactions())
    }, [dispatch])

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
