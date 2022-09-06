import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../features/transaction/transactionSlice';
import Transaction from './Transaction';

const Transactions = () => {
    const { transactions, isLoading, isError, error } = useSelector(
        (state) => state.transactions
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    // manage content
    let content;

    if (isLoading && !isError) {
        content = 'loading...';
    }

    if (!isLoading && transactions.length === 0) {
        content = 'No video founded!';
    }
    
    if (!isLoading && transactions.length > 0) {
        const filteredTransactions = [...transactions].reverse().slice(0, 5);

        content = filteredTransactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
        ));
    }

    if (!isLoading && isError) {
        content = <p className='transaction error'>{error}</p>;
    }

    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>{content}</ul>
                {transactions.length > 5 && <button className="view-all">Show All Transactions</button>}
            </div>
        </>
    );
};

export default Transactions;
