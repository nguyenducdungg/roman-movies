import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://apiwebmovie.herokuapp.com",
});

export default axiosInstance;

    