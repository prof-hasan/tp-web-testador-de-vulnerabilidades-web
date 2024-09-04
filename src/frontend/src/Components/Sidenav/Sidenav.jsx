import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './SidenavStyle.css';
import { Link } from 'react-router-dom';

function Sidenav() {
    const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
    const [isBankSubmenuVisible, setIsBankSubmenuVisible] = useState(false);


    const toggleSubmenu = () => {
        setIsSubmenuVisible(!isSubmenuVisible);
    };

    const toggleBankSubmenu = () => {
        setIsBankSubmenuVisible(!isBankSubmenuVisible);
    };

    return (
        

        <div className="sidenav  lg:left-0 p-2 w-[250px] overflow-y-auto text-center bg-neutral-800	shadow-2xl flex-shrink-0   ">   
            <div>
                <div className="p-2.5 mt-1 flex items-center cursor-pointer  " id="vulnerabilidades" onClick={toggleSubmenu}>
                    <h1 className="font-normal text-gray-300 text-[17px] ml-3">Vulnerabilidades</h1>   {(isSubmenuVisible)?(<i class="bi bi-caret-down-fill ml-3 mt-1 text-red-50"></i>):(<i class="bi bi-caret-right-fill text-red-50 ml-3 mt-1"></i>)}


                </div>

                <CSSTransition
                    in={isSubmenuVisible}
                    timeout={300}
                    classNames="submenu"
                    unmountOnExit
                >
                <div className="text-left text-[15px]  mt-2 w-4/5 mx-auto  text-gray-400 " id="submenu-vulnerabilidades">
                    <Link to="/SqlInjection">
                        <div className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1"> Sql Injection </div>
                    </Link>

                    <Link to="/CrossSiteReflected">
                        <div className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1"> Cross-Site Scripting </div>
                    </Link>

                    <Link to="/BrokenAControl">
                        <div className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1"> Broken Access Control </div>
                    </Link>
                </div>
                </CSSTransition>
           
            </div>

            <div>
                <div className="p-2.5 mt-1 flex items-center cursor-pointer" id="dados-bancarios"onClick={toggleBankSubmenu}>
                    <h1 className="font-normal text-gray-300 text-[17px] ml-3">Dados Bancários</h1>
                    {(isBankSubmenuVisible)?(<i class="bi bi-caret-down-fill ml-3 mt-1 text-red-50"></i>):(<i class="bi bi-caret-right-fill text-red-50 ml-3 mt-1"></i>)}
                    
                </div>
                <CSSTransition
                    in={isBankSubmenuVisible}
                    timeout={300}
                    classNames="submenu"
                    unmountOnExit
                >
                <div className="text-left text-[15px]  mt-2 w-4/5 mx-auto  text-gray-400 " id="submenu-vulnerabilidades">
                    <Link to="/ViewBankAccount">
                        <div className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1"> Acessar dados bancários </div>
                    </Link>

                </div>
                
                
                </CSSTransition>

               
            </div>
                                 {/* Ver como adicionar os incones, 
                                    Sombras nas laterais, animção*/}
            

        </div>
    )
}

export default Sidenav;