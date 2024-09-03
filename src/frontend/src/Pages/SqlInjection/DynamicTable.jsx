import React from 'react';

function DynamicTable({ data }) {
  return (
    <div className="overflow-auto rounded-lg shadow">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Nome</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Idade</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Profissão</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Agência</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Número da Conta</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((user, index) => (
            <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} key={index}>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.username}</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.age}</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.job}</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.branchNumber}</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.accountNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;
