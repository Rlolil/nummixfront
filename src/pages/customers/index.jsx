import { PiExportBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <div className="p-4 max-w-[1320px] sm:mt-0 mt-[80px] sm:ml-[100px]">
      <h1 className="text-2xl font-bold mb-4">{t("Customers")}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        <button className="px-4 py-2 text-black border border-gray-300 rounded-lg">
          + {t("Create_Invoice")}
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2">
          <PiExportBold />
          {t("Export")}
        </button>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg py-6 px-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div className="relative w-full sm:w-[300px]">
            <CiSearch className="absolute inset-y-0 left-3 my-auto text-gray-400" />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2"
            />
          </div>

          <select className="w-full sm:w-[150px] border border-gray-300 rounded-lg px-3 py-2">
            <option>{t("Status")}</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b border-t border-gray-300">
                <th className="py-3 px-2">{t("Name")}</th>
                <th className="px-2">{t("Email")}</th>
                <th className="px-2">{t("Phone")}</th>
                <th className="px-2">{t("Address")}</th>
                <th className="px-2"></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="border-b border-gray-300">
                  <td className="py-3 px-2">{c.name}</td>
                  <td className="px-2">{c.email}</td>
                  <td className="px-2">{c.phone}</td>
                  <td className="px-2">{c.address}</td>
                  <td className="px-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                      {t("View")}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 sm:hidden">
          {customers.map((c) => (
            <div
              key={c.id}
              className="border border-gray-300 rounded-lg p-4 shadow-sm"
            >
              <h2 className="font-semibold text-lg mb-2">{c.name}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">{t("Email")}: </span>{c.email}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">{t("Phone")}: </span>{c.phone}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium">{t("Address")}: </span>{c.address}
              </p>
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm w-full">
                {t("View")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customers;
