import React from 'react'
import styled from 'styled-components'
// import Navbar from '../components/Navbar'
import { mobile } from '../responsiveDesign/responsive'

const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background-image:linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://img.freepik.com/free-photo/laughing-pretty-young-woman-jumping-holding-shopping-bags_171337-11429.jpg?w=2000") ;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper=styled.div`
    width: 40%;
    padding: 20px;
    background-color: whitesmoke ;
    opacity:0.8  ;
    border-radius: 10px;

    //responsive
   ${mobile({width:"70%"})}
`
const Title=styled.h1`
    margin: 20px;

    //responsive
   ${mobile({fontSize:"20px",textAlign:"center"})}
`
const Form=styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
`
const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin:20px 10px 0 0 ;
    padding: 10px;
`

const Agreement=styled.span`
    margin:20px 0;

    //responsive
   ${mobile({fontSize:"15px"})}
   
`

const Button=styled.button`
    width: 40%;
    border: none;
    padding: 10px;
    background-color: teal;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    color: black;
   
    &:hover{
        color: white;
        background-color:#cccaca ;
        transition: all 0.3s ease;
    }

    //responsive
    ${mobile({width: "30%",height:"30px",padding:"0px"})}
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="First Name"></Input>
                <Input placeholder="Last Name"></Input>
                <Input placeholder="Username"></Input>
                <Input placeholder="Email"></Input>
                <Input type="password" placeholder="Password"></Input>
                <Input placeholder="Confirm Password "></Input>
                <Agreement>
                    By creating an account , I consent to provide my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register