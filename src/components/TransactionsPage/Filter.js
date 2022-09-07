import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTransaction } from '../../features/filters/filtersSlice';

const Filter = () => {
    const dispatch = useDispatch();

    const handleFilter = (value) => {
        dispatch(filterTransaction(value))
    }

    return (
        <div className="transaction-filter">
            <label>Show Transaction by:</label>

            <select onChange={(e) => handleFilter(e.target.value)}>
                <option value="" defaultValue>Show All</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
        </div>
    );
};

export default Filter;
