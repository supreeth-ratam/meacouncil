import React from 'react'
import TheCouncil from './SVG/TheCouncil'
import UgSec from './SVG/UgSec'
import PgSec from './SVG/PgSec'
import GenSec from './SVG/GenSec'
import styled from 'styled-components'
import CardPhoto from './CardPhoto'
import ClassReps from './SVG/ClassReps'
import Icon from './SVG/DGsec'
import MeaGsec from './SVG/MEAGsec'
const GsecList = [
  {
    name:"Parag Bajaj",
    post:'Department General secretry',
    imgUrl:"https://i.postimg.cc/Hsyfmhnp/parag.png",
    instaId:"",
    email:"",
  },
 
]
const MEAGsecList = [
  {
    name:"Ragasree R K",
    post:'General secretry',
    imgUrl:"https://i.postimg.cc/PrS8t2RR/Ragasree.jpg",
    instaId:"",
    email:"",
  },
 
]
const UGsecList = [
  {
    name:"Tanya Seth",
    post:'MEME Chief Editor',
    imgUrl:"https://i.postimg.cc/brHVGKtb/Tanya-Seth.jpg",
    instaId:"",
    email:"",
  },
  {
    name:"Sakshi Nevage",
    post:'MEME Chief Editor',
    imgUrl:"https://i.postimg.cc/x8hG15sH/Sakshi.jpg",
    instaId:"",
    email:"",
  },
  {
    name:"Mukesh Raj S",
    post:'Academic Secretry',
    imgUrl:"https://i.postimg.cc/Prr182P1/Mukesh2.jpg",
    instaId:"",
    email:"",
  },
  {
    name:"Tanisha Gupta",
    post:'Design Secretry',
    imgUrl:"https://i.postimg.cc/Ss0G6kC5/Screenshot-30.png",
    instaId:"",
    email:"",
  },
  {
    name:"Aditya Agarwal",
    post:'Design Secretry',
    imgUrl:"https://i.postimg.cc/vHspQvVf/Aditya.jpg",
    instaId:"",
    email:"",
  },
  {
    name:"Supreeth Ratam",
    post:'Web Secretry',
    imgUrl:"https://i.postimg.cc/R0WtpyvB/sura.jpg",
    instaId:"",
    email:"",
  },
  {
    name:"Arnav Patel",
    post:'Sports Secretry',
    imgUrl:"https://i.postimg.cc/NGzkDGgM/Arnav.jpg",
    instaId:"",
    email:"",
  },
  {
    name:"Anjali Prabhakar",
    post:'Associate Secretry',
    imgUrl:"https://i.postimg.cc/WbwxtJGK/Anjali.jpg",
    instaId:"",
    email:"",
  },

  {
    name:"Harshini Sreeram",
    post:'Associate Secretry',
    imgUrl:"https://i.postimg.cc/mrtndXvf/Harshini.jpg",
    instaId:"",
    email:"",
  },
  {
    name:"Kriti A",
    post:'Alumini Secretry',
    imgUrl:"https://iili.io/4CCJHB.jpg",
    instaId:"kriti__talreja",
    email:"kritiatalreja16@gmail.com",
  },
]
const PGList = [
  {
    name:"Devang karuskar",
    post:'PG Cult',
    imgUrl:"https://i.postimg.cc/Y0Zfb7mT/Devang.png",
    instaId:"https://www.instagram.com/devang_karuskar/",
    email:"213100076@iitb.ac.in",
    phone:"919924660210"
  },
  {
    name:"Amber verma",
    post:'PG Nominee',
    imgUrl:"https://i.postimg.cc/J4QbdSBy/Screenshot-37.png",
    instaId:"https://www.instagram.com/devang_karuskar/",
    email:"ambery2j@iitb.ac.in",
    phone:"8586823408"
  },
  {
    name:"Bijay Kumar Shah",
    post:'PG Sports',
    imgUrl:"https://i.postimg.cc/K8k8gMFZ/Screenshot-35.png",
    instaId:"https://www.instagram.com/bijayshah726/",
    email:"213101002@iitb.ac.in",
    phone:"8295293289"
  },
]
const CRList = [

  {
    name:"Bhawna Mahur",
    post:'3rd year Mech CR',
    imgUrl:"https://i.postimg.cc/Gm34BNNC/BhawnaCR.jpg",
    instaId:"mahur_bhawna",
    email:"200100044@iitb.ac.in",
    phone:"7668501382"
  },
  {
    name:"Harshita Agarwal ",
    post:'3rd year Mech CR',
    imgUrl:"https://i.postimg.cc/C5bkHQb4/harshitha.jpg",
    instaId:"_.harshitaagarwal",
    email:"20d100010@iitb.ac.in",
    phone:"7620505323"
  },
  {
    name:"Kush Patil",
    post:'2nd year Mech CR',
    imgUrl:"https://i.postimg.cc/c4sjPM2H/kushCR.jpg",
    instaId:"_kushpatil",
    email:"",
    phone:"8779631566"
  },
  {
    name:"Ashita",
    post:'2nd year Mech CR',
    imgUrl:"https://i.postimg.cc/QCV7WzVC/ashitha-CR.jpg",
    instaId:"",
    email:"ashita11dutt@gmail.com",
    phone:"8880060000"
  },
  {
    name:"Kushal Agarwal",
    post:'2nd year Mech CR',
    imgUrl:"https://iili.io/4CC9SV.jpg",
    instaId:"kushal_agarwall",
    email:"210100087@iitb.ac.in",
    phone:"9030020210"
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

        <CardContainer>
        <div>
        {/* <h1>Department General Secretary</h1>
         */}
         <Icon/>
        {GsecList.map((item) => <CardPhoto item={item}/>)}
        </div>
        </CardContainer>
        <CardContainer>
        <div>
        {/* <h1>MEA General Secretary</h1> */}
        <div className="dgseclogo">

        <MeaGsec/>
        </div>
        {MEAGsecList.map((item) => <CardPhoto item={item}/>)}
        </div>
        </CardContainer>
        <PgSec width = {400}/>
        <CardContainer>
        {PGList.map((item) => <CardPhoto item={item}/>)}
        </CardContainer>
        <UgSec width={400}/>
        <CardContainer>
          {UGsecList.map((item) => <CardPhoto item={item}/>)}
        </CardContainer>
        <ClassReps />
        <CardContainer>
          {CRList.map((item) =>  <CardPhoto item={item}/>)}
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