import React, { useState } from "react";
import {Sidenav} from "../../Components"
import{Header} from "../../Components"


function ViewBankAccount(){

    return(
        <div className=" flex flex-col  h-screen ">
      <Header/>
      
      <div className="flex flex-1">
        <Sidenav />
        <div id="conteudo-principal" className="p-4 min-w-0 max-w-full  flex-wrap break-words flex flex-col   ">

        
        <div class="w-full max-w-sm ml-4 mt-8">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <div class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Username
            </div>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-full-name" type="text" value="Jane Doe" disabled/>
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <div class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Agencia
            </div>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-password" type="password" value="teste" disabled />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <div class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
             Numero da conta
            </div>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-password" type="password" value="teste" disabled />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <div class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Digito
            </div>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-password" type="password" value="teste" disabled />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <div class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Saldo
            </div>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-password" type="password" value="teste" disabled />
          </div>
        </div>
      </div>
            
        
            

          

        </div>
      </div>
          
    

     


    </div>
    )
}


export default ViewBankAccount;