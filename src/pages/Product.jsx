import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { mobile } from '../responsiveDesign/responsive'
import { useLocation } from 'react-router-dom'
import { productItems } from '../myData';


const Container=styled.div`
    
`
const Wrapper=styled.div`
    padding: 50px;
    display: flex;


    //responsive
    ${mobile({flexDirection:"column",padding:"20px"})}
    
`
const ImgContainer=styled.div`
    flex: 1;

    

`
const Image=styled.img`
    width: 60%;
    height: 60vh;
    /* object-fit:cover; */

   //responsive
    ${mobile({height:"50vh"})}

    
`

const InfoContainer=styled.div`
    flex: 1;
    padding: 0 50px;

   
`
const Title=styled.h2`
    
`
const Description=styled.p`
    margin: 20px 0;
`

const Price=styled.div`
    font-size:25px ;
`

//Filter container 
const FilterContainer=styled.div`
    width: 50%;
    margin:30px 0 ;
    display: flex;
    justify-content: space-between;


`
const Filter=styled.div`
    display: flex;
    align-items: center;

    ${mobile({paddingRight:"10px"})}
`
const FilterTitle=styled.span`
     margin-right: 10px;
`

const FilterColor=styled.div`
    height: 20px;
    width: 20px;
    border: 1px solid black;
    background-color: ${props=>props.color};
   
 
`
const FilterSize=styled.select`
    padding: 5px ;
`
const FilterSizeOption=styled.option`
    
`

// const FilterContainer=styled.div`
//     display: flex;
//     flex-direction: column;
//     margin:10px 0;

// `
// const Filter=styled.div`
//     display: flex;
// `
// const FilterTitle=styled.div`
//     margin-right:10px;
// `

// const FilterColor=styled.div`
//     border: 2px solid grey;
//     box-shadow: 23px;
//     background-color: ${props=>props.color};
//     padding: 1px;
//     margin: 2px;
// `
// const FilterSize=styled.select`
    
// `
// const FilterSizeOption=styled.option`
    
// `

const AddContainer=styled.div`
    display: flex;
    flex-direction: column;
`
const AmountContainer=styled.div`
    display: flex;
  

`
const Amount=styled.div`
    margin-left: 5px;
    margin-right: 5px;
    width: 40px;
    display:flex;
    border:1px solid teal;
    border-radius: 25%;
    align-items: center;
    justify-content: center;
`
const Button=styled.button`
    display: flex;
    width: 100px;
    height: 50px;
    margin-top: 20px;
    cursor: pointer;
     align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 300;
    background-color: teal;
    border-radius: 2px;
    color: black;

    &:hover{
        color: white;
        background-color:#cccaca ;
        transition: all 0.3s ease;
        transform: scale(1.1);
    }

    //responsive
    ${mobile({padding:"0px",width:"80px"})}

`
const Product = () => {

    const location=useLocation();
    const currentId=location.pathname.split("/")[2];
    console.log(currentId);
    
    const index=productItems.filter((ele,index)=>
        ele.id.toString()===currentId    
    )
    console.log(index)
       console.log(index[0].image);

  const [amount, setamount] = useState(0);
  const handleAmount=(num)=>{
    if(amount==0 && num==-1){
     
    }
    else{
        setamount(amount+num);
    }
  }
    return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src={index[0].image}/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim jacket</Title>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum atque, odit, vero voluptate deleniti repellat odio quidem iusto aliquid ullam dolorem sed expedita? Maiores quidem nihil tempore adipisci. Asperiores, deserunt.</Description>
                <Price>Rs.500</Price>
            
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='#6492c1'></FilterColor>
                        <FilterColor color='black'></FilterColor>
                        <FilterColor color='red'></FilterColor>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                        </FilterSize>
                    </Filter>                
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        {/* <RemoveIcon onClick={()=>handleAmount(-1)} style={{border:"3px solid teal", cursor:"pointer"}}/> */}
                        <i class="fa fa-minus" aria-hidden="true" onClick={()=>handleAmount(-1)} style={{border:"1px solid teal", padding:"5px",cursor:"pointer"}}></i>
                            <Amount>{amount}</Amount>
                        {/* <AddIcon onClick={()=>handleAmount(1)} style={{border:"3px solid teal", cursor:"pointer"}}/> */}
                        <i class="fa fa-plus" aria-hidden="true" onClick={()=>handleAmount(1)} style={{border:"1px solid teal",padding:"5px", cursor:"pointer"}}></i>
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
                
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
        
    </Container>
  )
}

export default Product