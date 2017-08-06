import axios from 'axios';

let base = '';

export const getRank = params => { return axios.get(`/Home/Api/getCategory`,{}); }
export const getLogin = params => { return axios.post(`/Home/Api/loginConfirme`,{ params: params}); }
export const register = params => { return axios.post(`/Home/Api/register`,{ params: params}); }