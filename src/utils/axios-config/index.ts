import Axios from 'axios';


const baseURL = 'https://jsonplaceholder.typicode.com';

// const getAccessToken = () => {}


const axiosInstance = Axios.create({
    baseURL,
    headers: {
        Authorization: ''
    }
})


export {axiosInstance as axios}

