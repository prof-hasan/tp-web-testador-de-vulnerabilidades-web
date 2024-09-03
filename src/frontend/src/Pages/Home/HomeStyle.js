import styled,  { keyframes, css  } from 'styled-components'
import {Link} from 'react-router-dom';
import img from './img.png'


export const DivBanner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${img});
  background-size: cover;
  background-position: center;
`;


export const VulnerabilitiesNavbar = styled.div`
margin: auto;
width: 85%;
padding: 35px 0;
display: flex;
justify-content: space-between;
align-items: center;
`
export const StyledLogo = styled.img`
width: 120px;
cursor: pointer;
`
export const StyledLinks = styled(Link)`
text-decoration: none;
color: wheat;
text-transform: uppercase;
`

export const StyledListItens = styled.li`
list-style: none;
display: inline-block;
margin: 0 20px;
position: relative;
`
const marquee = keyframes`
  0% {
    transform: translateX(100%); 
  }
  100% {
    transform: translateX(-100%); 
  }
`;

export const StyledListContainer = styled.div`
  width: 240px;
  overflow: hidden; 
  white-space: nowrap; 
  ul {
    display: inline-block;
    padding: 0;
    margin: 0;
    list-style: none;
    animation: ${marquee} 10s linear infinite; 
  }
`;
//ajustar o efeito torto de hover

const slideLeft = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%); 
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%); 
  }
  to {
    opacity: 1;
    transform: translateX(0); 
  }
`;

export const StyledDivMain = styled.div`
width: 100%;
position: absolute;
top: 50%;
transform: translateY(-50%);
text-align: center;
color: white;
justify-content: center;
`
export const StyledMainTittle = styled.h1`
font-size: 70px;
margin-top: 80px;
`

export const AnimatedDivMain = styled(StyledDivMain)`
  transition: transform 0.5s ease-in-out; /* Transição suave */
  
  
  ${({ showLoginForm }) =>
    showLoginForm &&
    css`
      animation: ${slideLeft} 0.5s forwards; /* Aplica a animação de deslizar */
      width: 50%; /* Reduz para metade da tela */
    `}
`;

const zoomIn = keyframes`
  from {
    transform: scale(0); /* Começa pequeno */
    opacity: 0; /* Transparente */
  }
  to {
    transform: scale(1); /* Cresce até o tamanho normal */
    opacity: 1; /* Fica opaco */
  }
`;

export const LoginFormContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #fff;
  color: #333;
  padding: 20px;
  position: absolute;
  right: 0; 
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${zoomIn} 0.5s forwards; 

  h2 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  input {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
  }

  button {
    padding: 10px;
    background-color: #333;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const StyledMainP = styled.p`
margin: 20px auto;
font-weight: 100;
line-height: 25px;
`

export const ButtonContainer = styled.div`
  display: flex; 
  justify-content: center; 
  gap: 20px; 
  margin-top: 20px; 
`;
//criar um estilo para o logo e para os links das vulnerabilidades
//adicionar mais um link indicando as vulnerabilidades

