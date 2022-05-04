import axios from 'axios'
import { BaseURL_DEV } from './BaseURL';

const TOKEN = localStorage.getItem("persist:root")?JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.Token:"";

const http = axios.create({
    baseURL : `${BaseURL_DEV}/api/v1/auth`,
    headers : {
        "Content-type" : "application/json"
    }
});

// const token = "";
// const http_auth = axios.create({
//     baseURL : `${URL}/api/v1/product`,
//     headers : {
//         "Content-type" : "apllication/json",
//         "Authorization" : `Bearer ${token}`
//     }
// });

export default new class AuthServices{
    getBaseURL(){
        return `${BaseURL_DEV}/api/v1/auth`;
    }
    loginUser(data){
        return http.post(`/login`,data)
    }
}