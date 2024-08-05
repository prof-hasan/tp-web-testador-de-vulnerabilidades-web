import {Sidenav} from "../../Components"
import{Header} from "../../Components"

function Home() {
  return (
    <div className=" flex flex-col  h-screen ">
      <Header/>
      
      <div className="flex flex-1">
        <Sidenav />
        <div id="conteudo-principal" className="p-4 min-w-0 max-w-full  flex-wrap break-words flex flex-col   ">

          

          <h1 className="font-bold text-[20px] text-center">Vulnerabilidade: Cross-Site Scripting</h1>

          <div className="rounded-md shadow-lg h-66 w-3/4 border-2 border-black bg-gray-300 p-6 m-5 mx-auto" id="user-input">
              <div>
                <label htmlFor="user" className="block text-bas mb-2 pt-2">User</label>
                <input type="text" name="" id="user" className="border w-36 text-base focus:outline "  />
              </div>

              <div>
                <label htmlFor="message" className="block text-bas mb-2 pt-2">Message</label>
                <input type="text" name="" id="message" className="border w-72 text-base focus:outline h-36 "  />
              </div>

              <div className="flex justify-end ">
                <button type="button" class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 m-2 text-center align-middle text-sm  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ">Source Code</button>
                <button

                class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle text-sm m-2  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">Submit</button>

              </div>
          </div>

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
export default Home;