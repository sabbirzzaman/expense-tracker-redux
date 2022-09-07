import React from 'react';

const Filter = () => {
    return (
        <div className="transaction-filter">
            <label htmlFor="transaction">Show Transaction by:</label>

            <select name="transaction" id="transaction">
                <option defaultValue="all">Show All</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
        </div>
    );
};

export default Filter;
