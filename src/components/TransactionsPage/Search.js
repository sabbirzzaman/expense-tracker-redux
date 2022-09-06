import React from 'react';

const Search = () => {
    return (
        <form className="form search">
            <div className='search-field'>
                <input
                    type="text"
                    name="search"
                    className='search-input'
                    placeholder="Search..."
                    required
                />
                <button type='submit' className='search-btn'>Search</button>
            </div>
        </form>
    );
};

export default Search;