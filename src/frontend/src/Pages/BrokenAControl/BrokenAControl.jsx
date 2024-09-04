import { Sidenav } from "../../Components";
import { Header } from "../../Components";
import { useEffect, useState } from 'react';

function BrokenAControl() {
  const [difficulty, setDifficulty] = useState(''); // Estado para armazenar a dificuldade selecionada

  useEffect(() => {
    document.title = "Broken Access Control"
  });

  // Função que atualiza a dificuldade
  const handleDifficultyChange = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header onDifficultyChange={handleDifficultyChange} /> {/* Passa a função como prop */}

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
            <strong>Broken Access Control</strong>, ou <strong>Controle de Acesso Quebrado</strong>, refere-se a uma vulnerabilidade de segurança em que um aplicativo da web não impõe corretamente restrições de acesso aos recursos protegidos. Isso permite que usuários não autorizados acessem informações confidenciais, executem ações privilegiadas ou modifiquem dados sem permissão.
            <br /><br />
            Essa vulnerabilidade pode ocorrer de várias maneiras, como:
            <ul className="list-disc list-inside">
              <li>A ausência de verificação de autorização em determinadas funcionalidades do aplicativo.</li>
              <li>A exposição de APIs sem restrições adequadas.</li>
              <li>A falha na implementação de políticas de controle de acesso baseadas em função.</li>
            </ul>
            Um invasor pode explorar essa falha manipulando solicitações HTTP, alterando identificadores de sessão, ou acessando diretamente URLs restritas.
            <br /><br />
            <strong>Como Testar</strong>
          </p>

          {difficulty === 'easy' ? (
            <p className="text-justify p-2">
              <strong>Versão Fácil:</strong>
              <br />
              <strong>URL:</strong> `/Admin/easy`
              <br />
              <strong>Acesso:</strong> Qualquer usuário que conheça o link pode acessar essa página. Isso demonstra uma falha de segurança onde a aplicação não valida corretamente as permissões do usuário antes de conceder acesso à página.
              <br />
              <br />
              <strong>Consequências:</strong> Um invasor pode acessar informações confidenciais ou realizar operações não autorizadas.
            </p>
          ) : (
            <p className="text-justify p-2">
              <strong>Versão Difícil:</strong>
              <br />
              <strong>URL:</strong> `/Admin/hard`
              <br />
              <strong>Acesso:</strong> Esta página deveria exigir autenticação e permissão de administrador. Somente usuários autenticados com privilégios de administrador podem acessar esta rota. 
              <br />
              <br />
              <strong>Consequências:</strong> Um invasor pode acessar informações altamente confidenciais e realizar ações críticas, levando a grandes riscos de segurança.
            </p>
          )}

          <p className="text-justify p-2">
            <strong>Consequências de Broken Access Control:</strong>
            As consequências de um <strong>Broken Access Control</strong> podem ser graves. Um invasor pode acessar dados confidenciais, realizar operações não autorizadas, ou até mesmo assumir o controle total da aplicação. Isso pode resultar em perda de conformidade, confiança dos usuários, e danos à reputação da empresa.
          </p>

          <strong>Mais informações</strong>
          <br />
          <p className="text-red-600 flex items-start mr-2 mt-1">
            <span className="w-2.5 h-2.5 bg-black rounded-full mr-2 mt-1"></span>
            OWASP. (s/d). Broken Access Control. Disponível em:{" "}
            <a href="https://owasp.org/www-project-top-ten/2017/A6_2017-Broken_Authentication" className="underline">
              https://owasp.org/www-project-top-ten/2017/A6_2017-Broken_Authentication
            </a>
          </p>
          <p className="text-red-600 flex items-start mr-2 mt-1">
            <span className="w-2.5 h-2.5 bg-black rounded-full mr-2 mt-1"></span>
            PortSwigger. (s/d). Broken Access Control. Disponível em:{" "}
            <a href="https://portswigger.net/web-security/access-control" className="underline">
              https://portswigger.net/web-security/access-control
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BrokenAControl;
