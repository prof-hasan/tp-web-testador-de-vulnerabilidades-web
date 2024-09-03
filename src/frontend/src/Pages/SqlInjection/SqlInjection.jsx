import { Sidenav, Header, CodeBlock } from "../../Components";
import React, { useState } from "react";
import axios from 'axios';
import Draggable from "react-draggable";

function SqlInjection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState({ branchNumber: '', accountNumber: '' });

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSearch = () => {
    axios.post('http://localhost:8080/user/bank/vulnerable', searchQuery)
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        setResults([]);
        console.error("There was an error!", error);
      });
  };

  const vulnerableCodeExample = `
function greet(name) {
    // Comentário teste
    const message = \`Hello, \${name}!\`;
    console.log(message);
    return message;
}

const result = greet("World");
console.log(result);
`;

  return (
    <div className="flex flex-col h-screen">
      <Header />
      
      <div className="flex flex-1">
        <Sidenav />
        <div id="conteudo-principal" className="p-4 min-w-0 max-w-full flex-wrap break-words flex flex-col">

          <h1 className="font-bold text-[20px] text-center">Vulnerabilidade: SQL Injection</h1>

          <div className="mx-auto pt-2">
            <label htmlFor="branch" className="text-bas mr-2 mb-2 pt-2">Número da Agência:</label>
            <input 
              type="text" 
              id="branch" 
              className="border-2 border-gray-400 w-48 text-base focus:outline-none mr-2" 
              placeholder="Agência..." 
              value={searchQuery.branchNumber}
              onChange={e => setSearchQuery({ ...searchQuery, branchNumber: e.target.value })}
            />

            <label htmlFor="account" className="text-bas mr-2 mb-2 pt-2">Número da Conta:</label>
            <input 
              type="text" 
              id="account" 
              className="border-2 border-gray-400 w-48 text-base focus:outline-none mr-2" 
              placeholder="Conta..." 
              value={searchQuery.accountNumber}
              onChange={e => setSearchQuery({ ...searchQuery, accountNumber: e.target.value })}
            />

            <button
              className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle text-sm m-2 text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>

            <button
              className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle text-sm m-2 text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button" 
              onClick={handleOpenPopup}
            >
              Example
            </button>

            <button
              className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle text-sm m-2 text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button" 
              onClick={handleOpenPopup}
            >
              Source Code
            </button>

          </div>

          {results.length > 0 && (
            <div className="mx-auto overflow-auto rounded-lg shadow m-10">
              <table className="w-3/4">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Número da Agência</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Número da Conta</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Saldo</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Segredo</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Dígito</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {results.map((result, index) => (
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} key={index}>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{result.branchNumber}</td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{result.accountNumber}</td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{result.balance}</td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{result.secret}</td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{result.digit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {isPopupOpen && (
            <Draggable>
              <div className="fixed top-20 left-20 z-50 w-[400px] h-[300px] bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex justify-between items-center bg-gray-800 text-white p-2 cursor-move">
                  <span>Exemplo de Código</span>
                  <button onClick={handleClosePopup} className="text-red-500">X</button>
                </div>
                <div className="overflow-auto h-full p-4 bg-gray-900 select-text">
                  <CodeBlock language="javascript" code={vulnerableCodeExample} />
                </div>
              </div>
            </Draggable>
          )}

          <p className="text-justify p-2">
            {/* Descrição da vulnerabilidade */}
          </p>

          <h1 className="font-bold text-[17px] pt-4">Mais informações</h1>

          <p className="text-red-600 flex items-start mr-2 mt-1">
            <span className="w-2.5 h-2.5 bg-black rounded-full mr-2 mt-1"></span>
            OWASP. (s/d). SQL Injection. Disponível em: 
            <a href="https://owasp.org/www-community/attacks/SQL_Injection" className="underline"> https://owasp.org/www-community/attacks/SQL_Injection</a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default SqlInjection;
