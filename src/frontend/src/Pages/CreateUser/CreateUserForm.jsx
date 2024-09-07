import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Header } from "../../Components";
import { Sidenav } from "../../Components";
import { createUserValidation } from './CreateUserValidations';
import { DivForm, DivInput, StylizedInput, StylizedButton } from './CreateUserStyle';

function CreateUserForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(createUserValidation)
    });

    const onSubmit = async (data) => {
        try {
            // Enviar os dados para o backend
            const response = await axios.post('http://localhost:8080/user/create', data); // Ajuste a URL conforme necessário
            console.log('Usuário criado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidenav />

                <div id="conteudo-principal" className="p-4 min-w-0 max-w-full flex-wrap break-words flex flex-col">
                    <DivForm>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <DivInput>
                                <StylizedInput
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder='Nome de usuário...'
                                    {...register('username')} // Ligando o input ao react-hook-form
                                />
                                {errors.username && <p>{errors.username.message}</p>}
                            </DivInput>

                            <DivInput>
                                <StylizedInput
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder='Senha...'
                                    {...register('password')} // Ligando o input ao react-hook-form
                                />
                                {errors.password && <p>{errors.password.message}</p>}
                            </DivInput>

                            <DivInput>
                                <StylizedInput
                                    type="text"
                                    name="occupation"
                                    id="occupation"
                                    placeholder='Profissão...'
                                    {...register('occupation')} // Ligando o input ao react-hook-form
                                />
                                {errors.occupation && <p>{errors.occupation.message}</p>}
                            </DivInput>

                            <DivInput>
                                <StylizedInput
                                    type="number"
                                    name="age"
                                    id="age"
                                    placeholder='Idade'
                                    {...register('age')} // Ligando o input ao react-hook-form
                                />
                                {errors.age && <p>{errors.age.message}</p>}
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
