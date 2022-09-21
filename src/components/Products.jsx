import React from 'react'
import styled from 'styled-components'
import { productItems } from '../myData'
import ProductItems from './ProductItems'

const Container=styled.div`
    padding: 20px;
    display: flex;  
    flex-wrap: wrap; 
    justify-content: space-between;
`
const Products = () => {
  return (
    <Container>
        {productItems.map((item)=>(
            <ProductItems item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products