import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { MainLayout } from "./layouts/MainLayout"
import { DatePage } from "./pages/DatePage"
import "./index.css"
import "./i18n"

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/:fromDate",
                children: [
                    {
                        path: "",
                        element: <DatePage />,
                    },
                    {
                        path: ":toDate",
                        element: <DatePage />,
                    },
                ],
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
