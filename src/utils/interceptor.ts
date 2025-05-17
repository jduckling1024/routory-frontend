import axios from "axios";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// request interceptor
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// response interceptor
instance.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (e) => {
        if (e.status === 401) {
            alert("로그인이 필요합니다.");
            localStorage.removeItem("accessToken");

            window.location.replace("/sign-in");
        }
        
        throw e;
    }
);

export default instance;