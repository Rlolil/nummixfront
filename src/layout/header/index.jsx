import "../../utils/i18n/i18n.js";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher";
function Header() {
  const { t, i18n } = useTranslation();
  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="p-[19px] w-full border-b sm:block hidden bg-white border-gray-200 pr-[80px]">
      <div className="flex items-center justify-between">
        <div className="relative ml-[100px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            onChange={(e) => console.log(e.target.value)}
            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-80 pl-10"
            placeholder={t("search_placeholder", { ns: 'translation' })}
          />
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher compact />
          <div>
            <button className="relative hover:bg-gray-100 p-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bell h-5 w-5"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 text-xs"></span>
            </button>
          </div>
          <div>
            <button className="relative hover:bg-gray-100 p-3 font-bold text-black rounded-full">
              <span className="flex size-full items-center justify-center">
                {t("header.initials", { ns: 'translation' })}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;