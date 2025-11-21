import { useState } from "react";
import ControlPanel from "./pages/ControlPanel";
import TabSelector from "../../components/TabSelector/TabSelector";
import Suppliers from "./pages/Suppliers";
import Sales from "./pages/Sales";
import Agreements from "./pages/Agreements";
import Payments from "./pages/Payments";
import Analytics from "./pages/Analytics";
import { useTranslation } from "react-i18next";

function Supplier() {
    const [currentTab, setCurrentTab] = useState(1);
    const { t } = useTranslation();

    const renderTabContent = () => {
        switch (currentTab) {
            case 1:
                return <ControlPanel />;
            case 2:
                return <Suppliers />;
            case 3:
                return <Sales />;
            case 4:
                return <Agreements />;
            case 5:
                return <Payments />;
            case 6:
                return <Analytics />;
            default:
                return null;
        }
    };

        const tabs = [
            t("pages.supplier.tabs.controlPanel"),
            t("pages.supplier.tabs.suppliers"),
            t("pages.supplier.tabs.sales"),
            t("pages.supplier.tabs.agreements"),
            t("pages.supplier.tabs.payments"),
            t("pages.supplier.tabs.analytics")
        ];

    return (
        <div className="sm:ml-[100px] sm:mt-[20px] max-w-[1320px] mt-[100px] ml-0 px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-6">
            <TabSelector currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={tabs} />
            <div>{renderTabContent()}</div>
        </div>
    );
}

export default Supplier;
