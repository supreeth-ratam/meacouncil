import React from "react";
import styled from "styled-components";
export default function CardPhoto(props) {
  return (
    <Container>
      <Image src={props.item.imgUrl}/>
      <Details className="details">
        <div className="social-icons">
          
         <a href={`https://www.instagram.com/${props.item.instaId}`} className="links"> <i class="fa-brands fa-instagram"></i></a>
          
          <div className="mail">

          <i class="fa-solid fa-envelope"></i>
          <p>{props.item.email}</p>
          </div>
          <a href={ props.item.linkedIn} className="links">

          <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <div className="text-align-center bottom">
          <p className="role">{props.item.name}</p>
          <p className="heading">{props.item.post}</p>
          
        </div>
  
      </Details>

    </Container>
  );
}

const Container = styled.div`
  height: 250px;
  width: 250px;
  margin-top: 20px;
  overflow: hidden;
  position:relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  transition: all 0.6s ease;
  z-index:0;


  &:hover{

    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
  &:hover .social-icons i{
    left:0;
  }
  &:hover .details{
    display:flex;
    opacity:1;
  }
  &:hover .bottom{
    bottom:0px;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit:cover;
`;

const Details = styled.div`
display:none;
flex-direction:column;
justify-content:space-between;
position:absolute;
opacity:0;
top:0;
left:0;
background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5889706224286589) 48%, rgba(0,0,0,1) 100%);

height:100%;
width:100%;
transition: 1000ms ease-in-out opacity;
& .heading{
  background:#272727;
  color:white;
  text-align:center;
  text-transform: uppercase;
  font-size:16px;
  font-weight:600;
  font-family: 'Roboto Condensed', sans-serif;
  margin:0;
}
& .bottom{
  position:relative;
  bottom:-50px;
  transition: 100ms ease-in all;
}
& .social-icons{
  display:flex;
  width:13%;
  flex-direction:column;
  font-size:22px;
  background: #272727;
 
}
& .social-icons i{
  display:block;
  color:#fff;
  padding:5px;  
  background: #272727;
  z-index:10;
  border-top:1px solid #3a413c;
  position:relative;
  left: -40px;
  transition: 500ms ease-in-out all;
}
& .role{
  background:#000;
  font-family: 'Cormorant SC', serif;
  padding:0;
  margin:0;
  font-size:20px;
  text-align:center;
  color:white;
}
.links{
  text-decoration:none;
}
.mail{
  display:flex;
  position:relative;
  align-items:center;
  flex-direction:row;

  gap:0px;
  background:#272727;
  margin:0;
}
.mail p{
  color:white;
  font-size:14px;
  background:transparent;
  margin:0;
  display:none;
}
.mail:hover > p{
  display:block;
}

.fa-envelope{
  cursor:pointer;
}
.mail:hover .mail::after{
  display:flex;
}

`;