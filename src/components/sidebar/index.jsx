import image from "../../assets/image/logo.png";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

function SidebarComp() {
    const { t } = useTranslation();
    return (
        <div className="top-[1px] hidden md:block max-w-72 md:fixed left-0 w-20 hover:w-72 transition-all duration-400 h-screen group bg-white text-black z-50">
            <div className="flex items-center gap-[20px] p-4">
                <img src={image} alt="Logo" className="max-w-12 h-auto" />
                <h2 className="text-md group-hover:text-xl font-bold group-hover:opacity-100 opacity-0 transition-opacity duration-200">
                    Nummix
                </h2>
            </div>
            <hr className="border-gray-200" />
            <div className="flex flex-col p-4 gap-[10px] mb-[50px] text-black font-medium">
                <div>
                    <Link to="/muhasibat/dashboard">
                        <button className="flex items-center rounded-md text-md font-medium transition-all outline-none hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
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
                                className="min-h-6 min-w-6 h-5 w-5"
                            >
                                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                            </svg>
                            <span className="opacity-0 group-hover:opacity-100 invisible group-hover:visible text-nowrap transition-opacity duration-200 leading-none">
                                Muhasibat
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/maliyye">
                        <button className="flex items-center rounded-md text-md font-medium transition-all hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
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
                                className="min-h-6 min-w-6 h-5 w-5"
                            >
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                <path d="M10 6h4"></path>
                                <path d="M10 10h4"></path>
                                <path d="M10 14h4"></path>
                                <path d="M10 18h4"></path>
                            </svg>
                            <span className="opacity-0 group-hover:opacity-100 text-nowrap invisible group-hover:visible transition-opacity duration-200 leading-none">
                                Maliyye idarəetmə
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/salescustomers">
                        <button className="flex items-center rounded-md text-md font-medium transition-all hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
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
                                className="min-h-6 min-w-6 h-5 w-5"
                            >
                                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                <line x1="2" x2="22" y1="10" y2="10"></line>
                            </svg>
                            <span className="opacity-0 group-hover:opacity-100 text-nowrap invisible group-hover:visible transition-opacity duration-200 leading-none">
                                Sales & Customers
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/supplier">
                        <button className="flex items-center rounded-md text-md font-medium transition-all hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
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
                                className="min-h-6 min-w-6 h-5 w-5"
                            >
                                <path d="m21 16-4 4-4-4"></path>
                                <path d="M17 20V4"></path>
                                <path d="m3 8 4-4 4 4"></path>
                                <path d="M7 4v16"></path>
                            </svg>
                            <span className="opacity-0 group-hover:opacity-100 text-nowrap invisible group-hover:visible transition-opacity duration-200 leading-none">
                                Satinalma & Təchizatçılar
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/anbar">
                        <button className="flex items-center rounded-md text-md font-medium transition-all hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
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
                                className="min-h-6 min-w-6 h-5 w-5"
                            >
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                <polyline points="16 7 22 7 22 13"></polyline>
                            </svg>
                            <span className="opacity-0 group-hover:opacity-100 text-nowrap invisible group-hover:visible transition-opacity duration-200 leading-none">
                                Anbar
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/esasvesaitler">
                        <button className="flex items-center rounded-md text-md font-medium transition-all hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
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
                                className="min-h-6 min-w-6 h-5 w-5"
                            >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                            </svg>
                            <span className="opacity-0 group-hover:opacity-100 text-nowrap invisible group-hover:visible transition-opacity duration-200 leading-none">
                                Əsas vəsaitlər
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/emekhaqqi/dashboard">
                        <button className="flex items-center rounded-md text-md font-medium transition-all hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
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
                                className="min-h-6 min-w-6 h-5 w-5"
                            >
                                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                <path d="M18 17V9"></path>
                                <path d="M13 17V5"></path>
                                <path d="M8 17v-3"></path>
                            </svg>
                            <span className="opacity-0 group-hover:opacity-100 text-ellipsis invisible group-hover:visible max-w-24 text-nowrap transition-opacity duration-200 leading-none">
                                Hr & Əmək haqqı
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/ai">
                        <button className="flex items-center rounded-md text-md font-medium transition-all hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
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
                                className="lucide lucide-brain min-h-6 min-w-6 h-5 w-5"
                            >
                                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                            </svg>
                            <span className="opacity-0 group-hover:opacity-100 text-ellipsis invisible group-hover:visible max-w-24 text-nowrap transition-opacity duration-200 leading-none">
                                Süni intellekt
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/settings">
                        <button className="block group-hover:flex items-center rounded-md text-md font-medium transition-all hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
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
                                className="min-h-6 min-w-6 h-5 w-5"
                            >
                                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            <span className="opacity-0 group-hover:opacity-100 text-nowrap invisible group-hover:visible transition-opacity duration-200 leading-none">
                                {t("settings")}
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <hr className="border-gray-200" />
            <div className="text-gray-500 p-4 absolute bottom-0 w-full">
                <Link to="/login">
                    <button className="flex items-center rounded-md text-md font-medium transition-all hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
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
                            className="min-h-6 min-w-6 h-5 w-5"
                        >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" x2="9" y1="12" y2="12"></line>
                        </svg>
                        <span className="opacity-0 group-hover:opacity-100 text-nowrap invisible group-hover:visible transition-opacity duration-200 leading-none">
                            {t("sign_out")}
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default SidebarComp;
