import {Sidenav} from "../../Components"
import{Header} from "../../Components"

function SqlInjection() {
  return (
    <div className=" flex flex-col  h-screen ">
      <Header/>
      
      <div className="flex flex-1">
        <Sidenav />
        <div id="conteudo-principal" className="p-4 min-w-0 max-w-full  flex-wrap break-words flex flex-col   ">

          

          <h1 className="font-bold text-[20px] text-center">Vulnerabilidade: SQL Injection</h1>

          <div className="mx-auto ">
            <label htmlFor="user" className=" text-bas mr-2 mb-2 pt-2">Pesquise pelo nome do usuario:</label>
            <input type="text" name="" id="user" className=" border-2 border-gray-400 w-48 text-base focus:outline focus:none " placeholder="User..."  />
            <button
            class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle text-sm m-2  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">Search</button>

          </div>

          <div className="mx-auto overflow-auto rounded-lg shadow m-10">
          <table className="w-3/4 ">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Nome</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Idade</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Profissão</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">User2</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">49</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Programador</td>
                </tr>

                <tr className="bg-gray-50">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">User1</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">21</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Cozinheiro</td>
                </tr>
            </tbody>
          
          </table>
          
          </div>

          <p className="text-justify p-2 ">SQL Injection é uma vulnerabilidade de segurança comumente explorada em sistemas de gerenciamento de banco de dados (DBMS) que utilizam SQL (Structured Query Language). Essa técnica maliciosa permite que um invasor insira código SQL arbitrário em consultas de entrada, permitindo assim manipular o banco de dados e obter acesso não autorizado a informações confidenciais ou realizar ações indesejadas. <br /> <br />
          
          Para realizar uma SQL Injection, o invasor explora falhas na forma como as consultas SQL são construídas em um aplicativo da web. Geralmente, isso ocorre quando os desenvolvedores não sanitizam corretamente as entradas do usuário antes de incluí-las em consultas SQL. O invasor pode então inserir instruções SQL adicionais ou modificar as consultas existentes para executar ações não autorizadas. <br /> <br />
          
          As consequências de uma SQL Injection podem ser devastadoras. Um invasor pode obter acesso a dados confidenciais, como informações de usuário, senhas, dados financeiros ou até mesmo informações críticas da empresa. Além disso, eles podem manipular ou excluir dados, comprometer a integridade do sistema, ou até mesmo assumir o controle completo do servidor.
         <br /><br />

         Para mitigar o risco de SQL Injection, os desenvolvedores devem implementar práticas seguras de desenvolvimento de software, como a utilização de consultas parametrizadas ou o uso de ORM (Object-Relational Mapping) para interagir com o banco de dados. Além disso, é essencial realizar auditorias de segurança regulares e aplicar patches de segurança para evitar vulnerabilidades conhecidas.</p>

         
          <h1 className="font-bold text-[17px] pt-4  ">Mais informações</h1>

          <p className="text-red-600 flex items-start mr-2 mt-1">
          <span className="w-2.5 h-2.5 bg-black rounded-full mr-2 mt-1"></span>
          OWASP. (s/d). SQL Injection. Disponível em: 
          <a href=" https://owasp.org/www-community/attacks/SQL_Injection" className="underline"> https://owasp.org/www-project-top-ten/2017/A6_2017-Broken_Authentication</a>
          </p>

          <p className="text-red-600 flex items-start mr-2 mt-1">
          <span className="w-2.5 h-2.5 bg-black rounded-full mr-2 mt-1"></span>
          OWASP. (s/d). SQL Injection. Disponível em: 
          <a href=" https://owasp.org/www-community/attacks/SQL_Injection" className="underline">  https://owasp.org/www-community/attacks/SQL_Injection</a>
          </p>

        </div>
      </div>
          
    

     


    </div>
    
  );
} 
export default SqlInjection;