import axiosClient from "./ApiAxios";

const getMovie = (id, params) => {
    return axiosClient.get(`/getMovie/${id}`, { params });
};
const search = ({ keyword }) => {
    return axiosClient.get(`/findmovie/${keyword}`);
}

// eslint-disable-next-line
export default { getMovie, search };
