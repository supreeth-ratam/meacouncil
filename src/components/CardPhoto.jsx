import React from "react";
import styled from "styled-components";
export default function CardPhoto(props) {
  return (
    <Container>
      <Image src={props.item.imgUrl}/>
      <Details className="details">
        <div className="social-icons">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-solid fa-envelope"></i>
          <i class="fa-brands fa-linkedin-in"></i>
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


  &:hover{
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
  background:tomato;
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
  background: transparent;
  width:13%;
  flex-direction:column;
  font-size:22px;
  
}
& .social-icons i{
  display:block;
  background:tomato;
  color:white;
  padding:5px;  
  border-top:1px solid #3a413c;
  position:relative;
  left: -40px;
  transition: 500ms ease-in-out all;
}
& .role{
  background:#3a413c;
  font-family: 'Cormorant SC', serif;
  padding:0;
  margin:0;
  font-size:20px;
  text-align:center;
  color:white;
}


`;