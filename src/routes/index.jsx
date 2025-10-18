import { createBrowserRouter, Navigate } from "react-router";
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
import HRDashboard from "../components/emekhaqqicomp/dashboard";
import Employees from "../components/emekhaqqicomp/employees";
import PayrollManagement from "../components/emekhaqqicomp/payroll";
import Leave from "../components/emekhaqqicomp/leave";
import Attendance from "../components/emekhaqqicomp/attendance/index,";
import Calendar from "../components/emekhaqqicomp/calendar";
import Reports from "../components/emekhaqqicomp/hesabatlar";
import Idarepaneli from "../components/maliyye/IdarePaneli/Idarepaneli";
import Kassa from "../components/maliyye/Kassa&Bank/Kassa";
import Odenisler from "../components/maliyye/Odenisler/Odenisler";
import Budce from "../components/maliyye/Budce/Budce";
import Analitika from "../components/maliyye/Analitika/Analitika";
import Dashboard from "../components/AI/Dashboard/Dashboard";
import MaliyyeAI from "../components/AI/MaliyyeAi/MaliyyeAI";
import Satış from "../components/AI/Satış/Satış";
import Hr from "../components/AI/HR/Hr";
import Vergi from "../components/AI/Vergi/Vergi";
import AnbarAi from "../components/AI/Anbar/AnbarAi";
import EmployeePortal from "../components/emekhaqqicomp/employeeportal";
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
            element: <Transactions />,
          },
          {
            path: "/muhasibat/financialreports",
            element: <FinancialReports />,
          },
          {
            path: "/muhasibat/taxreports",
            element: <TaxDashboard />,
          },
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
        children: [
          {
            index: true,
            element: <Navigate to="idare-paneli" replace />,
          },
          {
            path: "idare-paneli",
            element: <Idarepaneli />,
          },
          {
            path: "kassa-bank",
            element: <Kassa />,
          },
          {
            path: "odenisler",
            element: <Odenisler />,
          },
          {
            path: "budce-planlamasi",
            element: <Budce />,
          },
          {
            path: "analitika",
            element: <Analitika />,
          },
        ],
      },
      {
        path: "/esasvesaitler",
        element: <EsasVesaitler />,
      },
      {
        path: "/emekhaqqi",
        element: <EmekHaqqi />,
        children: [
          {
            path: "/emekhaqqi/dashboard",
            element: <HRDashboard />,
          },
          {
            path: "/emekhaqqi/employees",
            element: <Employees />,
          },
          {
            path: "/emekhaqqi/payroll",
            element: <PayrollManagement />,
          },
          {
            path: "/emekhaqqi/leave",
            element: <Leave />,
          },
          {
            path: "/emekhaqqi/attendance",
            element: <Attendance />,
          },
          {
            path: "/emekhaqqi/calendar",
            element: <Calendar />,
          },
          {
            path: "/emekhaqqi/reports",
            element: <Reports />,
          },
          {
            path: "/emekhaqqi/employeeportal",
            element: <EmployeePortal />,
          }
        ],
      },
      {
        path: "/anbar",
        element: <Anbar />,
      },
      {
        path: "/ai",
        element: <Ai />,
        children: [
          {
            index: true,
            element: <Navigate to="dashboard" replace />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "maliyyeAi",
            element: <MaliyyeAI />,
          },
          {
            path: "satis",
            element: <Satış />,
          },
          {
            path: "anbar",
            element: <AnbarAi />,
          },
          {
            path: "hr",
            element: <Hr />,
          },
          {
            path: "vergi",
            element: <Vergi />,
          },
        ],
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
