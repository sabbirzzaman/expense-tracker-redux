import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTransaction } from '../../features/filters/filtersSlice';

const Search = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchTransaction(search))
    }

    return (
        <form onSubmit={(e) => handleSearch(e)}>
            <div className='search-field'>
                <input
                    type="text"
                    name="search"
                    className='search-input'
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type='submit' className='search-btn'>Search</button>
            </div>
        </form>
    );
};

export default Search;