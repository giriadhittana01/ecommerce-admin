import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/user/UserAction";
import styled from "styled-components";
import { useHistory } from 'react-router-dom'

const Error = styled.span`
  color: red;
`;


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg,setErrMsg] = useState(null);
    const { isFetching, error } = useSelector((state) => state.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(login({ username, password })).then((res) => {
            if (res.status != 200) {
                setErrMsg(res.data.message);
            } else {
                setErrMsg(null);
                history.push('/')
            }
        })
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <input
                style={{ padding: 10, marginBottom: 20 }}
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                style={{ padding: 10, marginBottom: 20 }}
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Error>{errMsg}</Error>}
            <button onClick={handleClick} style={{ padding: 10, width: 100, marginTop:20 }} disabled={isFetching}>
                Login
            </button>
        </div>
    );
};

export default Login;