import axios from 'axios';
//REACT_APP_BACKEND_URL=http://localhost:4000
const clienteAxios = axios.create({
    baseURL : process.env.REACT_APP_BACKEND_URL
})

export default clienteAxios;