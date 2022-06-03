import axios from "axios";
import { API } from "../../Components/API";

// action type
export const IS_LOGIN = "IS_LOGIN";

// action creator
export const isLogin = (payload) => ({ type: IS_LOGIN, payload });

// action as a function
export const registerFunc = (payload, navigate) => (dispatch) => {
  console.log("register Function");
  axios
    .post(`${API}/users`, payload)
    .then((res) => {
      console.log("register data", res.data);
      alert("User Register Successfull !!!");
      navigate("/login");
    })
    .catch((e) => {
      console.log("register user error");
    });
};

export const loginFunc = (payload, navigate) => (dispatch) => {
  axios
    .post(`${API}/login`, payload)
    .then((res) => {
      console.log("login data", res.data);
      alert("User Login Successfull !!!");
      localStorage.setItem(
        "user",
        JSON.stringify({
          _id: res.data.user._id,
          username: res.data.user.username,
          password: res.data.user.password,
          email: res.data.user.email,
          token: res.data.token,
        })
      );
      dispatch(
        isLogin({
          _id: res.data.user._id,
          username: res.data.user.username,
          password: res.data.user.password,
          email: res.data.user.email,
          token: res.data.token,
        })
      );
      navigate("/");
    })
    .catch((e) => {
      console.log("register user error");
    });
};
