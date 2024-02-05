import axios from "axios";

const token = localStorage.getItem('token');

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.common = {Authorization: `${token}`};
axios.defaults.headers.post["content-type"] = "application/x-www-form-urlencoded";


export default axios