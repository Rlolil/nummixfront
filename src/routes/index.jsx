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
