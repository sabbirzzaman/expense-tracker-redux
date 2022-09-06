import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../features/transaction/transactionSlice';
import Search from './Search';
import TransactionItem from './TransactionItem';

const TransactionsPage = () => {
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
        const filteredTransactions = [...transactions].reverse();

        content = filteredTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
        ));
    }

    if (!isLoading && isError) {
        content = <p className='transaction error'>{error}</p>;
    }

    return (
        <>
        <Search />
            <p className="second_heading">All Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>{content}</ul>
            </div>
        </>
    );
};

export default TransactionsPage;