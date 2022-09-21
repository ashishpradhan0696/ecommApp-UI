import React from 'react'
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import styled from 'styled-components';
import { mobile } from '../responsiveDesign/responsive';

const Container=styled.div`
    height: 60vh;
    background-color:beige;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`
const Title=styled.h1`
    font-size: 70px;

    //responsive
    ${mobile({fontSize: "30px"})}
`
const Description=styled.div`
    font-size: 24px;  
    font-weight: 300px;

     //responsive
    ${mobile({textAlign: "center"})}
`
const InputContainer=styled.div`
    display: flex;
    margin: 20px;
    width: 50%;
    height: 70px;
    justify-content: space-between;
    background-color:white ;

    //responsive
    ${mobile({width: "75%",height:"50px"})}
    
`

const Input=styled.input`
     margin: 20px;
     border: none;
     flex: 8;
     color: black;
     font-size: medium;
     font-weight: 300;

     &:hover{
        box-shadow: 2px;
        
        background-color: #d5d5d5;
        transition: all 0.5s ease;
       
     }

      //responsive
    ${mobile({height:"15px",margin:"18px"})}
`
const Button=styled.button`
     flex:1;
     border:none;
     background-color: teal;
     color: black;
     cursor: pointer;
     &:hover{
        background-color: #cccaca;
     }
   
`

const NewsLetter = () => {
  return (
    <Container>
        <Title>
            Join our newsletter
        </Title>
        <Description>
            Weekly free resources straight to your inbox !
        </Description>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <ForwardToInboxOutlinedIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter