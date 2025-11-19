import { FaClock } from 'react-icons/fa';

const StatCard = ({ title, value, subtitle, bgColor, textColor }) => {
  return (
    <div className="bg-[#FFFFFF] border border-[#33415C] rounded-xl p-6 flex flex-col justify-between text-[#001233]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[#7D8597]">{title}</p>
          <p className="text-[#023E7D] mt-1 text-lg font-semibold">{value}</p>
          <p className="text-xs text-[#7D8597] mt-1">{subtitle}</p>
        </div>
        <div className={`p-3 rounded-lg ${bgColor} ${textColor}`}>
          <FaClock className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
