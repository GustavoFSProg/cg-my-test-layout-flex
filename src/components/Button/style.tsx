import styled from 'styled-components'

export const ButtonContainer = styled.div`
 display:flex;
 align-items: center ;
 justify-content: center ;
 flex-direction: column ;
 width:100%;

`

export const Button = styled.button`
   width:  84%;
   max-width: 540px;
   height: 41px;
 margin-top: 5px;
 /* border-radius: 7px; */
 padding-left: 10px ;
 font-size:  15px;
 background: lightblue ;
 color: blue;
 cursor: pointer;
 transition: ease 0.7s ;

   :hover {
    background: blue ;
    color: white;
   }
          /* border: 2px solid red */


`