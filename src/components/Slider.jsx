import React from 'react'
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import { SliderItems } from '../myData';
import { useState } from 'react';
import { mobile } from '../responsiveDesign/responsive';

const Container=styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    background-color: #ececce;
    position:relative;
    align-items: center;
    overflow: hidden;

    //responsive
    ${mobile({display: "none"})}

`
const Arrow=styled.div`
    height: 50px;
    width:50px;
    background-color:white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left:${(props)=> props.direction==="left" && "10px"};
    right:${(props)=> props.direction==="right" && "10px"};
    margin:auto;
    cursor: pointer;
    opacity: 0.5;
    z-index:2;
`

const Wrapper=  styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);   
    transition : all 1.0s ease;
    
`

const Slide=styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items: center;   
 
`
const ImgContainer=styled.div`
    height: 100%;
    flex:1;
`
const InfoContainer=styled.div`
    flex:1;
`

const Image=styled.img`
    height: 80%;
`

const Title=styled.h1`
    font-size: 50px;
    letter-spacing: 10px;
`
const Description=styled.p`
    font-size: 25px;
    margin:50px 0;

`

const Button=styled.button`
    padding: 10px;
    background-color: transparent;
    font-size: 15px;
    cursor: pointer;
`

// const Arrowleft=styled.div`
//     height: 50px;
//     width:50px;
//     background-color:white;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
    
// `
// const Arrowright=styled.div`
//     height: 50px;
//     width:50px;
//     background-color:white;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
    
// `


const Slider = () => {
    const [slideIndex, setslideIndex] = useState(0);
    console.log(slideIndex);
    //to handle the slide change
    const handleClick=(navigate)=>{
       if(navigate==="left"){
        setslideIndex(slideIndex===0?2:slideIndex-1);
       }
       else{
        setslideIndex(slideIndex<2?slideIndex+1:0);
       }
    }


    return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            {/* <ArrowBackIosIcon></ArrowBackIosIcon> */}
            <i class="fa fa-angle-left fa-lg" aria-hidden="true" ></i>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {SliderItems.map((item)=>(
                <Slide bg={item.bgColor} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}></Image>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <Button>Shop Now</Button>
                    </InfoContainer>          
                </Slide>          
            ))}
           
            
        </Wrapper>
         <Arrow direction="right" onClick={()=>handleClick("right")}>
            {/* <ArrowForwardIosIcon></ArrowForwardIosIcon> */}
            <i class="fa fa-angle-right fa-lg" aria-hidden="true"></i>
        </Arrow>



        {/* <Arrowleft>
            <ArrowBackIosIcon></ArrowBackIosIcon>
        </Arrowleft>
         <Arrowright>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </Arrowright> */}
    </Container>
  )
}

export default Slider