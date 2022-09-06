import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    changeTransaction,
    createTransaction,
    editInActive,
} from '../features/transaction/transactionSlice';

const Form = () => {
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

    const addTransaction = (e) => {
        e.preventDefault();
        dispatch(createTransaction({ name, type, amount: Number(amount) }));

        reset();
    };

    const updateTransaction = (e) => {
        e.preventDefault();

        dispatch(
            changeTransaction({ id: editing?.id, data: { name, type, amount: Number(amount) } })
        );
        reset();
        setIsEditing(false);
    };

    const cancelEdit = () => {
        dispatch(editInActive());
        setIsEditing(false);
        reset();
    };

    return (
        <form
            onSubmit={isEditing ? updateTransaction : addTransaction}
            className="form"
        >
            <h3>Add new transaction</h3>

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
                        required
                        name="type"
                        checked={type === "income"}
                        onChange={(e) => setType(e.target.value)}
                    />
                    <label htmlFor="transaction_type">Income</label>
                </div>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="expense"
                        name="type"
                        placeholder="Expense"
                        checked={type === "expense"}
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

            <button className="btn">{isEditing ? 'Update Transaction' : 'Add Transaction'}</button>

            {isEditing && (
                <button onClick={cancelEdit} className="btn cancel_edit">
                    Cancel Edit
                </button>
            )}
        </form>
    );
};

export default Form;
