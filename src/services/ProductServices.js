import axios from 'axios'
import { BaseURL_DEV, BaseURL_PROD } from './BaseURL';

const http = axios.create({
    baseURL : `${BaseURL_PROD}/api/v1/product`,
    headers : {
        "Content-type" : "application/json",
        'Access-Control-Allow-Origin': `${BaseURL_PROD}`,
    }
});

const TOKEN = localStorage.getItem("persist:root")?JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.Token:"";

const http_auth = axios.create({
    baseURL : `${BaseURL_PROD}/api/v1/product`,
    headers : {
        "Content-type" : "application/json",
        "authorization" : `Bearer ${TOKEN}`,
    }
});

export default new class ProductServices{
    getBaseURL(){
        return `${BaseURL_PROD}/api/v1/product`;
    }
    getAllProduct(category){
        if(category){
            return http.get(`/?category=${category}`)
        }else{
            return http.get(`/`)
        }
    }
    deleteProduct(id){
        return http_auth.delete(`/${id}`)
    }
    updateProduct(id,product){
        return http_auth.put(`/${id}`,product)
    }
    addProduct(product){
        return http_auth.post(`/`,product)
    }
}