import React, { useState, useEffect } from "react";
import { Sidenav } from "../../Components";
import { Header } from "../../Components";
import axios from "axios";

function ViewBankAccount() {
  // Estado para armazenar os dados da conta bancária
  const [bankData, setBankData] = useState({
    username: "",
    branchNumber: "",
    accountNumber: "",
    digit: "",
    balance: "",
  });

  // Função para buscar os dados da conta bancária
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    document.title = "Dados Bancários"
    if (!token) {
      console.error("Token de autenticação não encontrado. Redirecionando para login.");
      // Redirecionar para página de login ou mostrar uma mensagem apropriada
      return;
    }
  
    axios.get('http://localhost:8080/user/bank/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setBankData(response.data);
    })
    .catch(error => {
      console.error("Houve um erro ao buscar os dados bancários:", error);
    });
  }, []);
  

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidenav />
        <div
          id="conteudo-principal"
          className="p-4 min-w-0 max-w-full flex-wrap break-words flex flex-col"
        >
          <div className="w-full max-w-sm ml-4 mt-8">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <div
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Username
                </div>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                  id="inline-full-name"
                  type="text"
                  value={bankData.username}
                  disabled
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <div
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-password"
                >
                  Agencia
                </div>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                  id="inline-password"
                  type="text"
                  value={bankData.branchNumber}
                  disabled
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <div
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-password"
                >
                  Número da conta
                </div>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                  id="inline-password"
                  type="text"
                  value={bankData.accountNumber}
                  disabled
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <div
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-password"
                >
                  Digito
                </div>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                  id="inline-password"
                  type="text"
                  value={bankData.digit}
                  disabled
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <div
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-password"
                >
                  Saldo
                </div>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                  id="inline-password"
                  type="text"
                  value={bankData.balance}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBankAccount;
