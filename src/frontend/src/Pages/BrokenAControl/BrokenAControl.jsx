import { Sidenav } from "../../Components";
import { Header } from "../../Components";

function BrokenAControl() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1">
        <Sidenav />
        <div
          id="conteudo-principal"
          className="p-4 min-w-0 max-w-full flex-wrap break-words flex flex-col"
        >
          <h1 className="font-bold text-[20px] text-center">
            Vulnerabilidade: Broken Access Control
          </h1>

          <p className="text-justify p-2">
            <strong>Broken Access Control</strong>, ou{" "}
            <strong>Controle de Acesso Quebrado</strong>, refere-se a uma
            vulnerabilidade de segurança em que um aplicativo da web não impõe
            corretamente restrições de acesso aos recursos protegidos. Isso
            permite que usuários não autorizados acessem informações
            confidenciais, executem ações privilegiadas ou modifiquem dados sem
            permissão.
            <br />
            <br />
            Essa vulnerabilidade pode ocorrer de várias maneiras, como:
            <ul className="list-disc list-inside">
              <li>
                A ausência de verificação de autorização em determinadas
                funcionalidades do aplicativo.
              </li>
              <li>A exposição de APIs sem restrições adequadas.</li>
              <li>
                A falha na implementação de políticas de controle de acesso
                baseadas em função.
              </li>
            </ul>
            <br />
            Um invasor pode explorar essa falha manipulando solicitações HTTP,
            alterando identificadores de sessão, ou acessando diretamente URLs
            restritas.
            <br />
            <br />
            <strong>Como Testar</strong>
            <br />
            <br />
            Na aplicação em questão, você pode testar o acesso a páginas
            protegidas diretamente pela URL:
            <br />
            <br />
            <strong>Versão Fácil:</strong>
            <br />
            <strong>URL:</strong> `/Admin/easy`
            <br />
            <strong>Acesso:</strong> Qualquer usuário que conheça o link pode
            acessar essa página. Isso demonstra uma falha de segurança onde a
            aplicação não valida corretamente as permissões do usuário antes de
            conceder acesso à página. Basta digitar o link no navegador para
            acessar essa área.
            <br />
            <br />
            <strong>Versão Difícil:</strong>
            <br />
            <strong>URL:</strong> `/Admin/hard`
            <br />
            <strong>Acesso:</strong> Esta página deveria exigir autenticação e
            permissão de administrador para ser acessada. Somente usuários
            autenticados com privilégios de administrador podem acessar esta
            rota. Se o acesso for concedido sem a devida autenticação, isso
            demonstra uma séria vulnerabilidade na aplicação.
            <br />
            <br />
            <strong>Consequências de Broken Access Control</strong>
            <br />
            <br />
            As consequências de um <strong>Broken Access Control</strong> podem
            ser graves e variadas. Um invasor pode:
            <ul className="list-disc list-inside">
              <li>Acessar informações confidenciais, como dados pessoais ou financeiros.</li>
              <li>Realizar operações não autorizadas, como a modificação ou exclusão de dados importantes.</li>
              <li>Assumir o controle total do aplicativo.</li>
            </ul>
            <br />
            Além disso, isso pode levar a violações de conformidade, perda de
            confiança dos usuários, e danos à reputação da empresa.
            <br />
            <br />
            <strong>Como Prevenir</strong>
            <br />
            <br />
            Para mitigar o risco de <strong>Broken Access Control</strong>, os
            desenvolvedores devem:
            <ul className="list-disc list-inside">
              <li>
                Implementar medidas de segurança, como a aplicação rigorosa de
                autenticação e autorização em todas as funcionalidades do
                aplicativo.
              </li>
              <li>Utilizar tokens de sessão seguros.</li>
              <li>
                Implementar controles de acesso baseados em função.
              </li>
            </ul>
            <br />
            Além disso, testes de segurança regulares e auditorias de código
            podem ajudar a identificar e corrigir vulnerabilidades existentes.
            <br />
            <br />
            <strong>Mais informações</strong>
            <br />
            <br />
            <p className="text-red-600 flex items-start mr-2 mt-1">
              <span className="w-2.5 h-2.5 bg-black rounded-full mr-2 mt-1"></span>
              OWASP. (s/d). Broken Access Control. Disponível em:{" "}
              <a
                href="https://owasp.org/www-project-top-ten/2017/A6_2017-Broken_Authentication"
                className="underline"
              >
                https://owasp.org/www-project-top-ten/2017/A6_2017-Broken_Authentication
              </a>
            </p>
            <p className="text-red-600 flex items-start mr-2 mt-1">
              <span className="w-2.5 h-2.5 bg-black rounded-full mr-2 mt-1"></span>
              PortSwigger. (s/d). Broken Access Control. Disponível em:{" "}
              <a
                href="https://portswigger.net/web-security/access-control"
                className="underline"
              >
                https://portswigger.net/web-security/access-control
              </a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BrokenAControl;
