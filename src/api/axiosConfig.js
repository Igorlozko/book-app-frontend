import axios from 'axios';

export default axios.create({
    baseURL:'localhost:8080',
    headers:{"ngrok-skip-browser-warning":"true"}
    //https://76df-2001-bb7-1cfc-bd00-31bd-5f8-173c-1ee7.ngrok-free.app
});