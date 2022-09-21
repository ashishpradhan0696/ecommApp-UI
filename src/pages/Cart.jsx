import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../responsiveDesign/responsive'


const Container=styled.div`
`
const Wrapper=styled.div`
padding: 20px;
`
const Title=styled.h1`
    text-align: center;
`
const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;

    //responsive
    ${mobile({justifyContent:"center"})}
`

const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==="filled" && "none"};
    background-color: ${props=>props.type==="filled" ? "black":"transparent" };
    color: ${props=>props.type==="filled" ? "white" : "black"};

     //responsive
    ${mobile({display:"none"})}
`

const TopTexts=styled.div`
    
    
`
const TopText=styled.span`
    text-decoration: underline;
    cursor:pointer;
    margin: 0 10px;
`

const Bottom=styled.div`
    display: flex;
    justify-content: space-between;

    //responsive
    ${mobile({flexDirection: "column"})}
`
const Info=styled.div`
    flex: 3;
`
const Product=styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail=styled.div`
    flex: 2;
    display: flex;
`
const Image=styled.img`
    width: 30%;
   
`
const Details=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName=styled.span`
    
`
const ProductID=styled.span`
    
`
const ProductColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize=styled.span`
    
`
const PriceDetail=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const ProductAmountContainer=styled.span`
   display: flex;
   align-items: center;
   margin-bottom: 10px;

`
const ProductAmount=styled.span`
    font-size: 25px;
    margin: 5px;
`

const ProductPrice=styled.div`
    font-size: 20px;
    font-weight: 600;
`
const Hr=styled.hr`
    background-color: #f0eeee;
    border: none;
    height: 1px;
`


const Summary=styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 10px;

`
const SummaryTitle=styled.h1`
font-weight: 200;
`
const SummaryItem=styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    font-size:${props=>props.type==="total" && "20px"} ;
    font-weight: ${props=>props.type==="total" && "800"};
`
const SummaryItemText=styled.span`
    
`
const SummaryItemPrice=styled.span`

`

const SummaryButton=styled.button`
    width: 100%;
    padding: 15px;
    cursor: pointer;
    border-radius: 2px;
    border: none;
    background-color: black;
    color:white;
    font-size: 20px;
    font-weight: 600;
    
    &:hover{
        color: white;
        background-color:#cccaca ;
        transition: all 0.3s ease;
    }
`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping bag(2)</TopText>
                    <TopText>Your wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>Checkout Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="data:image/jpeg;base64,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"/>
                            <Details>
                                <ProductName><b>Product:</b> Puma Shoes</ProductName>
                                <ProductID><b>ID:</b> 98927</ProductID>
                                <ProductColor color='black'></ProductColor>
                                <ProductSize><b>Size:</b>37</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <RemoveIcon/>
                                <ProductAmount>2</ProductAmount>        
                                <AddIcon/>                       
                            </ProductAmountContainer>  
                            <ProductPrice>Rs.1500</ProductPrice>  
                        </PriceDetail>
                    </Product>

                    <Hr/>

                    <Product>
                        <ProductDetail>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0ZWrEMxrboOSlD-tZmuU2P0_jAApEbEiFg&usqp=CAU"/>
                            <Details>
                                <ProductName><b>Product:</b> Decathlon Shoes</ProductName>
                                <ProductID><b>ID:</b> 23134</ProductID>
                                <ProductColor color='grey'></ProductColor>
                                <ProductSize><b>Size:</b> 24</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <RemoveIcon/>
                                <ProductAmount>1</ProductAmount>        
                                <AddIcon/>                       
                            </ProductAmountContainer>  
                            <ProductPrice>Rs.750</ProductPrice>  
                        </PriceDetail>
                    </Product>

                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc9%2F4f%2Fc94f88e5f430fd416b5ac53b51e826e7e19a8f3d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"/>
                            <Details>
                                <ProductName><b>Product:</b> H&M Denim Jacket</ProductName>
                                <ProductID><b>ID:</b> 21244</ProductID>
                                <ProductColor color='black'></ProductColor>
                                <ProductSize><b>Size:</b> 28</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <RemoveIcon/>
                                <ProductAmount>1</ProductAmount>        
                                <AddIcon/>                       
                            </ProductAmountContainer>  
                            <ProductPrice>Rs.750</ProductPrice>  
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>Rs.2250</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>Rs.80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>Rs.-30</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>Rs.3520</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>PLACE ORDER</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Cart