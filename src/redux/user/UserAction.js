import AuthServices from "../../services/AuthServices";
import { loginFailure, loginStart, loginSuccess,logoutSuccess } from "./UserReducer"

const login = (user) => async (dispatch) => {
    dispatch(loginStart());
    try{
        const res = await AuthServices.loginUser(user);
        dispatch(loginSuccess(res.data.data));
        return res;
    }catch(err){
        dispatch(loginFailure());
        return err.response;
    }
}
const logout = () => async (dispatch) => {
    dispatch(logoutSuccess());
}

export  { 
    login,
    logout
}