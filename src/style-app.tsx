import styled from 'styled-components'

export const ContainerApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: flex-start;
  justify-content: top;
`

export const LineContainer = styled.div`
  display: flex;
  width: 100vw;
`

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between ;
  position: relative;

  @media screen and (max-width: 800px){
    flex-direction: column ;
  justify-content: center ;
  align-items: center ;
  display: flex;


  }
`

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`

export const HR = styled.hr`
  width: 100%;
  max-width: 100%;
  border: 7px solid darkgreen;
  margin: 0;
`
