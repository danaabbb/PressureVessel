import styled from 'styled-components'

export const InfoContainer = styled.div`
color: #fff;
background : ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')}; 
@media screen and (max-width: 768px) {
    padding:100px 0;
}`

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%
max-width: 1100px;
margin-right: auto;
margin-left: auto; /* Add 'auto' here */
padding: 0 80px; /* Remove space before 'px' */
justify-content: center;


`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  }
`

export const Column1= styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
 
  grid-auto-columns: 1fr;
`
export const TextWrapper = styled.div `
max-width: 540px;
padding-top: 0;
padding-bottom:60px;
margin-left:0; 
  }
`
export const TopLine= styled.p`
color: orange;
font-size: 15px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;

`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 55px;
line-height: 1.1;
font-weight: 600;
text-align: left;
color : ${({ lightText}) => (lightText ? '#f7f8fa' : 'white' )};

@media screen and (max-width: 480px) {
    font-size: 12px;}
   `
    

export const Subtitle=styled.p`
max-width: 440px;
margin-bottom: 50px;
margin-left: 100px;
font-size: 18px;
line-height: 24px;
text-align: right ;
margin-top: 50px;
color: ${({ darkText}) => (darkText ? '#010606' : '#fff')};

`

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
margin-top: 100px;
`
export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: auto;
`

export const Img = styled.img`
  width: 100%;
  margin: 0;
  padding-right: 0;
  max-width: 555px; /* Set a maximum width for larger screens */
  height: auto; /* Maintain aspect ratio */

  @media screen and (max-width: 768px) {
    display: none; /* Increase the width of the image on smaller screens */
  }

`


