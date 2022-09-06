import React from 'react';
import editIcon from '../../images/edit.svg';
import deleteIcon from '../../images/delete.svg';
import { useDispatch } from 'react-redux';
import {
    editActive,
    removeTransaction,
} from '../../features/transaction/transactionSlice';

const TransactionItem = ({ transaction }) => {
    const dispatch = useDispatch();
    const { id, name, type, amount } = transaction;

    const deleteTransactionHandler = () => {
        dispatch(removeTransaction(id));
    };

    const handleEdit = () => {
        dispatch(editActive(transaction));
    };

    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button onClick={handleEdit} className="link">
                    <img className="icon" src={editIcon} alt="edit" />
                </button>
                <button onClick={deleteTransactionHandler} className="link">
                    <img className="icon" src={deleteIcon} alt="delete" />
                </button>
            </div>
        </li>
    );
};

export default TransactionItem;
