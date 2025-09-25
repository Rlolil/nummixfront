import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/main";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/child',
                element: <div>Child Route</div>
            }
        ]
    },
]);