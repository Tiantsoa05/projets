import axios from "axios";

const axiosQuery = axios.create({
    baseURL: "http://localhost:5000/employers"
})

export default axiosQuery