import React from 'react'
import styled from 'styled-components'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import payment_footer from '../../src/img/payment_footer.png';
import { mobile } from '../responsiveDesign/responsive';

const Container=styled.div`
    display: flex;
    
    //responsive
    ${mobile({flexDirection:"column"})}
`
const Left=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

//left side of footer
const Logo=styled.h1`
`
const Description=styled.p`
`
const SocialContainer=styled.div`
    display: flex;
   // flex-direction: column;
`
const SocialIcon=styled.div`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: ${props=>props.color};
    display :flex ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 5px;
`

//center  of footer
const Center=styled.div`
   flex:1;
   padding: 20px;

    //responsive
   ${mobile({display:"none"})}
   
`
const Title=styled.h3`
    margin-bottom: 30px;
`
const List=styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;


`
const ListItem=styled.li`
   margin-bottom: 10px;
   width: 50%;
`

//right side of footer
const Right=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;

    //responsive
   ${mobile({backgroundColor:"#eee"})}

`
const ContactItem=styled.div`
    display: flex; 
    margin-bottom  :10px ;
    align-items :center ;

   
    
`
const Payment=styled.img`
width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                ASHISH.
            </Logo>
            <Description>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident unde, quisquam eius aperiam dolorum repellendus. Unde, molestiae eligendi. Unde magni praesentium molestias sequi, ab cum possimus mollitia alias labore ipsam.
            </Description>
            <SocialContainer>
                <SocialIcon color='grey'>
                    {/* <GitHubIcon/>    */}
                    <i class="fa fa-github" aria-hidden="true"></i>
                </SocialIcon>
                <SocialIcon color=' #E1306C'>
                    {/* <InstagramIcon/> */}
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </SocialIcon>
                <SocialIcon color='#4267B2'>
                    {/* <FacebookIcon /> */}
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
                <Title>
                    Useful Links
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Sitemap</ListItem>
                    <ListItem>Copyright Information</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Support</ListItem>
                </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                {/* <LocationOnOutlinedIcon style={{marginRight:"5px"}}/>  */}
                <i class="fa fa-map-pin" aria-hidden="true" style={{marginRight:"5px"}}></i>
                Semiliguda, Gopabandhu Nagar
            </ContactItem>
            <ContactItem>
                {/* <ContactPhoneOutlinedIcon style={{marginRight:"5px"}} />  */}
                <i class="fa fa-phone" aria-hidden="true" style={{marginRight:"5px"}}></i>
                9999999999
            </ContactItem>
            <ContactItem>
                {/* <EmailOutlinedIcon style={{marginRight:"5px"}}/>  */}
                <i class="fa fa-envelope" aria-hidden="true" style={{marginRight:"5px"}}> </i>
                ashish.pradhan0696@gmail.com
            </ContactItem>
            <Payment src={payment_footer}/>
        </Right>
    </Container>
  )
}

export default Footer