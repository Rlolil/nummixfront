import { AiOutlineDownload, AiOutlineSend } from "react-icons/ai";

function VatDeclaration({ taxData, totalInput, totalOutput, vatPayable }) {
  const formatAZN = (value) => `₼${value.toLocaleString("en-US")}`;

  return (
    <div className="p-3 sm:p-4 md:p-6 max-w-4xl mx-auto border border-gray-300 rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-medium">VAT Declaration (ƏDV Bəyannaməsi)</h3>
          <p className="text-gray-600 text-sm sm:text-base">September 2025</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2 sm:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100 text-xs sm:text-sm">
            <AiOutlineDownload className="w-4 h-4 sm:w-5 sm:h-5" /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-900 text-xs sm:text-sm">
            <AiOutlineSend className="w-4 h-4 sm:w-5 sm:h-5" /> Submit to e-taxes.gov.az
          </button>
        </div>
      </div>
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2">Output VAT</h3>
        <div className="overflow-x-auto">
          <table className="w-full border text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 min-w-[120px]">Description</th>
                <th className="text-right p-1 sm:p-2 min-w-[100px]">Base Amount (₼)</th>
                <th className="text-right p-1 sm:p-2 min-w-[100px]">VAT Amount (₼)</th>
              </tr>
            </thead>
            <tbody>
              {taxData.vat.output.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-1 sm:p-2">{row.desc}</td>
                  <td className="p-1 sm:p-2 text-right">{formatAZN(row.base)}</td>
                  <td className="p-1 sm:p-2 text-right">{formatAZN(row.vat)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2">Input VAT</h3>
        <div className="overflow-x-auto">
          <table className="w-full border text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 min-w-[120px]">Description</th>
                <th className="text-right p-1 sm:p-2 min-w-[100px]">Base Amount (₼)</th>
                <th className="text-right p-1 sm:p-2 min-w-[100px]">VAT Amount (₼)</th>
              </tr>
            </thead>
            <tbody>
              {taxData.vat.input.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-1 sm:p-2">{row.desc}</td>
                  <td className="p-1 sm:p-2 text-right">{formatAZN(row.base)}</td>
                  <td className="p-1 sm:p-2 text-right">{formatAZN(row.vat)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-3 sm:p-4 md:p-6 border rounded-lg bg-gray-50">
        <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2">VAT Summary</h3>
        <div className="flex flex-col sm:flex-row justify-between mb-1 text-xs sm:text-sm">
          <span>Total Output VAT:</span>
          <span>{formatAZN(totalOutput)}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mb-1 text-xs sm:text-sm">
          <span>Less: Total Input VAT:</span>
          <span>{formatAZN(totalInput)}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between font-bold text-base sm:text-lg md:text-xl border-t pt-2">
          <span>VAT Payable:</span>
          <span>{formatAZN(vatPayable)}</span>
        </div>
      </div>
    </div>
  );
}

export default VatDeclaration;