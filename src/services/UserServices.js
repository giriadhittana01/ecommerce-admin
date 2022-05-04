import axios from 'axios'
import { BaseURL_DEV } from './BaseURL';

const http = axios.create({
    baseURL : `${URL}/api/v1/user`,
    headers : {
        "Content-type" : "application/json",
    }
});

const TOKEN = localStorage.getItem("persist:root")?JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.Token:"";
const http_auth = axios.create({
    baseURL : `${BaseURL_DEV}/api/v1/user`,
    headers : {
        "Content-type" : "application/json",
        "authorization" : `Bearer ${TOKEN}`
    }
});

export default new class UserServices{
    getBaseURL(){
        return `${BaseURL_DEV}/api/v1/user`;
    }
    getAllUser(){
        return http_auth.get('/');
    }
    getStats(){
        return http_auth.get('/stats');
    }
}