import React from 'react';

function DynamicTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen bg-white flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full lg:w-4/5">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-800 text-white uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left" style={{ width: '20%' }}>Número da Agência</th>
                  <th className="py-3 px-6 text-right" style={{ width: '20%' }}>Número da Conta</th>
                  <th className="py-3 px-6 text-right" style={{ width: '20%' }}>Saldo</th>
                  <th className="py-3 px-6 text-right" style={{ width: '20%' }}>Segredo</th>
                  <th className="py-3 px-6 text-right" style={{ width: '20%' }}>Dígito</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {data.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">{item.branchNumber}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-right whitespace-nowrap">{item.accountNumber}</td>
                    <td className="py-3 px-6 text-right whitespace-nowrap">{item.balance}</td>
                    <td className="py-3 px-6 text-right whitespace-nowrap">{item.secret}</td>
                    <td className="py-3 px-6 text-right whitespace-nowrap">{item.digit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicTable;
