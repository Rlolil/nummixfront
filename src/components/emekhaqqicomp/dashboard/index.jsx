import { FiUsers } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import ProgressBar from "./progressbara";
import { LuCircleAlert } from "react-icons/lu";

function HrDashboard() {
  return (
    <div className="my-8 space-y-6">
      <div>
        <div className="text-2xl font-bold">HrDashboard</div>
        <p className="text-gray-600">
          HR və Əməkhaqqı sisteminin ümumi görünüşü
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  items-center gap-4">
        <div className="border flex items-center px-4 py-6 rounded-xl justify-between border-gray-200  shadow-sm">
          <div>
            <p className="text-gray-600">Ümumi İşçi Sayı</p>
            <p>247</p>
            <p className="text-gray-600">+12 bu ay</p>
          </div>
          <div className="bg-blue-50 text-blue-600 p-3 rounded-lg">
            <FiUsers className="w-6 h-6" />
          </div>
        </div>
        <div className="border flex items-center px-4 py-6 rounded-xl justify-between border-gray-200  shadow-sm">
          <div>
            <p className="text-gray-600">Aylıq Maaş Fondu</p>
            <p>₼485,320</p>
            <p className="text-gray-600">+5.2% əvvəlki aya nisbətən</p>
          </div>
          <div className="bg-green-50 text-green-600 p-3 rounded-lg">
            <FiCreditCard className="w-6 h-6" />
          </div>
        </div>
        <div className="border flex items-center px-4 py-6 rounded-xl justify-between border-gray-200  shadow-sm">
          <div>
            <p className="text-gray-600">Məzuniyyətdə</p>
            <p>18</p>
            <p className="text-gray-600">7.3% işçilərdən</p>
          </div>
          <div className="bg-purple-50 text-purple-600 p-3 rounded-lg">
            <FiCalendar className="w-6 h-6" />
          </div>
        </div>
        <div className="border flex items-center px-4 py-6 rounded-xl justify-between border-gray-200  shadow-sm">
          <div>
            <p className="text-gray-600">Davamiyyət</p>
            <p>96.5%</p>
            <p className="text-gray-600">Bu Həftə</p>
          </div>
          <div className="bg-orange-50 text-orange-600 p-3 rounded-lg">
            <FiTrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="border p-4 rounded-xl border-gray-200  shadow-sm">
          <h2>Yeni İşçilər</h2>
          <div className="space-y-4 text-center mt-4 mb-[80px]">
            <div className="bg-gray-50 flex items-center justify-between p-2 rounded-xl">
              <div className="flex items-center gap-2">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-lg">
                  <FiCreditCard className="w-6 h-6" />
                </div>
                <div>
                  <p className="">Əməkhaqqı ödənişi</p>
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
                  <p className="">Sosial sığorta (DSMF)</p>
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
                  <p className="">Gəlir vergisi</p>
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
          <h2>Gələcək Ödənişlər</h2>
          <div className="space-y-4 text-center mt-4 mb-[80px]">
            <div className="bg-gray-50 flex items-start  w-full justify-start p-2 gap-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <p className="text-sm">Ə</p>
              </div>
              <div className="text-left">
                <p>Əli Məmmədov</p>
                <p className="text-gray-600">Proqramçı</p>
                <div className="flex  items-center gap-2">
                  <p className="text-[14px]  text-gray-600">IT Şöbəsi</p>
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
                <p className="text-gray-600">Proqramçı</p>
                <div className="flex  items-center gap-2">
                  <p className="text-[14px]  text-gray-600">IT Şöbəsi</p>
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
                <p className="text-gray-600">Proqramçı</p>
                <div className="flex  items-center gap-2">
                  <p className="text-[14px]  text-gray-600">IT Şöbəsi</p>
                  <p className="text-gray-600">2025-10-01</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-200 p-4 shadow-sm rounded-xl">
        <h2 className="font-medium">Şöbələr üzrə Statistika</h2>
        <div className="mt-4 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p>IT Şöbəsi</p>
                <p className="text-gray-600">45 işçi</p>
              </div>
              <div>
                <p>₼95,200</p>
                <p className="text-gray-600">85% büdcə</p>
              </div>
            </div>
            <ProgressBar />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p>IT Şöbəsi</p>
                <p className="text-gray-600">45 işçi</p>
              </div>
              <div>
                <p>₼95,200</p>
                <p className="text-gray-600">85% büdcə</p>
              </div>
            </div>
            <ProgressBar />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p>Maliyyə</p>
                <p className="text-gray-600">32 işçi</p>
              </div>
              <div>
                <p>₼78,500</p>
                <p className="text-gray-600">92% büdcə</p>
              </div>
            </div>
            <ProgressBar />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p>Satış</p>
                <p className="text-gray-600">67 işçi</p>
              </div>
              <div>
                <p>₼145,800</p>
                <p className="text-gray-600">78% büdcə</p>
              </div>
            </div>
            <ProgressBar />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p>Marketinq</p>
                <p className="text-gray-600">28 işçi</p>
              </div>
              <div>
                <p>₼52,300</p>
                <p className="text-gray-600">88% büdcə</p>
              </div>
            </div>
            <ProgressBar />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p>İnsan Resursları</p>
                <p className="text-gray-600">15 işçi</p>
              </div>
              <div>
                <p>₼35,400</p>
                <p className="text-gray-600">95% büdcə</p>
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
            <p className="text-gray-900">Diqqət tələb edir</p>
            <p className="text-sm text-gray-600 mt-1">
              5 işçinin əmək müqaviləsi bu ay bitir. Müqavilələrin yenilənməsi
              üçün İK şöbəsi ilə əlaqə saxlayın.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HrDashboard;
