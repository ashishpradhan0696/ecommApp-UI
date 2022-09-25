import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsiveDesign/responsive'



const Container=styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    display: flex;
    justify-content: center;
`
const Image=styled.img`
    width: 400px;
    height: 450px;
    opacity: 0.9;
    //responsive
    ${mobile({height:"35    vh"})}
`
const Info=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title=styled.h1`
   color : #ffffff;
   margin: 10px;
   font-weight: 900;
`

const Button=styled.button`
    border: none;
    padding: 10px;
    cursor: pointer;
    background-color:white;
    font-weight: 600;
    color:black;
    border-radius: 4px;

`



const CategoryItem = ({item}) => {

  return (
    <Container>
        <Image src={item.img}></Image>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem