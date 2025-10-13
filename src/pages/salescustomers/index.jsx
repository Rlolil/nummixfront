import { useState } from "react";
import ControlPanel from "./pages/ControlPanel";
import TabSelector from "./components/TabSelector";
import Customers from "./pages/Customers";
import Sales from "./pages/Sales";
import Cart from "./pages/Cart";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";

function SalesCustomers() {
    const [currentTab, setCurrentTab] = useState(1);

    const renderTabContent = () => {
        switch (currentTab) {
            case 1:
                return <ControlPanel />;
            case 2:
                return <Customers />;
            case 3:
                return <Sales />;
            case 4:
                return <Cart />;
            case 5:
                return <Transactions />;
            case 6:
                return <Reports />;
            default:
                return null;
        }
    };

    return (
        <div className="sm:ml-16 mt-20 sm:mt-0 py-8 px-6 flex flex-col gap-6">
            <TabSelector currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <div>{renderTabContent()}</div>
        </div>
    );
}

export default SalesCustomers;
