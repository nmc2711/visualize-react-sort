import React from "react";
import styled from "styled-components";
import { range, shuffle } from "lodash";
const getArr = () => shuffle(range(1, 11));
function InsertSort() {
  const arr = getArr();

  return (
    <Wrap>
      <div className="board">{arr.join(",")}</div>
      <BtnContainer>
        <button>셔플</button>
        <button>정렬</button>
      </BtnContainer>
    </Wrap>
  );
}

export default InsertSort;

const Wrap = styled.div`
  width: 100%;
  .board {
    height: 200px;
    background-color: paleturquoise;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 8px;
  background-color: aliceblue;
  font-size: 18px;
  button {
    width: 64px;
    height: 36px;
    border: none;
    font-size: 18px;
    background-color: midnightblue;
    color: #fff;
    cursor: pointer;
    &:first-child {
      margin-right: 8px;
    }
  }
`;
