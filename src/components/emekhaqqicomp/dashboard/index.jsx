import { FiUsers } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import ProgressBar from "./progressbara";
import { LuCircleAlert } from "react-icons/lu";
import { useTranslation } from "react-i18next";

function HrDashboard() {
  const { t } = useTranslation();
  return (
    <div className="my-8 space-y-6">
      <div>
        <div className="text-2xl font-bold">{t('pages.hr.dashboard.headerTitle', { defaultValue: 'HR Dashboard' })}</div>
        <p className="text-gray-600">{t('pages.hr.dashboard.headerSubtitle', { defaultValue: 'Overview of HR & Payroll system' })}</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  items-center gap-4">
        <div className="border flex items-center px-4 py-6 rounded-xl justify-between border-gray-200  shadow-sm">
          <div>
            <p className="text-gray-600">{t('pages.hr.dashboard.cards.totalEmployees', { defaultValue: 'Total Employees' })}</p>
            <p>247</p>
            <p className="text-gray-600">{t('pages.hr.dashboard.cards.changeThisMonth', { change: '+12', defaultValue: '+12 this month' })}</p>
          </div>
          <div className="bg-blue-50 text-blue-600 p-3 rounded-lg">
            <FiUsers className="w-6 h-6" />
          </div>
        </div>
        <div className="border flex items-center px-4 py-6 rounded-xl justify-between border-gray-200  shadow-sm">
          <div>
            <p className="text-gray-600">{t('pages.hr.dashboard.cards.monthlyPayroll', { defaultValue: 'Monthly Payroll' })}</p>
            <p>₼485,320</p>
            <p className="text-gray-600">{t('pages.hr.dashboard.cards.vsPrevMonth', { change: '+5.2%', defaultValue: '{{change}} vs previous month' })}</p>
          </div>
          <div className="bg-green-50 text-green-600 p-3 rounded-lg">
            <FiCreditCard className="w-6 h-6" />
          </div>
        </div>
        <div className="border flex items-center px-4 py-6 rounded-xl justify-between border-gray-200  shadow-sm">
          <div>
            <p className="text-gray-600">{t('pages.hr.dashboard.cards.onLeave', { defaultValue: 'On Leave' })}</p>
            <p>18</p>
            <p className="text-gray-600">{t('pages.hr.dashboard.cards.ofEmployees', { percent: '7.3%', defaultValue: '{{percent}} of employees' })}</p>
          </div>
          <div className="bg-purple-50 text-purple-600 p-3 rounded-lg">
            <FiCalendar className="w-6 h-6" />
          </div>
        </div>
        <div className="border flex items-center px-4 py-6 rounded-xl justify-between border-gray-200  shadow-sm">
          <div>
            <p className="text-gray-600">{t('pages.hr.dashboard.cards.attendance', { defaultValue: 'Attendance' })}</p>
            <p>96.5%</p>
            <p className="text-gray-600">{t('pages.hr.dashboard.cards.thisWeek', { defaultValue: 'This Week' })}</p>
          </div>
          <div className="bg-orange-50 text-orange-600 p-3 rounded-lg">
            <FiTrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="border p-4 rounded-xl border-gray-200  shadow-sm">
          <h2>{t('pages.hr.dashboard.sections.recentPayments', { defaultValue: 'Recent Payments' })}</h2>
          <div className="space-y-4 text-center mt-4 mb-[80px]">
            <div className="bg-gray-50 flex items-center justify-between p-2 rounded-xl">
              <div className="flex items-center gap-2">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-lg">
                  <FiCreditCard className="w-6 h-6" />
                </div>
                <div>
                  <p className="">{t('pages.hr.dashboard.payments.salaryPayment', { defaultValue: 'Salary payment' })}</p>
                  <p className="text-gray-600 text-[14px] text-left">
                    2025-10-15
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[20px]">₼485,320</p>
              </div>
            </div>
            <div className="bg-gray-50 flex items-center justify-between p-2 rounded-xl">
              <div className="flex items-center gap-2">
                <div className="bg-green-50 text-green-600 p-3 rounded-lg">
                  <FiCreditCard className="w-6 h-6" />
                </div>
                <div>
                  <p className="">{t('pages.hr.dashboard.payments.socialInsurance', { defaultValue: 'Social insurance (SSPF)' })}</p>
                  <p className="text-gray-600 text-[14px] text-left">
                    2025-10-20
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[20px]">₼48,532</p>
              </div>
            </div>
            <div className="bg-gray-50 flex items-center justify-between p-2 rounded-xl">
              <div className="flex items-center gap-2">
                <div className="bg-red-50 text-red-600 p-3 rounded-lg">
                  <FiCreditCard className="w-6 h-6" />
                </div>
                <div>
                  <p className="">{t('pages.hr.dashboard.payments.incomeTax', { defaultValue: 'Income tax' })}</p>
                  <p className="text-gray-600 text-[14px] text-left">
                    2025-10-20
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[20px]">₼67,945</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border p-4 rounded-xl border-gray-200  shadow-sm">
          <h2>{t('pages.hr.dashboard.sections.upcomingPayments', { defaultValue: 'Upcoming Payments' })}</h2>
          <div className="space-y-4 text-center mt-4 mb-[80px]">
            <div className="bg-gray-50 flex items-start  w-full justify-start p-2 gap-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <p className="text-sm">Ə</p>
              </div>
              <div className="text-left">
                <p>Əli Məmmədov</p>
                <p className="text-gray-600">{t('pages.hr.dashboard.roles.developer', { defaultValue: 'Developer' })}</p>
                <div className="flex  items-center gap-2">
                  <p className="text-[14px]  text-gray-600">{t('pages.hr.departments.it', { defaultValue: 'IT Department' })}</p>
                  <p className="text-gray-600">2025-10-01</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 flex items-start  w-full justify-start p-2 gap-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <p className="text-sm">Ə</p>
              </div>
              <div className="text-left">
                <p>Əli Məmmədov</p>
                <p className="text-gray-600">{t('pages.hr.dashboard.roles.developer', { defaultValue: 'Developer' })}</p>
                <div className="flex  items-center gap-2">
                  <p className="text-[14px]  text-gray-600">{t('pages.hr.departments.it', { defaultValue: 'IT Department' })}</p>
                  <p className="text-gray-600">2025-10-01</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 flex items-start  w-full justify-start p-2 gap-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <p className="text-sm">Ə</p>
              </div>
              <div className="text-left">
                <p>Əli Məmmədov</p>
                <p className="text-gray-600">{t('pages.hr.dashboard.roles.developer', { defaultValue: 'Developer' })}</p>
                <div className="flex  items-center gap-2">
                  <p className="text-[14px]  text-gray-600">{t('pages.hr.departments.it', { defaultValue: 'IT Department' })}</p>
                  <p className="text-gray-600">2025-10-01</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-200 p-4 shadow-sm rounded-xl">
        <h2 className="font-medium">{t('pages.hr.dashboard.sections.departmentStats', { defaultValue: 'Department Statistics' })}</h2>
        <div className="mt-4 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p>{t('pages.hr.departments.it', { defaultValue: 'IT Department' })}</p>
                <p className="text-gray-600">{t('pages.hr.common.employeeCount', { count: 45, defaultValue: '{{count}} employees' })}</p>
              </div>
              <div>
                <p>₼95,200</p>
                <p className="text-gray-600">{t('pages.hr.dashboard.budgetUsage', { percent: '85%', defaultValue: '{{percent}} of budget' })}</p>
              </div>
            </div>
            <ProgressBar />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p>{t('pages.hr.departments.it', { defaultValue: 'IT Department' })}</p>
                <p className="text-gray-600">{t('pages.hr.common.employeeCount', { count: 45, defaultValue: '{{count}} employees' })}</p>
              </div>
              <div>
                <p>₼95,200</p>
                <p className="text-gray-600">{t('pages.hr.dashboard.budgetUsage', { percent: '85%', defaultValue: '{{percent}} of budget' })}</p>
              </div>
            </div>
            <ProgressBar />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p>{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</p>
                <p className="text-gray-600">{t('pages.hr.common.employeeCount', { count: 32, defaultValue: '{{count}} employees' })}</p>
              </div>
              <div>
                <p>₼78,500</p>
                <p className="text-gray-600">{t('pages.hr.dashboard.budgetUsage', { percent: '92%', defaultValue: '{{percent}} of budget' })}</p>
              </div>
            </div>
            <ProgressBar />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p>{t('pages.hr.departments.sales', { defaultValue: 'Sales' })}</p>
                <p className="text-gray-600">{t('pages.hr.common.employeeCount', { count: 67, defaultValue: '{{count}} employees' })}</p>
              </div>
              <div>
                <p>₼145,800</p>
                <p className="text-gray-600">{t('pages.hr.dashboard.budgetUsage', { percent: '78%', defaultValue: '{{percent}} of budget' })}</p>
              </div>
            </div>
            <ProgressBar />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p>{t('pages.hr.departments.marketing', { defaultValue: 'Marketing' })}</p>
                <p className="text-gray-600">{t('pages.hr.common.employeeCount', { count: 28, defaultValue: '{{count}} employees' })}</p>
              </div>
              <div>
                <p>₼52,300</p>
                <p className="text-gray-600">{t('pages.hr.dashboard.budgetUsage', { percent: '88%', defaultValue: '{{percent}} of budget' })}</p>
              </div>
            </div>
            <ProgressBar />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p>{t('pages.hr.departments.hr', { defaultValue: 'Human Resources' })}</p>
                <p className="text-gray-600">{t('pages.hr.common.employeeCount', { count: 15, defaultValue: '{{count}} employees' })}</p>
              </div>
              <div>
                <p>₼35,400</p>
                <p className="text-gray-600">{t('pages.hr.dashboard.budgetUsage', { percent: '95%', defaultValue: '{{percent}} of budget' })}</p>
              </div>
            </div>
            <ProgressBar />
          </div>
        </div>
      </div>
      <div className="border  border-red-200 p-4 rounded-xl bg-red-50">
        <div className="flex items-start gap-3">
          <LuCircleAlert className="w-5 h-5 text-orange-600 mt-0.5" />
          <div>
            <p className="text-gray-900">{t('pages.hr.dashboard.alert.title', { defaultValue: 'Action required' })}</p>
            <p className="text-sm text-gray-600 mt-1">
              {t('pages.hr.dashboard.alert.contractsExpiring', { count: 5, defaultValue: '{{count}} employees have contracts expiring this month. Please coordinate renewals with HR.' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HrDashboard;
