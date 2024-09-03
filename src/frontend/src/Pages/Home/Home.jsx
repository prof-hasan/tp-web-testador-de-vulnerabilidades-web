import React, { useState } from 'react';
import {
  DivBanner, VulnerabilitiesNavbar, StyledLogo, StyledLinks, StyledListItens, StyledDivMain
  , StyledMainTittle, StyledMainP, ButtonContainer, StyledListContainer, AnimatedDivMain, LoginFormContainer
} from './HomeStyle';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userValidationSchema } from './createUserFormValidation';
import { userLoginValidationSchema } from './userLoginValidations';
import { useAuth } from "../../Hooks/UseAuth";


//colocar um gradiente linear
//backgroundimage: linear-gradient e url
//talvez ajustar a navbar

function Home() {

  const { login } = useAuth();


  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showCreateUserForm, setCreateUserForm] = useState(false);

  //validador do formulario de criar usuario
  const [userCreated, setUserCreated] = useState(false);
  const [userCreatedError, setUserCreatedError] = useState(false);
  const { register: registerCreateUser, handleSubmit: handleSubmitCreateUser, formState: { errors: createUserErrors } } = useForm({
    resolver: yupResolver(userValidationSchema)
  });
  //validadores de login
  const [userLogin, setUserLogin] = useState(false);
  const [userLoginError, setUserLoginError] = useState(false);
  const [customError, setCustomError] = useState("");

  // validador formulário login
  const { register: registerLogin, handleSubmit: handleSubmitLogin, formState: { errors: loginErrors } } = useForm({
    resolver: yupResolver(userLoginValidationSchema)
  });


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

  const onSubmitLogin = (data) => {
    setUserLogin(false);
    const formData = {
      username: data.username,
      password: data.password,
    };
    
    axios.post('http://localhost:8080/user/auth', formData)
      .then(async res => {
        if (res.status === 200){  
          const accessToken = res.data.access_token;
          // Armazenar o token
          localStorage.setItem('accessToken', accessToken);
          setUserLogin(true);
          await login(res.data); // Função de login para manipulação adicional
        }
      })
      .catch(err => {
        if(err.response.status === 404){
          setCustomError("Usuário não encontrado.");
        }
        if(err.response.status === 401){
          setCustomError("Senha incorreta.");
        }
        setUserLoginError(true);
      });
  };
  

  //função para criar usuario
  const onSubmitCreateUser = (data) => {
    setUserCreated(false);
    const formData = {
      username: data.username,
      password: data.password,
      job: data.job,
      age: data.age,
      branchNumber: data.branchNumber,
      accountNumber: data.accountNumber,
      digit: data.digit,
      secret: data.secret,
      balance: data.balance,

      //outros valores

    };
    console.log(formData);

    axios.post(
      'http://localhost:8080/user/',
      formData)
      .then(res => {
        if (res.status === 201) {
          setUserCreated(true);
        }

      })
      .catch(err => {
        if (err.response.status === 409) {
          setCustomCreateUserError("O usuário já existe.")

        }

        console.log(err);
        setUserCreatedError(true);
      })
  }



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

        <AnimatedDivMain showLoginForm={showLoginForm || showCreateUserForm}>
          <StyledMainTittle>Web Vulnerability Tester</StyledMainTittle>
          <StyledMainP>Paragrafo bonitinho dando uma introdução ao sobre o que é o site</StyledMainP>

          <ButtonContainer>
            <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]" onClick={handleLoginClick}>
              <span class="relative z-10">Login</span>
            </button>

            <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
              <span class="relative z-10" onClick={handleCreateUserClick}>Criar conta</span>
            </button>
          </ButtonContainer>

        </AnimatedDivMain>

        {showCreateUserForm && (
          <LoginFormContainer>
            <form class="max-w-md  pl-14 pt-8" onSubmit={handleSubmitCreateUser(onSubmitCreateUser)}>
              <div class="relative z-0 w-full mb-5 group">
                <input type="string" name="username" id="username" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=""
                  onChange={handleCreateUserInputChange} {...registerCreateUser('username')} required />
                <label for="username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>

                <div>{createUserErrors.username?.message}</div>

              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input type="string" name="password" id="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" "
                  onChange={handleCreateUserInputChange} {...registerCreateUser('password')} />
                <label for="password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>

                <div>{createUserErrors.paswword?.message}</div>

              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input type="job" name="job" id="job" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" " required onChange={handleCreateUserInputChange} {...registerCreateUser('job')} />
                <label for="job" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job</label>

                <div>{createUserErrors.job?.message}</div>

              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input type="int" name="age" id="age" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" " required onChange={handleCreateUserInputChange} {...registerCreateUser('age')} />
                <label for="age" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Idade</label>

                <div>{createUserErrors.age?.message}</div>

              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input type="text" name="branchNumber" id="branchNumber" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder="Número da agência" required onChange={handleCreateUserInputChange} {...registerCreateUser('branchNumber')} />
                  <label for="branchNumber" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>

                  <div>{createUserErrors.branchNumber?.message}</div>

                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input type="text" name="accountNumber" id="accountNumber" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder="Número da conta" required
                    onChange={handleCreateUserInputChange} {...registerCreateUser('accountNumber')} />
                  <label for="accountNumber" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>

                  <div>{createUserErrors.accountNumber?.message}</div>

                </div>
              </div>


              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input type="string" name="digit" id="digit" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" digito" required onChange={handleCreateUserInputChange} {...registerCreateUser('digit')} />
                  <label for="digit" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>

                  <div>{createUserErrors.digit?.message}</div>

                </div>


                <div class="relative z-0 w-full mb-5 group">
                  <input type="text" name="secret" id="secret" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder="Segredo" required onChange={handleCreateUserInputChange} {...registerCreateUser('secret')} />
                  <label for="secret" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>

                  <div>{createUserErrors.secret?.message}</div>

                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input type="number" name="balance" id="balance" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" digito" required onChange={handleCreateUserInputChange} {...registerCreateUser('balance')} />
                  <label for="balance" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>

                  <div>{createUserErrors.balance?.message}</div>

                </div>
              </div>

              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Criar conta</button>
            </form>
          </LoginFormContainer>
        )}

        {showLoginForm && (
          <LoginFormContainer>
            <h1>login</h1>
            <form class="max-w-md  pl-14 pt-8" onSubmit={handleSubmitLogin(onSubmitLogin)}>
              <div class="relative z-0 w-full mb-5 group">
                <input type="string" name="usernam" id="username" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" " required   {...registerLogin('username')} />
                <label for="username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>

                <div>{loginErrors.balance?.message}</div>

              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input type="password" name="password" id="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer" placeholder=" " required
                  {...registerLogin('password')} />
                <label for="password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>

                <div>{loginErrors.password?.message}</div>


              </div>

              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 mt-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </form>
          </LoginFormContainer>
        )}


      </DivBanner>
    </div>
  );
}

export default Home;