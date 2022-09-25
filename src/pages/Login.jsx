import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsiveDesign/responsive'


const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background-image:linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://thumbs.dreamstime.com/b/african-lady-shopping-bags-pointing-finger-aside-yellow-background-winter-happy-american-shopper-blank-space-wearing-warm-198839982.jpg") ;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;

      //responsive
   ${mobile({backgroundImage:"none"})}
    
`
const Wrapper=styled.div`
    width: 25%;
    padding: 20px;
    background-color: whitesmoke ;
    opacity:0.8  ;
    border-radius: 10px;

   //responsive
   ${mobile({width:"80%"})}
`
const Title=styled.h1`
    margin: 20px;
    
    //responsive
   ${mobile({textAlign:"center"})}
`
const Form=styled.div`
    display: flex;
    margin: 20px;
    flex-direction: column;
`
const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 10px ;
    padding: 10px;
`

const Button=styled.button`
    width: 60px;
    margin:10px 10px ;
    border: none;
    padding: 10px;
    background-color: teal;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    color: black;
    border-radius: 4px;
    &:hover{
        color: white;
        background-color:#cccaca ;
        transition: all 0.3s ease;
    }

    //responsive
    ${mobile({width: "30%"})}
`
const Link=styled.a`
  margin: 5px 10px;
  font-size: 12px;
  font-weight:600 ;
  text-decoration: underline;
  cursor: pointer;
 color:black;
  //responsive
    ${mobile({fontSize: "10px"})}
`

const Login = () => {
  return (
    <Container>
       <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="username"></Input>
                <Input placeholder="Password"></Input>
                <Button>Login</Button>
                <Link>Forgot Password ?</Link>
                <Link>Create a new account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login