import { useState } from "react";
import ControlPanel from "./pages/ControlPanel";
import TabSelector from "./components/TabSelector";
import Customers from "./pages/Customers";

function SalesCustomers() {
    const [activeTab, setActiveTab] = useState("controlPanel");

    const renderTabContent = () => {
        switch (activeTab) {
            case "controlPanel":
                return <ControlPanel />;
            case "customers":
                return <Customers />;
            default:
                return null;
        }
    };

    return (
        <div className="sm:ml-16 mt-20 sm:mt-0 py-8 px-6 flex flex-col gap-6">
            <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
            <div>{renderTabContent()}</div>
        </div>
    );
}

export default SalesCustomers;
