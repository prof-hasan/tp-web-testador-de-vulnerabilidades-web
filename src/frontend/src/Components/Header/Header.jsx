import { Link, useLocation } from 'react-router-dom';
import { useAuth } from "../../Hooks/UseAuth";
import { useState } from 'react';

function Header({ onDifficultyChange }) { // Recebe a função como prop
  const location = useLocation();
  const { user, logout } = useAuth();
  const [difficulty, setDifficulty] = useState(''); // Estado para armazenar a dificuldade

  const handleClick = () => {
    logout();
  };

  const handleDifficultyChange = (event) => {
    const selectedDifficulty = event.target.value;
    setDifficulty(selectedDifficulty);
    onDifficultyChange(selectedDifficulty); // Chama a função ao mudar a dificuldade
  };

  return (
    <nav className="bg-neutral-900 px-4 py-3 h-14 w-full flex justify-between shadow-2xl ">
      <Link 
        to={user ? "/sqlinjection" : "/"} 
        className="text-gray-300 font-light text-[20px]" 
        id="Header-tittle"
      >
        Web Vulnerability Tester
      </Link>
      
      <div className="flex justify-between space-x-20 absolute left-1/2 items-center" id="header-options">
        <Link onClick={handleClick}>
          <div className="text-gray-300 font-light cursor-pointer hover:bg-gray-800 hover:text-white px-2 py-1 rounded">
            Logout
          </div>
        </Link>

        <select 
          className="bg-gray-800 text-gray-300 font-light rounded cursor-pointer outline-none px-2 py-1 hover:bg-gray-700 hover:text-white"
          value={difficulty}
          onChange={handleDifficultyChange}
        >
          <option className="bg-gray-800 text-gray-300" value="" disabled>Dificuldade</option>
          <option value="easy">Fácil</option>
          {location.pathname === '/SqlInjection' && <option value="medium">Médio</option>}
          <option value="hard">Difícil</option>
        </select>

        {(location.pathname === '/CrossSiteReflected' || location.pathname === '/CrossSiteStored') && (
          <select className="bg-gray-800 text-gray-300 font-light rounded cursor-pointer outline-none px-2 py-1 hover:bg-gray-700 hover:text-white">
            <option value="" disabled>Tipo</option>
            <option value="">Reflected</option>
            <option value="">Stored</option>
          </select>
        )}
      </div>
    </nav>
  );
}

export default Header;
