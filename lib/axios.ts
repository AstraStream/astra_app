import Axios from "axios";
import config from "./config";

const axios = Axios.create({
    baseURL: config.backendApi
});

export const axiosAuth = Axios.create({
    baseURL: config.backendApi
});

axiosAuth.interceptors.request.use(config => {
    const astraTokens = JSON.parse(localStorage.getItem("astra-tk") as string) ?? null;

    if (astraTokens && astraTokens.accessToken) {
        console.log(astraTokens.accessToken, astraTokens)
        config.headers.Authorization = `Bearer ${astraTokens.accessToken}`;
    } else {
        config.headers.Authorization = null;
    }

    return config;
}, (error) => {
    console.log(error);
    return Promise.reject(error);
});

export default axios;