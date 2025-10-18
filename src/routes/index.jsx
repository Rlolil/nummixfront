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
import AnbarEsasSehife from "../components/anbarcompanents/anbaresassehife";
import Məhsullar from "../components/anbarcompanents/Məhsullar";
import Anbaremeliyyat from "../components/anbarcompanents/anbaremeliyyatlari/esasemeliyyat";
import Anbardn from "../components/anbarcompanents/anbaremeliyyatlari/dn";
import Anbargrn from "../components/anbarcompanents/anbaremeliyyatlari/grn";
import AnbarTransfer from "../components/anbarcompanents/anbaremeliyyatlari/transfer";
import AnbarHistory from "../components/anbarcompanents/anbaremeliyyatlari/tarixçə";
import Inventar from "../components/anbarcompanents/inventar/inventaresas";
import CariQaliqlar from "../components/anbarcompanents/inventar/cariqalıq";
import InventarSayimi from "../components/anbarcompanents/inventar/Inventarsayimi";
import HesabatAnalitika from "../components/anbarcompanents/hesabatlar";

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
        children: [
          {
            path: "/anbar/dashboard",
            element: <AnbarEsasSehife />
          },
          {
            path: "/anbar/products",
            element: <Məhsullar />
          },
          {
            path: "/anbar/warehouseoperations",
            element: <Anbaremeliyyat />,
            children: [
              { path: "grn", element: <Anbargrn /> },
              { path: "dn", element: <Anbardn /> },
              { path: "transfer", element: <AnbarTransfer /> },
              { path: "history", element: <AnbarHistory /> },

            ]
          },
          {
            path: "/anbar/inventory", element: <Inventar />,
            children: [
              { path: "currentbalances", element: <CariQaliqlar /> },
              { path: "inventorycount", element: <InventarSayimi /> },
            ]
          },
          { path: "/anbar/reports", element: <HesabatAnalitika /> }
        ]
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
