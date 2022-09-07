import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://lws-server-api.herokuapp.com'
})

export default axiosInstance;