import React, { useState } from "react";
import Draggable from "react-draggable";
import {Sidenav} from "../../Components"
import{Header} from "../../Components"
import{CodeBlock} from "../../Components"

function CrossSiteStored() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const vulnerableCodeExample = `
// Exemplo de código
function greet(name) {
    // Comentário
    const message = \`Hello, \${name}!\`;
    console.log(message);
    return message;
}

const result = greet("World");
console.log(result);
`;

  return (
    <div className=" flex flex-col  h-screen ">
      <Header/>
      
      <div className="flex flex-1">
        <Sidenav />
        <div id="conteudo-principal" className="p-4 min-w-0 max-w-full  flex-wrap break-words flex flex-col   ">

          <h1 className="font-bold text-[20px] text-center">Vulnerabilidade: Cross-Site Scripting (Stored)</h1>


          <div className="mx-auto ">

            <input type="text" name="" id="user" className=" border-2 border-gray-400 w-48 text-base focus:outline focus:none " placeholder="Message..."  />
            <button
            class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle text-sm m-2  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">Submit</button>

            <button
            class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle text-sm m-2  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"onClick={handleOpenPopup}
            >Example</button>

          </div>

          <div className="mx-auto overflow-auto rounded-lg shadow m-10">
          <table className="w-3/4 ">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Usuario</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Mensagem</th>

                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">User2</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">PseudoTime</td>

                </tr>

                <tr className="bg-gray-50">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">User1</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">SESSID=313334fc065b013b264368d13edf793b;</td>

                </tr>
            </tbody>
          
          </table>
          
          </div>

          {/* Pop-up de Código */}
          {isPopupOpen && (
            <Draggable>
              <div className="fixed top-20 left-20 z-50 w-[400px] h-[300px] bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex justify-between items-center bg-gray-800 text-white p-2 cursor-move">
                  <span>Exemplo de Código</span>
                  <button onClick={handleClosePopup} className="text-red-500">
                    X
                  </button>
                </div>
                <div className="overflow-auto h-full p-4 bg-gray-900 select-text">
                  <CodeBlock language="javascript" code={vulnerableCodeExample} />
                </div>
              </div>
            </Draggable>
          )}

          <p className="text-justify p-2 ">Cross-Site Scripting (XSS) Stored, também conhecido como XSS Persistente, é uma vulnerabilidade de segurança da web que permite a inserção maliciosa de scripts em páginas da web acessadas por outros usuários. Esta vulnerabilidade ocorre quando dados não confiáveis são enviados para um servidor web e, em seguida, armazenados permanentemente, como em bancos de dados ou sistemas de gerenciamento de conteúdo. Quando um usuário acessa essas páginas afetadas, os scripts maliciosos são executados no navegador do usuário, permitindo que o atacante execute ações não autorizadas, como roubo de cookies de sessão, redirecionamento para sites maliciosos ou até mesmo modificação de conteúdo exibido. <br /> <br />
          
          Para mitigar o XSS Stored, é essencial implementar práticas de segurança robustas, como a validação rigorosa de entrada de dados, sanitização de saída e o uso de bibliotecas e frameworks que ofereçam proteção contra XSS, como Content Security Policy (CSP). Além disso, educar desenvolvedores e usuários sobre os riscos de XSS e a importância de não confiar cegamente em dados de entrada pode ajudar a reduzir significativamente o impacto dessas vulnerabilidades. <br /> <br />
          
          Em resumo, o XSS Stored é uma ameaça significativa para a segurança web, permitindo que atacantes injetem e executem scripts maliciosos em páginas da web, comprometendo a integridade, confidencialidade e disponibilidade dos dados dos usuários. A conscientização e a implementação de práticas de segurança eficazes são fundamentais para mitigar esses riscos e proteger os sistemas web contra explorações maliciosas. <br /><br />

          Para mitigar o risco de XSS, os desenvolvedores devem adotar práticas seguras de desenvolvimento web, como a sanitização rigorosa de entradas do usuário e a implementação de mecanismos de segurança, como Content Security Policy (CSP), que ajudam a mitigar os riscos associados ao XSS.</p>

         
          <h1 className="font-bold text-[17px] pt-4  ">Mais informações</h1>

          <p className="text-red-600 flex items-start mr-2 mt-1">
          <span className="w-2.5 h-2.5 bg-black rounded-full mr-2 mt-1"></span>
          OWASP. "Cross-site Scripting (XSS) Stored". Disponível em: 
          <a href=" https://owasp.org/www-community/attacks/xss/" className="underline">https://owasp.org/www-community/attacks/xss/</a>
          </p>

          <p className="text-red-600 flex items-start mr-2 mt-1">
          <span className="w-2.5 h-2.5 bg-black rounded-full mr-2 mt-1"></span>
          
          <a href=" https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting" className="underline"> https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting</a>
          </p>

        </div>
      </div>
          
    

     


    </div>
    
  );
} 
export default CrossSiteStored;