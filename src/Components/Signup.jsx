import React, { useState } from "react";
import { InputBox, CartButton } from "./StyledComponents";
import { registerFunc } from "../Redux/Logger/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleData = (e) => {
    const { value, id } = e.target;
    setData({ ...data, [id]: value });
  };
  const handleSubmit = () => {
    console.log("SignUp Data", data);
    dispatch(registerFunc(data, navigate));
  };
  return (
    <>
      <h1>Signup</h1>
      <br />
      <div className="SignupContainer">
        <InputBox
          type="text"
          placeholder="Name"
          id="name"
          onChange={(e) => handleData(e)}
        />
        <br />
        <br />
        <InputBox
          id="email"
          type="email"
          placeholder="Email"
          onChange={(e) => handleData(e)}
        />
        <br />
        <br />
        <InputBox
          id="username"
          type="text"
          placeholder="Username"
          onChange={(e) => handleData(e)}
        />
        <br />
        <br />
        <InputBox
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => handleData(e)}
        />
        <br />
        <br />
        <CartButton style={{ width: "15rem" }} onClick={handleSubmit}>
          Signup
        </CartButton>
      </div>
    </>
  );
}
