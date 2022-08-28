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
    instaId:"parag_bajaj_18",
    email:"gsec@me.iitb.ac.in",
    linkedIn:"https://www.linkedin.com/in/parag-bajaj-43929a1a9/",
  },
 
]
const MEAGsecList = [
  {
    name:"Ragasree R K",
    post:'General secretry',
    imgUrl:"https://i.postimg.cc/PrS8t2RR/Ragasree.jpg",
    instaId:"ragasree.r.k",
    email:"",
    linkedIn:"https://www.linkedin.com/in/ragasree-r-k-45a9531b9/",
  },
 
]
const UGsecList = [
  {
    name:"Tanya Seth",
    post:'MEME Chief Editor',
    imgUrl:"https://i.postimg.cc/brHVGKtb/Tanya-Seth.jpg",
    instaId:"txnyaseth",
    email:"",
    linkedIn:"https://www.linkedin.com/in/tanya-seth-94124b106/",
  },
  {
    name:"Sakshi Nevage",
    post:'MEME Chief Editor',
    imgUrl:"https://i.postimg.cc/x8hG15sH/Sakshi.jpg",
    instaId:"sakshiin.18",
    email:"",
    linkedIn:"https://www.linkedin.com/in/sakshinevage/",
  },
  {
    name:"Mukesh Raj S",
    post:'Academic Secretry',
    imgUrl:"https://i.postimg.cc/Prr182P1/Mukesh2.jpg",
    instaId:"mukeshrajs2711",
    email:"",
    linkedIn:"https://www.linkedin.com/in/mukesh-raj-s-658117221/",
  },
  {
    name:"Tanisha Gupta",
    post:'Design Secretry',
    imgUrl:"https://i.postimg.cc/Ss0G6kC5/Screenshot-30.png",
    instaId:"tanisha__07",
    email:"",
    linkedIn:"https://www.linkedin.com/in/tanisha-gupta-2a1934221/",
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
    instaId:"supreeth_ratam",
    email:"",
    linkedIn:"https://www.linkedin.com/in/supreeth-ratam-127117221/",
  },
  {
    name:"Arnav Patel",
    post:'Sports Secretry',
    imgUrl:"https://i.postimg.cc/NGzkDGgM/Arnav.jpg",
    instaId:"arnav_patel05",
    email:"",
    linkedIn:"https://www.linkedin.com/in/arnav-patel-147223183/",
  },
  {
    name:"Anjali Prabhakar",
    post:'Associate Secretry',
    imgUrl:"https://i.postimg.cc/WbwxtJGK/Anjali.jpg",
    instaId:"anjali_prabhakar7",
    email:"",
    linkedIn:"https://www.linkedin.com/in/anjali-prabhakar/"
  },

  {
    name:"Harshini Sreeram",
    post:'Associate Secretry',
    imgUrl:"https://i.postimg.cc/mrtndXvf/Harshini.jpg",
    instaId:"harshiniiisreeram",
    email:"",
    linkedIn:"https://www.linkedin.com/in/harshinisreeram/"
  },
  {
    name:"Kriti A",
    post:'Alumini Secretry',
    imgUrl:"https://iili.io/4CCJHB.jpg",
    instaId:"kriti__talreja",
    email:"kritiatalreja16@gmail.com",
    linkedIn:"https://www.linkedin.com/in/kriti-a-279541234/",
  },
]
const PGList = [
  {
    name:"Devang karuskar",
    post:'PG Cult',
    imgUrl:"https://i.postimg.cc/Y0Zfb7mT/Devang.png",
    instaId:"devang_karuskar/",
    email:"213100076@iitb.ac.in",
    phone:"919924660210",
    linkedIn:""
  },
  {
    name:"Amber verma",
    post:'PG Nominee',
    imgUrl:"https://i.postimg.cc/J4QbdSBy/Screenshot-37.png",
    instaId:"ambery2j/",
    email:"ambery2j@iitb.ac.in",
    phone:"8586823408",
    linkedIn:"https://www.linkedin.com/in/amber-verma-iitb/",
  },
  {
    name:"Bijay Kumar Shah",
    post:'PG Sports',
    imgUrl:"https://i.postimg.cc/K8k8gMFZ/Screenshot-35.png",
    instaId:"bijayshah726/",
    email:"213101002@iitb.ac.in",
    phone:"8295293289",
    linkedIn:"https://www.linkedin.com/in/bijayshah726/",
  },
]
const CRList = [

  {
    name:"Bhawna Mahur",
    post:'3rd year Mech CR',
    imgUrl:"https://i.postimg.cc/Gm34BNNC/BhawnaCR.jpg",
    instaId:"mahur_bhawna",
    email:"200100044@iitb.ac.in",
    phone:"7668501382",
    linkedIn:"https://www.linkedin.com/in/bhawna-mahur-6a816a218/",
  },
  {
    name:"Harshita Agarwal ",
    post:'3rd year Mech CR',
    imgUrl:"https://i.postimg.cc/C5bkHQb4/harshitha.jpg",
    instaId:"_.harshitaagarwal",
    email:"20d100010@iitb.ac.in",
    phone:"7620505323",
    linkedIn:""
  },
  {
    name:"Kush Patil",
    post:'2nd year Mech CR',
    imgUrl:"https://i.postimg.cc/c4sjPM2H/kushCR.jpg",
    instaId:"_kushpatil",
    email:"",
    phone:"8779631566",
    linkedIn:"https://www.linkedin.com/in/kush-patil-3341ab22a/",
  },
  {
    name:"Ashita",
    post:'2nd year Mech CR',
    imgUrl:"https://i.postimg.cc/QCV7WzVC/ashitha-CR.jpg",
    instaId:"",
    email:"ashita11dutt@gmail.com",
    phone:"8880060000",
    linkedIn:""
  },
  {
    name:"Kushal Agarwal",
    post:'2nd year Mech CR',
    imgUrl:"https://iili.io/4CC9SV.jpg",
    instaId:"kushal_agarwall",
    email:"210100087@iitb.ac.in",
    phone:"9030020210",
    linkedIn:"https://www.linkedin.com/in/kushal-agarwal-763814163/",
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