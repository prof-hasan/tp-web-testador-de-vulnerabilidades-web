import React from 'react';
import {DivBanner,VulnerabilitiesNavbar,StyledLogo,StyledLinks,StyledListItens,StyledDivMain
  ,StyledMainTittle,StyledMainP,ButtonContainer,StyledListContainer
} from './HomeStyle';

//colocar um gradiente linear
//backgroundimage: linear-gradient e url


function Home() {

  return (
    <div>
      <DivBanner >
        <VulnerabilitiesNavbar>
          <StyledLogo>
          </StyledLogo>
          <StyledListContainer>
          <ul>
            <StyledListItens>
              <StyledLinks to="/">Sql Injection</StyledLinks>
            </StyledListItens>
            <StyledListItens>
              <StyledLinks to="/">Cross Site scripting</StyledLinks>
            </StyledListItens>
            <StyledListItens>
              <StyledLinks to="/">Broken Access Control</StyledLinks>
            </StyledListItens>
          </ul>
          </StyledListContainer>
        </VulnerabilitiesNavbar>

        <StyledDivMain>
          <StyledMainTittle>Titulo do site</StyledMainTittle>
          <StyledMainP>Paragrafo do site</StyledMainP>

          <ButtonContainer>
          <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
          <span class="relative z-10">Login</span>
        </button>

        <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
          <span class="relative z-10">Criar conta</span>
        </button>
        </ButtonContainer>

        </StyledDivMain>
      </DivBanner>
    </div>
  );
}
 
export default Home;