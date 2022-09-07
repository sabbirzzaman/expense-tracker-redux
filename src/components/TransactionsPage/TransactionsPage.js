import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../features/transaction/transactionSlice';
import Balance from '../Balance';
import EditModal from './EditModal';
import Filter from './Filter';
import Pagination from './Pagination';
import Search from './Search';
import TransactionItem from './TransactionItem';

const TransactionsPage = () => {
    const { transactions, isLoading, isError, error, page } = useSelector(
        (state) => state.transactions
    );
    const { filter, search } = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransactions({filter, search, page}));
    }, [dispatch, filter, search, page]);

    // manage content
    let content;

    if (isLoading && !isError) {
        content = 'loading...';
    }

    if (!isLoading && transactions.length > 0) {
        const filteredTransactions = transactions;

        content = filteredTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
        ));
    }

    if (!isLoading && transactions.length === 0) {
        content = 'No video founded!';
    }

    if (!isLoading && isError) {
        content = <p className="transaction error">{error}</p>;
    }

    return (
        <>
            <Balance />
            <div className="form search">
                <Search />
                <Filter />
            </div>

            <div className="conatiner_of_list_of_transactions">
                <ul>{content}</ul>

                <Pagination />
            </div>

            <EditModal />
        </>
    );
};

export default TransactionsPage;
