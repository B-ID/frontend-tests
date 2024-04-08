import Axios from 'axios';


const baseURL = 'https://jsonplaceholder.typicode.com';

// const getAccessToken = () => {}


const axiosInstance = Axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${baseURL}`
    }
})


export {axiosInstance as axios}

