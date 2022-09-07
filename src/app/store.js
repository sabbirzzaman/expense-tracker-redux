import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '../features/filters/filtersSlice';
import transactionReducer from '../features/transaction/transactionSlice'

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    filters: filtersReducer,
  },
});
