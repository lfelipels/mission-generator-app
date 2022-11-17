import axios from "axios"

const api = axios.create({
    baseURL: process.env. VUE_APP_URL_API_GERADOR_MISSOES,
    headers: {
        'Content-Type': 'application/json'
    }
});

export {
    api
}