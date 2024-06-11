import axios from "axios";

export const privateAPi = axios.create({
    baseURL: "https://projetofinalfrontend.onrender.com",
});

privateAPi.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    const customConfig = config;

    if (token) customConfig.headers.Authorization = `Bearer ${token}`;

    return customConfig;
});