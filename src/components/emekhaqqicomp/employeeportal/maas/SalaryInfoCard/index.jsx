
const SalaryInfoCard = ({ title, amount, iconBg, textColor }) => {
  return (
    <div className="bg-[#FFFFFF] border border-[#33415C] rounded-xl p-6 flex justify-between items-center shadow-sm">
      <div>
        <p className="text-sm text-[#5C677D]">{title}</p>
        <p className={`text-2xl mt-1 text-[#001233]`}>{amount}</p>
      </div>
      <div className={`p-3 rounded-lg ${iconBg} ${textColor}`}>
        <svg xmlns="http://www.w3.org/2000/svg" 
             className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
          <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
        </svg>
      </div>
    </div>
  );
};

export default SalaryInfoCard;
