import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://apiwebmovie.herokuapp.com",
    headers: {
        "Content-Type": "application/json",

    },
});
export default axiosInstance;

