import { IS_LOGIN } from "./action";

let user = JSON.parse(localStorage.getItem("user")) || {};
let initialState;

if (user.User !== "") {
  initialState = user;
} else {
  initialState = {
    _id: "",
    username: "",
    password: "",
    email: "",
    token: "",
  };
}

export const loggerReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case IS_LOGIN:
      return {
        ...state,
        _id: payload._id,
        username: payload.username,
        password: payload.password,
        email: payload.email,
        token: payload.token,
      };
    default:
      return state;
  }
};
