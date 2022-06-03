import styled from "styled-components";
import { Link } from "react-router-dom";
export const Nav = styled.div`
  width: 98.5%;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: space-between;
  grid-gap: 1rem;
  grid-auto-rows: 1fr;
  justify-items: center;
  align-items: center;
  margin: auto;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;
  background-color: teal;
  color: #000;
  text-align: auto;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const UserName = styled.p`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const NavSpan = styled.span`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const InputBox = styled.input`
  width: 20%;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #fff;
  color: #000;
  text-align: auto;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }
`;

export const Button = styled.button`
  width: 20%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #fff;
  color: #000;
  text-align: auto;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }
`;

export const ProdCard = styled.div`
  width: 95.5%;
  display: grid;
  grid-direction: column;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: 1fr;
  justify-items: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;
  background-color: #fff;
  color: #000;
  text-align: auto;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  }
`;

export const ProdBorder = styled.div`
  width: 90%;
  height: 619px;
  overflow: auto;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px #f5f5f5;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    width: 92%;
    height: 619px;
    overflow: auto;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    background-color: #f5f5f5;
  }
`;

export const SelectTag = styled.select`
  width: 13%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #fff;
  color: #000;
  text-align: auto;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }
`;

export const OptionTag = styled.option`
  width: 10%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem;
  text-align: center;
  background-color: #fff;
  color: #000;
  text-align: auto;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }
`;

export const CartButton = styled.button`
  width: 40%;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: teal;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: auto;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }
`;

export const CheckOutDiv = styled.div`
  width: 95.5%;
  justify-items: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;
  background-color: #fff;
  color: #000;
  text-align: auto;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  }
`;

export const QuntyBtn = styled.button`
  width: 15%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: teal;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: auto;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }
`;

export const QntyFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QntyP = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`;

export const Summary = styled.div`
  width: 50.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  // border: 1px solid #ccc;
  border-radius: 5px;
  // box-shadow: 0px 0px 5px #ccc;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  text-align: auto;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  }
`;

export const DetailsLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
`;
