import { useState } from "react";
import ControlPanel from "./pages/ControlPanel";
import TabSelector from "../../components/TabSelector/TabSelector";
import Suppliers from "./pages/Suppliers";
import Sales from "./pages/Sales";
import Agreements from "./pages/Agreements";
import Payments from "./pages/Payments";
import Analytics from "./pages/Analytics";

function Supplier() {
    const [currentTab, setCurrentTab] = useState(1);

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

    const tabs = ["Control Panel", "Suppliers", "Sales", "Agreement ", "Payments", "Analytics"];

    return (
        <div className="sm:ml-16 mt-20 sm:mt-0 py-8 px-6 flex flex-col gap-6">
            <TabSelector currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={tabs} />
            <div>{renderTabContent()}</div>
        </div>
    );
}

export default Supplier;
