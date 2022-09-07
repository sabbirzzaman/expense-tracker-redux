import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    addTransaction,
    deleteTransaction,
    editTransaction,
    getTransactions,
} from './transactionAPI';

const initialState = {
    isLoading: false,
    isError: false,
    transactions: [],
    error: '',
    editing: {},
    page: 1,
    itemCount: 0,
};

// async thunk
export const fetchTransactions = createAsyncThunk(
    'transactions/fetchTransactions',
    async ({filter, search, page}) => {
        const transactions = getTransactions(filter, search, page);
        return transactions;
    }
);

export const createTransaction = createAsyncThunk(
    'transactions/createTransaction',
    async (data) => {
        const transaction = addTransaction(data);
        return transaction;
    }
);

export const changeTransaction = createAsyncThunk(
    'transactions/changeTransaction',
    async ({ id, data }) => {
        const transaction = editTransaction(id, data);
        return transaction;
    }
);

export const removeTransaction = createAsyncThunk(
    'transactions/removeTransaction',
    async (id) => {
        const transaction = deleteTransaction(id);
        return transaction;
    }
);

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        editActive: (state, action) => {
            state.editing = action.payload;
        },
        editInActive: (state) => {
            state.editing = {};
        },
        changePage: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTransactions.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchTransactions.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.transactions = action.payload.data;
            state.error = '';
            state.itemCount = action.payload.itemCount;
        });
        builder.addCase(fetchTransactions.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.transactions = [];
            state.error = action.error?.message;
            state.itemCount = 0;
        });
        builder.addCase(createTransaction.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(createTransaction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.transactions.push(action.payload);
            state.error = '';
        });
        builder.addCase(createTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        });
        builder.addCase(changeTransaction.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(changeTransaction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            const matched = state.transactions.findIndex(
                (t) => t.id === action.payload.id
            );

            state.transactions[matched] = action.payload;
            state.error = '';
        });
        builder.addCase(changeTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        });
        builder.addCase(removeTransaction.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(removeTransaction.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.isError = false;
            state.transactions = state.transactions.filter(
                (t) => t.id !== action.meta.arg
            );
            state.error = '';
        });
        builder.addCase(removeTransaction.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        });
    },
});

export default transactionSlice.reducer;
export const { editActive, editInActive, changePage } = transactionSlice.actions;
