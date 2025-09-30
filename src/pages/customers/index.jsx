import React from "react";
import { PiExportBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@exa",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, CA 1245",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@e",
    phone: "(555) 234-5678",
    address: "456 Oak St, Sometown, G4989",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.johnson",
    phone: "(555) 345-6789",
    address: "789 Eim St, Anycity, CA 13579",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@",
    phone: "(555) 456-7890",
    address: "321 Maple St, Yourtown, CA 2498",
  },
];

function Customers() {
  return (
    <div className="p-4 max-w-[1320px] ml-[100px]">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>

      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 text-black border border-gray-300 rounded-lg">+ Create Invoice</button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2"><PiExportBold />Export</button>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg py-8 px-4 shadow-sm">
        <div className="flex flex-col gap-2 mb-4">
          <div className="relative w-[400px]">
            <CiSearch className="absolute inset-y-0 left-3 my-auto text-gray-400"  />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2"
            />
          </div>

          <select className="w-[150px] border border-gray-300 rounded-lg px-3 py-2">
            <option>Status</option>
          </select>
        </div>


        <table className="w-full border-collapse ">
          <thead>
            <tr className="text-left border-b border-t border-gray-300">
              <th className="py-4">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-b border-gray-300">
                <td className="py-4">{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.address}</td>
                <td>
                  <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
