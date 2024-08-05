import {Sidenav} from "../../Components"
import{Header} from "../../Components"

function BrokenAControl() {
  return (
    <div className=" flex flex-col  h-screen ">
      <Header/>
      
      <div className="flex flex-1">
        <Sidenav />
        <div id="conteudo-principal" className="p-4 min-w-0 max-w-full  flex-wrap break-words flex flex-col   ">

          

          <h1 className="font-bold text-[20px] text-center">Vulnerabilidade: Broken Access Control</h1>

          <div className="mx-auto ">
            
            <input type="text" name="" id="user" className="border-dotted border-2 border-black w-48 text-base focus:outline " placeholder="User..."  />
            <button
            class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle text-sm m-2  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">Submit</button>

            

          </div>

          <p className="text-justify p-2 ">Broken Access Control, ou Controle de Acesso Quebrado, refere-se a uma vulnerabilidade de segurança em que um aplicativo da web não impõe corretamente restrições de acesso aos recursos protegidos. Isso permite que usuários não autorizados acessem informações confidenciais, execute ações privilegiadas ou modifique dados sem permissão. <br /> <br />
          
          Essa vulnerabilidade pode ocorrer de várias maneiras, como a ausência de verificação de autorização em determinadas funcionalidades do aplicativo, a exposição de APIs sem restrições adequadas, ou a falha na implementação de políticas de controle de acesso baseadas em função. Um invasor pode explorar essa falha manipulando solicitações HTTP, alterando identificadores de sessão, ou acessando diretamente URLs restritas. <br /> <br />
          
          As consequências de um Broken Access Control podem ser graves e variadas. Um invasor pode acessar informações confidenciais, como dados pessoais ou financeiros, realizar operações não autorizadas, como a modificação ou exclusão de dados importantes, ou até mesmo assumir o controle total do aplicativo. Além disso, isso pode levar a violações de conformidade, perda de confiança dos usuários e danos à reputação da empresa.
         <br /><br />

         Para mitigar o risco de Broken Access Control, os desenvolvedores devem implementar medidas de segurança, como a aplicação rigorosa de autenticação e autorização em todas as funcionalidades do aplicativo, o uso de tokens de sessão seguros, e a implementação de controles de acesso baseados em função. Além disso, testes de segurança regulares e auditorias de código podem ajudar a identificar e corrigir vulnerabilidades existentes.
         Em resumo, Broken Access Control representa uma séria ameaça à segurança da informação em aplicativos da web, exigindo uma abordagem proativa e contínua para garantir a proteção adequada dos dados e recursos do aplicativo.</p>

         
          <h1 className="font-bold text-[17px] pt-4  ">Mais informações</h1>

          <p className="text-red-600 flex items-start mr-2 mt-1">
          <span className="w-2.5 h-2.5 bg-black rounded-full mr-2 mt-1"></span>
          OWASP. (s/d). Broken Access Control. Disponível em: 
          <a href=" https://owasp.org/www-project-top-ten/2017/A6_2017-Broken_Authentication" className="underline"> https://owasp.org/www-project-top-ten/2017/A6_2017-Broken_Authentication</a>
          </p>

          <p className="text-red-600 flex items-start mr-2 mt-1">
          <span className="w-2.5 h-2.5 bg-black rounded-full mr-2 mt-1"></span>
          PortSwigger. (s/d). Broken Access Control. Disponível em: 
          <a href="https://portswigger.net/web-security/cross-site-scripting/cheat-sheet" className="underline"> https://portswigger.net/web-security/access-control</a>
          </p>

        </div>
      </div>
          
    

     


    </div>
    
  );
} 
export default BrokenAControl;