import axiosClient from "./ApiAxios";

const getMovie = (id, params) => {
    return axiosClient.get(`/getMovie/${id}`, { params });
};

// eslint-disable-next-line
export default { getMovie };
