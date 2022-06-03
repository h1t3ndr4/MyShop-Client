import React, { useState } from "react";
import { InputBox, CartButton } from "./StyledComponents";
import { loginFunc } from "../Redux/Logger/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleData = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleSubmit = () => {
    dispatch(loginFunc(data, navigate));
  };

  return (
    <>
      <h1>Login</h1>
      <br />

      <div className="LoginContainer">
        <InputBox
          type="text"
          required
          id="username"
          placeholder="Username"
          onChange={(e) => handleData(e)}
        />
        <br />
        <br />

        <InputBox
          type="password"
          required
          id="password"
          placeholder="Password"
          onChange={(e) => handleData(e)}
        />
        <br />
        <br />
        <CartButton style={{ width: "15rem" }} onClick={handleSubmit}>
          Login
        </CartButton>
      </div>
    </>
  );
}
