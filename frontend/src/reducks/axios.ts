import axios from "axios"

const client = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:80",
    // baseURL: "http://13.115.118.174",
});

export default client;