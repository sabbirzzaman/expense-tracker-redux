import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    changeTransaction,
    editInActive,
} from '../../features/transaction/transactionSlice';

const EditModal = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('income');
    const [amount, setAmount] = useState('');

    const [isEditing, setIsEditing] = useState(false);

    const { editing } = useSelector((state) => state.transactions);

    const dispatch = useDispatch();

    useEffect(() => {
        if (editing?.id) {
            setIsEditing(true);
            const { name, amount, type } = editing;

            setName(name);
            setAmount(amount);
            setType(type);
        } else {
            setIsEditing(false);
            reset();
        }
    }, [editing]);

    const reset = () => {
        setName('');
        setType('');
        setAmount('');
    };

    const updateTransaction = (e) => {
        e.preventDefault();

        dispatch(
            changeTransaction({
                id: editing?.id,
                data: { name, type, amount: Number(amount) },
            })
        );
        dispatch(editInActive());
        setIsEditing(false);
        reset();
    };

    const cancelEdit = () => {
        dispatch(editInActive());
        setIsEditing(false);
        reset();
    };

    useEffect(() => {
        if (isEditing) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'scroll';
        }
    }, [isEditing]);

    return (
        <div className={`edit-modal ${!isEditing && 'modal-hidden'}`}>
            <form onSubmit={updateTransaction} className="form">
                <div className="modal-header">
                    <h3>Edit transaction</h3>
                    <button onClick={cancelEdit}>x</button>
                </div>

                <div className="form-group">
                    <label htmlFor="transaction_name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Transaction title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group radio">
                    <label htmlFor="transaction_type">Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="type"
                            checked={type === 'income'}
                            onChange={(e) => setType(e.target.value)}
                            required
                        />
                        <label htmlFor="transaction_type">Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked={type === 'expense'}
                            onChange={(e) => setType(e.target.value)}
                        />
                        <label htmlFor="transaction_type">Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="transaction_amount">Amount</label>
                    <input
                        type="number"
                        placeholder="300"
                        required
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button className="btn">Update Transaction</button>
            </form>
        </div>
    );
};

export default EditModal;
