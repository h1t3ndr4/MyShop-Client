import React from "react";
import {
  Nav,
  Heading,
  NavSpan,
  StyledLink,
  UserName,
} from "./StyledComponents";
import { isLogin } from "../Redux/Logger/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, username, password, email, token } = useSelector(
    (store) => store.login
  );

  const handleLogout = () => {
    alert("Logged out successfully");
    localStorage.setItem(
      "user",
      JSON.stringify({
        _id: "",
        username: "",
        password: "",
        email: "",
        token: "",
      })
    );
    dispatch(
      isLogin({
        _id: "",
        username: "",
        password: "",
        email: "",
        token: "",
      })
    );
    navigate("/login");
  };
  return (
    <>
      <Nav>
        <StyledLink to="/">
          <Heading>MyShop</Heading>
        </StyledLink>
        {username !== "" ? <StyledLink to="/">Products</StyledLink> : ""}
        {username !== "" ? (
          <UserName>Hello {username}</UserName>
        ) : (
          <StyledLink to="/login">Login</StyledLink>
        )}
        {username !== "" ? (
          <NavSpan onClick={handleLogout}>Logout</NavSpan>
        ) : (
          ""
        )}
        {username !== "" ? "" : <StyledLink to="/signup">Signup</StyledLink>}
        {username !== "" ? <StyledLink to="/cart">Cart</StyledLink> : ""}
      </Nav>
    </>
  );
}
