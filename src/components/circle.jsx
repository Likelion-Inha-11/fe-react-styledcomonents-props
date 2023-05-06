import React from "react";
import styled from "styled-components";

const CircleEach = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px;
  border-radius: 50%;
  background-color: ${(props) => (props.circleColor ? props.circleColor : "green")};
  display: inline-block;
  align-items: center;
  justify-content: center;
  
`;


const Circle = (props) => {
  return (
    <>
      <CircleEach circleColor={props.circleColor}>
      </CircleEach>
     
      
      
    </>
  );
};

export default Circle;
