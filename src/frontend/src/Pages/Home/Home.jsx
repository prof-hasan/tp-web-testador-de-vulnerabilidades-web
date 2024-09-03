import React, { useState } from 'react';
import {DivBanner,VulnerabilitiesNavbar,StyledLogo,StyledLinks,StyledListItens,StyledDivMain
  ,StyledMainTittle,StyledMainP,ButtonContainer,StyledListContainer,AnimatedDivMain,LoginFormContainer 
} from './HomeStyle';

//colocar um gradiente linear
//backgroundimage: linear-gradient e url
//talvez ajustar a navbar

function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false); 
  const [showCreateUserForm, setCreateUserForm] = useState(false); 


  const handleLoginClick = () => {
    setCreateUserForm(false); 
    setShowLoginForm(!showLoginForm); 
  };

  const handleCreateUserClick = () => {
    setShowLoginForm(false); 
    setCreateUserForm(!showCreateUserForm); 
  };


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

        <AnimatedDivMain showLoginForm={showLoginForm||showCreateUserForm}>
          <StyledMainTittle>Titulo do site</StyledMainTittle>
          <StyledMainP>Paragrafo do site</StyledMainP>

          <ButtonContainer>
          <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]"   onClick={handleLoginClick}>
          <span class="relative z-10">Login</span>
        </button>

        <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
          <span class="relative z-10"  onClick={handleCreateUserClick}>Criar conta</span>
        </button>
        </ButtonContainer>

        </AnimatedDivMain>

        {showLoginForm && (
          <LoginFormContainer> 
            <h2>Login</h2>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Entrar</button>
            </form>
          </LoginFormContainer>
        )}

        {showCreateUserForm && (
          <LoginFormContainer> 
            <h2>Entrar</h2>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Criar Conta</button>
            </form>
          </LoginFormContainer>
        )}


      </DivBanner>
    </div>
  );
}
 
export default Home;