import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/main";
import Login from "../pages/login";
import Register from "../pages/register";
import ResetPassword from "../pages/resetpassword";
import PrivateRoute from "../provider/privateRoot";
import Dashboard from "../pages/dashboard";
import BankAccounts from "../pages/bankaccounts";
import Payments from "../pages/payments";
import Transactions from "../pages/transactions";
import RevenueExpenses from "../pages/revenueexpenses";
import Invoices from "../pages/Invoices";
import ReportsAnalytics from "../pages/reportsanalytics";
import Customers from "../pages/customers/INDEX.JSX";
import Calendar from "../pages/calendar";
import Settings from "../pages/settings";
import AiInsights from "../pages/ai";
import ResetPasswordVerify from "../pages/resetpasswordverify";

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
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/bank-accounts",
        element: <BankAccounts />,
      },
      {
        path: "/payments",
        element: <Payments />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/revenue-expenses",
        element: <RevenueExpenses />,
      },
      {
        path: "/invoices",
        element: <Invoices />,
      },
      {
        path: "/reports-analytics",
        element: <ReportsAnalytics />,
      },
      {
        path: "/ai-insights",
        element: <AiInsights />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
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
