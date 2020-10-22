import axios from 'axios';

const createApi = () => {
  const api = axios.create({
    baseURL: ` https://rapidapi.p.rapidapi.com/`,
    timeout: 1000 * 5,
    method: "GET",
    headers: {
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key": "07e55202eemshd454005e3a79774p103cccjsn4b32f05d3a2f"}
    });

  api.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response.status === 401) {
      return error.response.status;
    }
    return Promise.reject(error);
  });

  return api;
};

export {createApi};
