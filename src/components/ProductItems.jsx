
import React from 'react'
import styled from 'styled-components'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Info=styled.div`
    opacity: 0;
    width: 100%;
    height:100%;
    position: absolute;

    top: 0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
`

const Container=styled.div`
    flex :1 ;
    margin: 5px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Info}{
        transition: all 0.5s ease;
        opacity: 1;
        background-color: beige transparent;
    }

`

const Circle=styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: whitesmoke;
    position: absolute;
`
const Image=styled.img`
    height: 75%;
    z-index: 2;
`

const Icon=styled.div`
    width: 40px;
    height:40px;
    border-radius: 50%;
    background-color: #bfb5b5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:10px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e4dada;
        transform: scale(1.1);
        color: #9a9393;
    }
`

const ProductItems = ({item}) => {
    
    const navigate=useNavigate();
    return (
    <Container>
        <Circle/>
        <Image src={item.image}/>
        <Info>
            <Icon>
                <ShoppingCartCheckoutOutlinedIcon/>    
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>
            <Icon>
                <SearchOutlinedIcon onClick={()=>navigate(`/product/${item.id}`)}/>
            </Icon>
        </Info>
    </Container>
  )
}

export default ProductItems