import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/UserAction";
import { useHistory } from 'react-router-dom'

export default function Topbar({admin}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
  }
  const registerUser = () => {
    history.push('/register');
  }
  const loginUser = () => {
    history.push('/login');
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Giri Putra Adhittana</span>
        </div>
        <div className="topRight">
          {
            admin?(
              <>
                <div className="topbarIconContainer">
                  <NotificationsNone />
                  <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                  <Language />
                  <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                  <Settings />
                </div>
                <div className="topbarIconContainer">
                  <button type="submit" onClick={logoutUser}>Logout</button>
                </div>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
              </>
            ):(
              <div className="topbarIconContainer">
                  <button type="submit" onClick={registerUser}>Register</button>
                  <button type="submit" onClick={loginUser}>Login</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
