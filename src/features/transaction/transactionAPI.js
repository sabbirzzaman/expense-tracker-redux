import axios from '../../utils/axios';

export const getTransactions = async (filter, search, page) => {
    let queryString = '';

    const pagination = `&_page=${page}&_limit=10`

    if (filter) {
        queryString += `&type_like=${filter}`;
    }

    if (search) {
        queryString += `&q=${search}`;
    }

    const res = await axios.get(`/transactions?_sort=id&_order=desc${pagination}${queryString}`);
    const filteredRes = await axios.get(`/transactions?_sort=id&_order=desc${queryString}`);

    return {
        data: res.data,
        itemCount: filteredRes.data?.length,
    };
};

export const getTotalTransaction = async () => {
    const res = await axios.get('/transactions');

    return res.data;
};

export const addTransaction = async (data) => {
    const res = await axios.post('/transactions', data);

    return res.data;
};

export const editTransaction = async (id, data) => {
    const res = await axios.put(`/transactions/${id}`, data);

    return res.data;
};

export const deleteTransaction = async (id) => {
    const res = await axios.delete(`/transactions/${id}`);

    return res.data;
};
