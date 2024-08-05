function Header() {
    return (
      <nav className="bg-neutral-900 px-4 py-3 h-14 w-full flex justify-between shadow-2xl ">
        <div className=" text-gray-300 font-light text-[20px]" id="Header-tittle">
        Web Vulnerability Tester
        </div>

        <div className="flex justify-between space-x-20 absolute left-1/2 items-center " id="header-options">
            <div className=" text-gray-300 font-light cursor-pointer hover:bg-gray-800 hover:text-white px-2 py-1 rounded">
            Login
            </div>

            <div className=" text-gray-300 font-light cursor-pointer hover:bg-gray-800 hover:text-white px-2 py-1 rounded">
            Criar usuario
            </div>

            <select className="bg-gray-800 text-gray-300 font-light rounded cursor-pointer outline-none px-2 py-1 hover:bg-gray-700 hover:text-white">
                    <option className="bg-gray-800 text-gray-300" value="" disabled selected>Dificuldade</option>
                    <option className="" value="option1">Fácil</option>
                    <option className="" value="option2">Médio</option>
                    <option className="" value="option3">Difícil</option>
                </select>

                <select className="bg-gray-800 text-gray-300 font-light rounded cursor-pointer outline-none px-2 py-1 hover:bg-gray-700 hover:text-white">
                    <option value="" disabled selected>Tipo</option>
                    
                </select>
            
            
        </div>

      </nav>
    );
  }
  
  export default Header;