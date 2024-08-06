import {React,useState} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import{Header} from "../../Components"
import{Sidenav} from "../../Components"
import { createUserValidation } from './CreateUserValidations';
import { DivForm,DivInput,StylizedInput,StylizedButton } from './CreateUserStyle';


function CreateUserForm() {
    

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(createUserValidation)
    }
    );
    
    return (

        <div className=" flex flex-col  h-screen">

        <Header/>
        <div className="flex flex-1">
        
        <Sidenav/>

        <div id="conteudo-principal" className="p-4 min-w-0 max-w-full  flex-wrap break-words flex flex-col   ">     
         <DivForm>
        <form >
        <DivInput >
            
                <StylizedInput type="text"  name="username" id="username" placeholder='Nome de usuário...'/>
                
        </DivInput>

        <DivInput >
            
                <StylizedInput type="string" name="password" id="password" placeholder='Senha...'/>  
                
        </DivInput>

        <DivInput >
            
                <StylizedInput type="string" name="ocupation" id="ocupation" placeholder='Profissão...' /> 
                
        </DivInput>

        <DivInput >
            
                <StylizedInput type="number.." name="age" id="age" placeholder='Idade'  />
                
        </DivInput>
       

         <StylizedButton type='submit'>Criar Usuário</StylizedButton>
         
         </form>
        </DivForm>
        </div>
        </div>
        </div>

    );
}
  
  export default CreateUserForm;