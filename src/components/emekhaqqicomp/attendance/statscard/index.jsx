import { FaClock } from 'react-icons/fa';

const StatCard = ({ title, value, subtitle, bgColor, textColor }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-gray-900 mt-1 text-lg font-semibold">{value}</p>
          <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
        </div>
        <div className={`p-3 rounded-lg ${bgColor} ${textColor}`}>
          <FaClock className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
