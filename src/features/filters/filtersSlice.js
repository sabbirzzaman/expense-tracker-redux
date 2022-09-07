import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: '',
    search: '',
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterTransaction: (state, action) => {
            state.filter = action.payload;
        },
        searchTransaction: (state, action) => {
            state.search = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { filterTransaction, searchTransaction } = filterSlice.actions;
