import { useState } from "react";
import styled from "styled-components";

export function Counter(props) {
  const [counter, setCounter] = useState(1);
  const handleChange = (val) => {
    setCounter(val);
  };

  const QuntyBtn = styled.button`
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

  const QntyFlex = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const QntyP = styled.p`
    font-size: 0.9rem;
    font-weight: bold;
  `;

  return (
    <>
      <div>
        <QntyFlex>
          <QuntyBtn
            onClick={() => {
              handleChange(-1);
            }}
          >
            -
          </QuntyBtn>
          <QntyP>{counter}</QntyP>
          <QuntyBtn
            onClick={() => {
              handleChange(1);
            }}
          >
            +
          </QuntyBtn>
        </QntyFlex>
      </div>
    </>
  );
}
