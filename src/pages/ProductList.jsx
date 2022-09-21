import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import { mobile } from '../responsiveDesign/responsive'


const Container=styled.div`
    
`
const Title=styled.h1`
    margin: 20px;
`
const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter=styled.div`
    margin: 20px;

    //responsive
    ${mobile({display:"flex",flexDirection:"column"})}
`
const FilterText=styled.span`
    font-size: 20px;
    font-weight: 600;

    //responsive
    ${mobile({fontSize:"15px",textAlign:"center"})}
`
const Select=styled.select`
    color: black;
  padding :5px ;
  margin-right: 5px;
  margin-left: 5px;
  cursor: pointer;
`
const Option=styled.option`
    
`


const ProductList = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter products</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>Red</Option>
                    <Option>Black</Option>
                    <Option>Pink</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XL</Option>
                    <Option>L</Option>
                    <Option>M</Option>
                    <Option>S</Option>
                </Select>
            </Filter>
            
            <Filter>
                <FilterText>Sort</FilterText>
                <Select>
                    <Option>Newest</Option>
                    <Option>Price(lowest to highest)</Option>
                    <Option>Price(highest to lowest) </Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default ProductList