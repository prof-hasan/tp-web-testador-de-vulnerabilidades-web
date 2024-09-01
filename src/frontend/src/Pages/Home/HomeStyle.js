import styled,  { keyframes } from 'styled-components'
import {Link} from 'react-router-dom';


export const DivBanner = styled.div`
width: 100%;
height: 100vh;
background-image: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('');
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
&:after{
  content: '';
  height: 3px;
  width: 0;
  background:red;
  position: absolute;
  left: 0;
  bottom: -10px;
  transition: 0ms.5s;
};
&:hover:after{
  width: 100%;
  transition: 0ms.5s;
}
`
const marquee = keyframes`
  0% {
    transform: translateX(100%); /* Inicia fora da tela à direita */
  }
  100% {
    transform: translateX(-100%); /* Termina fora da tela à esquerda */
  }
`;

export const StyledListContainer = styled.div`
  width: 240px;
  overflow: hidden; /* Oculta os elementos fora do contêiner */
  white-space: nowrap; /* Garante que os itens da lista fiquem em linha */
  ul {
    display: inline-block;
    padding: 0;
    margin: 0;
    list-style: none;
    animation: ${marquee} 10s linear infinite; /* Aplica a animação */
  }
`;
//ajustar o efeito torto de hover

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

export const StyledMainP = styled.p`
margin: 20px auto;
font-weight: 100;
line-height: 25px;
`

export const ButtonContainer = styled.div`
  display: flex; /* Utiliza flexbox para alinhar os botões horizontalmente */
  justify-content: center; /* Centraliza os botões horizontalmente */
  gap: 20px; /* Define a distância entre os botões */
  margin-top: 20px; /* Adiciona espaço acima do contêiner de botões */
`;
//criar um estilo para o logo e para os links das vulnerabilidades
//adicionar mais um link indicando as vulnerabilidades

