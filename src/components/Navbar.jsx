import React from 'react';
import styled from 'styled-components';
// import SearchIcon from '@mui/icons-material/Search';
// import { Badge } from '@mui/material';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsiveDesign/responsive';
import { useNavigate } from 'react-router-dom';

const Container=styled.div`
    height:80px;
    background-color: #f9f4f4;

    //responsive
    ${mobile({height:"50px",paddingRight:"5px",paddingBottom:"10px"})}    
`
const Wrapper=styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content :space-between; 
    align-items: center;

    //responsive
    ${mobile({padding:"10px 0px"})}    
`
const Left=styled.div`
    flex:1;
    display: flex;
    align-items: center;

`
const Language=styled.span`
    font-size: 14px;
    cursor: pointer;
     
    //responsive
     ${mobile({display:"none"})}    
`
const SearchContainer=styled.div`
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    background-color: white;

   
`

const Input=styled.input`
   border: none;
   
    //responsive
    ${mobile({width:"80px", height:"20px"})} 

    &:focus {
        outline: none;
    }
`
const Center=styled.div`
    flex:1;
    text-align: center;
    cursor:pointer;
`
const Logo=styled.h1`
    font-weight :500 ;

    //responsive
    ${mobile({fontSize:"18px"})} 
`

const Right=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    //responsive
    ${mobile({flex:"2",justifyContent: "center"})}
`
const MenuItem=styled.div`
   padding: 5px;
   margin-left: 25px;
   cursor: pointer;

    //responsive
    ${mobile({fontSize: "12px",marginLeft:"10px"})}
`




const Navbar = () => {
    const navigate=useNavigate();

  return (
    <Container>
     <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input placeholder='Search'/>
                {/* <SearchIcon style={{color:"grey", fontSize:"16px"}}/> */}
                <i class="fa fa-search" aria-hidden="true" style={{color:"grey", fontSize:"16px"}}></i>
               
            </SearchContainer>
            
        </Left>
        <Center onClick={()=>navigate("/")}>
            <Logo>
                Ashish.
            </Logo>
        </Center>
        <Right>
            <MenuItem onClick={()=>navigate("/register")}>Register</MenuItem>
            <MenuItem onClick={()=>navigate("/login")}>Sign In</MenuItem>
            <MenuItem>
                {/* <Badge badgeContent={4} color="secondary"> */}
                    {/* <ShoppingCartOutlinedIcon onClick={()=>navigate("/cart")}/> */}
                    <i class="fa fa-shopping-cart" aria-hidden="true" onClick={()=>navigate("/cart")} style={{fontSize:"20px"}} ></i>
                {/* </Badge> */}
            </MenuItem>
        </Right>
     </Wrapper>
    
    </Container>
  )
}

export default Navbar