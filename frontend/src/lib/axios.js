import axios from "axios";

const api = axios.create({
    baseURL:"https://notes-fullstack-ttf4.onrender.com/api"
})

export default api
