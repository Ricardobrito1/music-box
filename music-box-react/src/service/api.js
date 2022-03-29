import axios from "axios";

const api = axios.create({
    baseURL: "https://62423a5ed126926d0c4f2cef.mockapi.io/music"
})
export default api;