import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://apiwebmovie.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    
  },
});

export default axiosClient;
