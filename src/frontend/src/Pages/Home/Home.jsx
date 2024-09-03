import React, { useState } from 'react';
import {DivBanner,VulnerabilitiesNavbar,StyledLogo,StyledLinks,StyledListItens,StyledDivMain
  ,StyledMainTittle,StyledMainP,ButtonContainer,StyledListContainer,AnimatedDivMain,LoginFormContainer 
} from './HomeStyle';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userValidationSchema } from './createUserFormValidation';

//colocar um gradiente linear
//backgroundimage: linear-gradient e url
//talvez ajustar a navbar

function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false); 
  const [showCreateUserForm, setCreateUserForm] = useState(false); 

  //validador do formulario de criar usuario
  const [userCreated, setUserCreated] = useState(false);
  const [userCreatedError, setUserCreatedError] = useState(false);
  const {CreateUserRegister, handleCreateUserSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(userValidationSchema)
}
);

//erros da requisição de criar usuário:
const [customCreateUserError, setCustomCreateUserError] = useState("");

//validador do formulario de login

  const handleLoginClick = () => {
    setCreateUserForm(false); 
    setShowLoginForm(!showLoginForm); 
  };

  const handleCreateUserClick = () => {
    setShowLoginForm(false); 
    setCreateUserForm(!showCreateUserForm); 
  };

  const handleCreateUserInputChange = () => {
    setUserCreated(false);
    setUserCreatedError(false);
    setCustomCreateUserError(""); 
};
  //função para criar usuario
  const onSubmit = (data) => {setUserCreated(false);
    const formData = {
        username: data.username,
        //outros valores

      };
      console.log(formData);
    
    axios.post(
        '',
        formData)
                        .then(res => {
                            if (res.status === 201){                       
                                setUserCreated(true);
                            }
                            
                        })
                        .catch(err => {
                            if(err.response.status === 409){
                              setCustomCreateUserError("O usuário já existe.")
                                
                            }

                            console.log(err);
                            setUserCreatedError(true);
                        })}

  return (
    <div>
      <DivBanner >
        <VulnerabilitiesNavbar>
          <StyledLogo>
          </StyledLogo>
          <StyledListContainer>
          <p className="mb-2 ml-6 text-yellow-50 font-medium">
            Vulnerabilidades disponíveis:
          </p>
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
          <StyledMainTittle>Web Vulnerability Tester</StyledMainTittle>
          <StyledMainP>Paragrafo bonitinho dando uma introdução ao sobre o que é o site</StyledMainP>

          <ButtonContainer>
          <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]"   onClick={handleLoginClick}>
          <span class="relative z-10">Login</span>
        </button>

        <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
          <span class="relative z-10"  onClick={handleCreateUserClick}>Criar conta</span>
        </button>
        </ButtonContainer>

        </AnimatedDivMain>

        {showCreateUserForm&& (
          <LoginFormContainer> 
            <form class="max-w-md  pl-14 pt-8">
            <div class="relative z-0 w-full mb-5 group">
                <input type="string" name="username" id="username" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" "  
                onChange={handleCreateUserInputChange} {...CreateUserRegister('username')}/>
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input type="string" name="password" id="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" "
              onChange={handleCreateUserInputChange} {...CreateUserRegister('password')}  />
              <label for="password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="job" name="job" id="job" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" " required onChange={handleCreateUserInputChange} {...CreateUserRegister('job')}/>
                <label for="job" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="int" name="age" id="age" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" " required onChange={handleCreateUserInputChange} {...CreateUserRegister('age')} />
                <label for="age" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Idade</label>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" " required />
                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" " required />
                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" " required />
                    <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" " required />
                    <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                </div>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Criar conta</button>
            </form>
          </LoginFormContainer>
        )}

        {showLoginForm && (
          <LoginFormContainer> 
          <h1>login</h1>
            <form class="max-w-md  pl-14 pt-8">
            <div class="relative z-0 w-full mb-5 group">
                <input type="string" name="usernam" id="username" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" " required />
                <label for="username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="password" name="password" id="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" " required />
                <label for="password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 mt-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Criar conta</button>
            </form>
          </LoginFormContainer>
        )}


      </DivBanner>
    </div>
  );
}
 
export default Home;