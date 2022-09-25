import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: smaller;
    font-weight: 400;
`


const Announcements = () => {
  return (
    <Container>
        Free shipping on over Rs.500 !! Grab the deals now ! 
    </Container>
  )
}

export default Announcements