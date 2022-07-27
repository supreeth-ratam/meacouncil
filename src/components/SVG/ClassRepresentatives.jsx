import React from 'react'
import styled from 'styled-components'
import Class from './Class'
import Reprenstatives from './Representatives'


export default function ClassRepresentatives() {
  return (
    <>
    <Container>
        <Class/>
        <RightBox>
        <CardContainer>
        
        </CardContainer>
        </RightBox>
    </Container>
    </>
  )
}

const Container = styled.div`
display:flex;
`
const RightBox = styled.div`
display:flex;
flex-wrap: wrap;
`

const CardContainer = styled.div`
display: flex;
gap: 40px;
flex-wrap:wrap;
margin-bottom:20px;
`