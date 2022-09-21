import React from 'react'
import styled from 'styled-components'
import { categoryList } from '../myData'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsiveDesign/responsive'

const Container=styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-between;

    //responsive
    ${mobile({flexDirection:"column"})}
`

const Categories = () => {
  return (
    <Container>
        {categoryList.map((item)=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories