import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import MechAssoc from '../components/SVG/MechAssoc';

export default function Header() {
  return (
    <MainBox>
    <LeftBox>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner image">
    <div className="carousel-item active">
      <img src="https://i.postimg.cc/cHfwSz68/instnight.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item image">
      <img src="https://i.postimg.cc/qqLKtCsJ/mainbuilding-Copy.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item image">
      <img src="https://i.postimg.cc/CMHkr9W3/wholegroup.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    </LeftBox>
    <RightBox>
        <MechAssoc/>
    </RightBox>
    </MainBox>
  )
}

const MainBox = styled.div`
padding-top:80px;
display:flex;
align-items:center;
gap:60px;
.image{
    height:514px;
    width:740px;
    object-fit:cover;

}
`
const LeftBox = styled.div`
`
const RightBox = styled.div`
`