import React from 'react'
import TheCouncil from './SVG/TheCouncil'
import UgSec from './SVG/UgSec'
import PgSec from './SVG/PgSec'
import GenSec from './SVG/GenSec'
import styled from 'styled-components'
import CardPhoto from './CardPhoto'

const GsecList = [
  {
    name:"Parag Bajaj",
    post:'Department General secretry',
    imgUrl:"https://telegra.ph/file/7a9c4a5f8625950636507.png",
    instaId:"",
    email:"",
  },
  {
    name:"Ragasree R K",
    post:'General secretry',
    imgUrl:"https://telegra.ph/file/a8ea28fddb8140983662a.png",
    instaId:"",
    email:"",
  },
]
const UGsecList = [
  {
    name:"Tanya Seth",
    post:'MEME Chief Editor',
    imgUrl:"https://telegra.ph/file/f422bb1a76d4d4460a3b1.jpg",
    instaId:"",
    email:"",
  },
  {
    name:"Sakshi Nevage",
    post:'MEME Chief Editor',
    imgUrl:"https://telegra.ph/file/0b246210caca874f65a46.png",
    instaId:"",
    email:"",
  },
  {
    name:"Mukesh Raj S",
    post:'Academic Secretry',
    imgUrl:"https://telegra.ph/file/bbfc791c6ed48345550dc.png",
    instaId:"",
    email:"",
  },
  {
    name:"Tanisha Gupta",
    post:'Design Secretry',
    imgUrl:"https://telegra.ph/file/8c86d33fa1c074dd56881.png",
    instaId:"",
    email:"",
  },
  {
    name:"Aditya Agarwal",
    post:'Design Secretry',
    imgUrl:"https://telegra.ph/file/a66007641da98ac94e32e.jpg",
    instaId:"",
    email:"",
  },
  {
    name:"Supreeth Ratam",
    post:'Web Secretry',
    imgUrl:"https://telegra.ph/file/e3da4bf65b413099c65a6.jpg",
    instaId:"",
    email:"",
  },
  {
    name:"Arnav Patel",
    post:'Sports Secretry',
    imgUrl:"https://telegra.ph/file/82beedf190fa6dd61f355.png",
    instaId:"",
    email:"",
  },
  {
    name:"Anjali Prabhakar",
    post:'Sports Secretry',
    imgUrl:"https://telegra.ph/file/3680acbf69ef6e30a273d.jpg",
    instaId:"",
    email:"",
  },
  {
    name:"Harshini Sreeram",
    post:'Associate Secretry',
    imgUrl:"https://telegra.ph/file/60dfdf40c4cb255d07d0f.jpg",
    instaId:"",
    email:"",
  },
]
export default function MainCouncil() {
  return (
    <div>
        <Container>
        <LeftBox>
        <TheCouncil height = {600}/>
        </LeftBox>
        <RightBox>
        <GenSec width={400}/>
        <CardContainer>
        {GsecList.map((item) => <CardPhoto item={item}/>)}
        </CardContainer>
        <PgSec width = {400}/>
        <CardContainer>
          
        </CardContainer>
        <UgSec width={400}/>
        <CardContainer>
          {UGsecList.map((item) => <CardPhoto item={item}/>)}
        </CardContainer>
        </RightBox>
        </Container>
    </div>
  )
}
const Container = styled.div`
display: flex;
height:100%;
padding-top:60px;
margin-bottom:100px;
`
const RightBox = styled.div`
gap:30px;
flex-direction: column;
flex-wrap:wrap;
align-items:start;
height:100%;
padding-left:20px;
`

const CardContainer = styled.div`
display: flex;
gap: 40px;
flex-wrap:wrap;
margin-bottom:20px;
`
const LeftBox = styled.div`
position:sticky;
position: -webkit-sticky;
top:60px;
justify-self: flex-start;
align-self: flex-start;
overflow-y:hidden;
display:flex;
width:700px;
padding-top:0px;
`