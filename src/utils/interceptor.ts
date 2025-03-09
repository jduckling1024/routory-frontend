import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// response interceptor
instance.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (e) => {
        throw e;
    }
);

export default instance;