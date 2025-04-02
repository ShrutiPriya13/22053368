import axios from "axios";

const BASE_URL = "http://20.244.56.144/evaluation-service"; // Replace with the actual API URL

export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
