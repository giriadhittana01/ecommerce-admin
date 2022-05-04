import axios from 'axios'
import { BaseURL_DEV } from './BaseURL';

const http = axios.create({
    baseURL : `${BaseURL_DEV}/api/v1/order`,
    headers : {
        "Content-type" : "application/json",
    }
});

const TOKEN = localStorage.getItem("persist:root")?JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.Token:"";

const http_auth = axios.create({
    baseURL : `${BaseURL_DEV}/api/v1/order`,
    headers : {
        "Content-type" : "application/json",
        "authorization" : `Bearer ${TOKEN}`
    }
});

export default new class UserServices{
    getBaseURL(){
        return `${BaseURL_DEV}/api/v1/order`;
    }
    getAllOrder(){
        return http_auth.get('/');
    }
    getIncome(pid){
        if(!pid){
            return http_auth.get('/income');
        }else{
            return http_auth.get(`/income?pid=${pid}`);
        }
    }
}