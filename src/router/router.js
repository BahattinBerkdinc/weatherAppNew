import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import EnterKey from "../pages/enter-key/EnterKey";
import MainPage from "../pages/MainPage";
import CityWeather from "../pages/city-weather/CityWeather";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute element={<MainLayout />} />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: "/:id/:lat/:lon",
                element: <CityWeather />
            }
        ]

    },
    {
        path: "/enter-key",
        element: <EnterKey />
    }
])


export default function AppRouter() {
    return <RouterProvider router={router} />
}