import { AiOutlineDownload, AiOutlineSend } from "react-icons/ai";

function SocialContributions() {
  const employees = [
    { name: "Leyla Mammadova", salary: 3500, employer: 770, employee: 105 },
    { name: "Ali Hasanov", salary: 3500, employer: 770, employee: 105 },
    { name: "Aygun Aliyeva", salary: 3500, employer: 770, employee: 105 },
    { name: "Elchin Ahmadov", salary: 3500, employer: 770, employee: 105 },
    { name: "Nargiz Guliyeva", salary: 3500, employer: 770, employee: 105 },
    { name: "Kamran Mammadli", salary: 3500, employer: 770, employee: 105 },
    { name: "Sevinj Rahimova", salary: 3500, employer: 770, employee: 105 },
  ];

  const totals = {
    salary: employees.reduce((acc, emp) => acc + emp.salary, 0),
    employer: employees.reduce((acc, emp) => acc + emp.employer, 0),
    employee: employees.reduce((acc, emp) => acc + emp.employee, 0),
  };

  const totalContributions = totals.employer + totals.employee;

  return (
    <div className="border border-gray-300 p-3 sm:p-4 space-y-4 rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-medium">Social Contributions (Sosial Sığorta Haqqı)</h3>
          <p className="text-gray-600 text-sm sm:text-base">September 2025</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2 sm:mt-0">
          <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border rounded hover:bg-gray-100 text-xs sm:text-sm">
            <AiOutlineDownload className="w-4 h-4 sm:w-5 sm:h-5" /> Export
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white rounded hover:bg-gray-900 text-xs sm:text-sm">
            <AiOutlineSend className="w-4 h-4 sm:w-5 sm:h-5" /> Submit to DSMF
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-1 sm:p-2 text-left">Employee Name</th>
              <th className="p-1 sm:p-2 text-right">Salary (₼)</th>
              <th className="p-1 sm:p-2 text-right">Employer (22%)</th>
              <th className="p-1 sm:p-2 text-right">Employee (3%)</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, idx) => (
              <tr key={idx} className="border-b border-gray-300">
                <td className="p-1 sm:p-2">{emp.name}</td>
                <td className="p-1 sm:p-2 text-right">₼{emp.salary.toLocaleString()}</td>
                <td className="p-1 sm:p-2 text-right">₼{emp.employer.toLocaleString()}</td>
                <td className="p-1 sm:p-2 text-right">₼{emp.employee.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t font-bold">
              <td className="p-1 sm:p-2">Total</td>
              <td className="p-1 sm:p-2 text-right">₼{totals.salary.toLocaleString()}</td>
              <td className="p-1 sm:p-2 text-right">₼{totals.employer.toLocaleString()}</td>
              <td className="p-1 sm:p-2 text-right">₼{totals.employee.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="p-3 sm:p-4 bg-gray-100 rounded-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between text-black font-medium">
          <div className="text-lg sm:text-2xl font-bold">
            <h3>Total Contributions Payable:</h3>
          </div>
          <div className="text-lg sm:text-2xl font-bold">₼{totalContributions.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}

export default SocialContributions;