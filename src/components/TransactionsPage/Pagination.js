import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../features/transaction/transactionSlice';

const Pagination = () => {
    const { itemCount, isLoading, isError, page } = useSelector(
        (state) => state.transactions
    );

    const dispatch = useDispatch();

    const pagination = Math.ceil(itemCount / 10);

    const handlePage = (page) => {
        dispatch(changePage(page));
    };

    // manage content
    let content;

    if (!isLoading && !isError) {
        content = (
            <>
                <button disabled={page === 1 ? true : false} onClick={() => handlePage(page - 1)} className={`pagination-btn`}>Prev</button>
                {[...Array(pagination).keys()].map((currentPage) => (
                    <button
                        key={currentPage}
                        onClick={() => handlePage(currentPage + 1)}
                        className={`page ${
                            page === currentPage + 1 && 'page-active'
                        }`}
                    >
                        {currentPage + 1}
                    </button>
                ))}
                <button disabled={page === pagination && true} onClick={() => handlePage(page + 1)} className={`pagination-btn`}>Next</button>
            </>
        );
    }

    return <div className="pagination">{content}</div>;
};

export default Pagination;
