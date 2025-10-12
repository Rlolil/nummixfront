import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/main";
import Login from "../pages/login";
import Register from "../pages/register";
import ResetPassword from "../pages/resetpassword";
import PrivateRoute from "../provider/privateRoot";
import ResetPasswordVerify from "../pages/resetpasswordverify";
import Muhasibat from "../pages/muhasibat";
import Supplier from "../pages/supllier";
import Settings from "../pages/settings";
import SalesCustomers from "../pages/salescustomers";
import Maliyye from "../pages/maliyye";
import EsasVesaitler from "../pages/esasvesaitler";
import EmekHaqqi from "../pages/emekhaqqi";
import Anbar from "../pages/anbar";
import Ai from "../pages/ai";
import DashboardCards from "../components/muhasibatcomp/dashboard";
import Ledger from "../components/muhasibatcomp/generalledger";
import Transactions from "../components/muhasibatcomp/trasntaction";
import FinancialReports from "../components/muhasibatcomp/financialreports";
import TaxDashboard from "../components/muhasibatcomp/taxreports";
export const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/muhasibat",
        element: <Muhasibat />,
        children: [
          {
            path: "/muhasibat/dashboard",
            element: <DashboardCards />,
          },
          {
            path: "/muhasibat/generalledger",
            element: <Ledger />,
          },
          {
            path: "/muhasibat/transactions",
            element:  <Transactions />,
          },
          {
            path: "/muhasibat/financialreports",
            element: <FinancialReports />,
          },
          {
            path: "/muhasibat/taxreports",
            element: <TaxDashboard />,
          }
        ],
      },
      {
        path: "/supplier",
        element: <Supplier />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/salescustomers",
        element: <SalesCustomers />,
      },
      {
        path: "/maliyye",
        element: <Maliyye />,
      },
      {
        path: "/esasvesaitler",
        element: <EsasVesaitler />,
      },
      {
        path: "/emekhaqqi",
        element: <EmekHaqqi />,
      },
      {
        path: "/anbar",
        element: <Anbar />,
      },
      {
        path: "/ai",
        element: <Ai />,
      }
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "reset-password-verify",
    element: <ResetPasswordVerify />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
