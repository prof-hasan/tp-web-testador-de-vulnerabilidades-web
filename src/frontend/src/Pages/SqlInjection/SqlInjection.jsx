import { Sidenav, Header, CodeBlock } from "../../Components";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Draggable from "react-draggable";

function SqlInjection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(''); // Estado para o conteúdo do popup
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState({ branchNumber: '', accountNumber: '' });
  const [difficulty, setDifficulty] = useState(''); // Estado para armazenar a dificuldade

  useEffect(() => {
    document.title = "SQL Injection"
  });

  const handleOpenPopup = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Função para realizar a busca de acordo com a dificuldade selecionada
  const handleSearch = () => {
    const route = difficulty === 'easy'
      ? 'http://localhost:8080/user/bank/vulnerable'  // Rota para "fácil"
      : 'http://localhost:8080/user/bank/protected';  // Rota para "difícil"

    axios.post(route, searchQuery)
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        setResults([]);
        console.error("There was an error!", error);
      });
  };

  // Exemplos de código diferentes baseados na dificuldade
  const exampleEasy = `
function vulnerableQuery() {
    const query = "SELECT * FROM users WHERE username = '" + userInput + "'";
    // Exemplo de injeção SQL vulnerável
    console.log(query);
}
`;

  const exampleHard = `
function secureQuery() {
    const query = "SELECT * FROM users WHERE username = ?";
    // Usando parâmetros para prevenir injeção SQL
    console.log(query);
}
`;

  const vulnerableCodeExample = `
function greet(name) {
    const message = \`Hello, \${name}!\`;
    console.log(message);
    return message;
}

const result = greet("World");
console.log(result);
`;

  return (
    <div className="flex flex-col h-screen">
      <Header onDifficultyChange={setDifficulty} /> {/* Recebe a dificuldade selecionada */}

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
              onClick={handleSearch} // Realiza a busca com base na dificuldade
            >
              Search
            </button>

            <button
              className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle text-sm m-2 text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button" 
              onClick={() => handleOpenPopup(difficulty === 'easy' ? exampleEasy : exampleHard)} // Mostra o exemplo baseado na dificuldade
            >
              Example
            </button>

            <button
              className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle text-sm m-2 text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button" 
              onClick={() => handleOpenPopup(vulnerableCodeExample)} // Mostra o código-fonte
            >
              Source Code
            </button>

          </div>

          {results.length > 0 && (
            <div className="mx-auto overflow-auto rounded-lg shadow m-10">
              <table className="w-4/4">
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
                  <CodeBlock language="javascript" code={popupContent} /> {/* Mostra o conteúdo do popup */}
                </div>
              </div>
            </Draggable>
          )}

<p className="text-justify p-2">
          SQL Injection é uma vulnerabilidade de segurança comumente explorada em sistemas de gerenciamento de banco de dados (DBMS) que utilizam SQL (Structured Query Language). Essa técnica maliciosa permite que um invasor insira código SQL arbitrário em consultas de entrada, permitindo assim manipular o banco de dados e obter acesso não autorizado a informações confidenciais ou realizar ações indesejadas. <br /> <br />
          
          Para realizar uma SQL Injection, o invasor explora falhas na forma como as consultas SQL são construídas em um aplicativo da web. Geralmente, isso ocorre quando os desenvolvedores não sanitizam corretamente as entradas do usuário antes de incluí-las em consultas SQL. O invasor pode então inserir instruções SQL adicionais ou modificar as consultas existentes para executar ações não autorizadas. <br /> <br />
          
          As consequências de uma SQL Injection podem ser devastadoras. Um invasor pode obter acesso a dados confidenciais, como informações de usuário, senhas, dados financeiros ou até mesmo informações críticas da empresa. Além disso, eles podem manipular ou excluir dados, comprometer a integridade do sistema, ou até mesmo assumir o controle completo do servidor.
         <br /><br />

         Para mitigar o risco de SQL Injection, os desenvolvedores devem implementar práticas seguras de desenvolvimento de software, como a utilização de consultas parametrizadas ou o uso de ORM (Object-Relational Mapping) para interagir com o banco de dados. Além disso, é essencial realizar auditorias de segurança regulares e aplicar patches de segurança para evitar vulnerabilidades conhecidas
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
