import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import {Sidenav} from "../../Components"
import{Header} from "../../Components"
import{CodeBlock} from "../../Components"
import DOMPurify from "dompurify";



function CrossSiteRflected() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [user, setUser] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [textoExibido, setTextoExibido] = useState(""); 
  const [textoExibidoUser, setTextoExibidoUser] = useState("");

  useEffect(() => {
    document.title = "Cross Site Scripting"
  })

  const [difficulty, setDifficulty] = useState(''); // Estado para armazenar a dificuldade selecionada

  // Função que atualiza a dificuldade
  const handleDifficultyChange = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  const handleSubmit = () => {
    if (user || message) { 
      setTextoExibidoUser(`User: ${user}`);
      setTextoExibido(`Message: ${message}`);
    } else {
      setTextoExibido("")
      setTextoExibidoUser(""); 
    }
  };

  const sanitizedUserText = DOMPurify.sanitize(textoExibidoUser);
  const sanitizedMessageText = DOMPurify.sanitize(textoExibido);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
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

const sourceCode = `
`;
  return (
    <div className=" flex flex-col  h-screen ">
    <Header onDifficultyChange={handleDifficultyChange} /> {/* Passa a função como prop */}
      
      <div className="flex flex-1">
        <Sidenav />
        <div id="conteudo-principal" className="p-4 min-w-0 max-w-full  flex-wrap break-words flex flex-col   ">

          

          <h1 className="font-bold text-[20px] text-center">Vulnerabilidade: Cross-Site Scripting (Reflected)</h1>

          <div className="rounded-md shadow-lg h-66 w-3/4 border-2 border-black bg-gray-300 p-6 m-5 mx-auto" id="user-input">
              <div>
                <label htmlFor="user" className="block text-bas mb-2 pt-2">User</label>
                <input type="text" name="" id="user" className="border w-36 text-base focus:outline "   value={user} 
                onChange={(e) => setUser(e.target.value)} />
              </div>

              <div>
                <label htmlFor="message" className="block text-bas mb-2 pt-2">Message</label>
                <textarea 
                  id="message" 
                  className="border w-72 text-base focus:outline h-36 align-text-top p-2"
                  placeholder="Digite sua mensagem aqui..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} />
              </div>


              <div className="flex justify-end ">
                <button type="button" class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 m-2 text-center align-middle text-sm  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ">Example</button>
                
                <button
                class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle text-sm m-2  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button" onClick={handleOpenPopup} >Source Code</button>

                <button
                class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle text-sm m-2  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"  onClick={handleSubmit} >Submit</button>

              </div>

              {(textoExibido || textoExibidoUser) && (
                <div className="flex flex-col">
                {difficulty === 'easy' ? <div dangerouslySetInnerHTML={{ __html: textoExibidoUser }} /> : <div>{sanitizedUserText}</div>}

                {difficulty === 'easy' ? <div dangerouslySetInnerHTML={{ __html: textoExibido }} /> : <div>{sanitizedMessageText}</div>}
                 
                </div>
              )}
  

          </div>

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

          <p className="text-justify p-2 ">Cross-site Scripting (XSS) é uma vulnerabilidade de segurança que permite que um invasor injete scripts maliciosos em páginas web visualizadas por outros usuários. Esses scripts são executados no navegador da vítima, permitindo que o invasor roube informações confidenciais, como cookies de sessão, ou execute ações indesejadas em nome do usuário. <br /> <br />
          
          A técnica de XSS é explorada quando um aplicativo da web não valida corretamente os dados de entrada antes de exibi-los em uma página web. Isso pode ocorrer em campos de formulário, URLs ou até mesmo em campos de cabeçalho HTTP. O invasor pode inserir scripts maliciosos, geralmente escritos em JavaScript, que são então executados quando outros usuários visitam a página comprometida. <br /> <br />
          
          As consequências de um ataque XSS podem ser graves. Um invasor pode roubar sessões de usuário, permitindo acesso não autorizado a contas, ou redirecionar usuários para páginas de phishing para roubar informações de login. Além disso, os scripts maliciosos podem ser usados para infectar os usuários com malware, manipular o conteúdo da página ou até mesmo roubar informações confidenciais diretamente do navegador do usuário. <br /><br />

          Para mitigar o risco de XSS, os desenvolvedores devem adotar práticas seguras de desenvolvimento web, como a sanitização rigorosa de entradas do usuário e a implementação de mecanismos de segurança, como Content Security Policy (CSP), que ajudam a mitigar os riscos associados ao XSS.</p>

         
          <h1 className="font-bold text-[17px] pt-4  ">Mais informações</h1>

          <p className="text-red-600 flex items-start mr-2 mt-1">
          <span className="w-2.5 h-2.5 bg-black rounded-full mr-2 mt-1"></span>
          OWASP. "Cross-site Scripting (XSS)". Disponível em: 
          <a href="https://owasp.org/www-community/attacks/xss/" className="underline">https://owasp.org/www-community/attacks/xss/</a>
          </p>

          <p className="text-red-600 flex items-start mr-2 mt-1">
          <span className="w-2.5 h-2.5 bg-black rounded-full mr-2 mt-1"></span>
          OWASP. "Cross-site Scripting (XSS)". Disponível em: 
          <a href="https://portswigger.net/web-security/cross-site-scripting/cheat-sheet" className="underline">https://portswigger.net/web-security/cross-site-scripting/cheat-sheet</a>
          </p>

        </div>
      </div>
          
    

     


    </div>
    
  );
} 
export default CrossSiteRflected;