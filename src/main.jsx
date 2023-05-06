import React from "react";
import Box from "./components/box";
import Circle from "./components/circle";
import Card from "./components/card";
import styled from "styled-components";





const Circleset =styled.div`
  display: inline-block;

`


const Main = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];


  
  return (
    <>
      <Box boxColor="red" text="1번"/>
      <Box boxColor="blue"text="2번"/>
      <Box boxColor="green"text="3번"/>
      <Box boxColor="pink"text="4번"/>


      <Circleset>
      <Circle circleColor="pink" />
      <Circle circleColor="red"/>
      <Circle circleColor="black"/>
      <Circle circleColor="grey"/>
      <Circle circleColor="green"/>
      <Circle circleColor="blue"/>
      <Circle circleColor="yellow"/>
      </Circleset>

      <br></br>

      <Card url="https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png" title="짱구는못말려1번" content="짱구"
      buttonColor1="blue" buttonColor2="skyblue"/>
      <Card url="https://i.namu.wiki/i/o81kFfad6uoV0sN0iGSqA3hEKyIniZUhP7VBq2dI3WeyOFalhAEa_lQ_SY0GEbC_oJ4qzLlKokalWFk6cx86vg.webp" title="짱구는못말려2번" content="짱아"
      buttonColor1="red" buttonColor2="pink"/>
      <Card url="https://i.namu.wiki/i/hWLEwQhnjvdoRZQhrgHMKAZjiSVPO5D86_nBD6OCVLHamm0dM7Ssv2KTfYgjJj-V_X3hMsgV-LeIgI7lmbqzhA.webp" title="짱구는못말려3번" content="맹구"
      buttonColor1="black" buttonColor2="gray"/>

       <br></br>

      <Card url="https://static.miraheze.org/bigforestwiki/d/de/%EC%A2%86%EB%A6%AC.png" title="짱구는못말려4번" content="유리"
      buttonColor1="green" buttonColor2="white"/>
      <Card url="https://i.namu.wiki/i/zfd-NOPP39XJ49BUBLXu8d3SAPsYnpvqYviuQHzSe8FqI6DhYAaHp5Nx30dWi_Q5XGUcbczMfuSp1lOMAN3NvA.webp" title="짱구는못말려5번" content="훈이"
      buttonColor1="orange" buttonColor2="yellow"/>
    </>


  );


  
  

};


export default Main;
