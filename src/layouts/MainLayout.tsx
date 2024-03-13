import { Outlet } from "react-router-dom"
import { LocaleProvider } from "../providers/LocaleProvider"

export const MainLayout = () => {
    return (
        <LocaleProvider>
            <Outlet />
        </LocaleProvider>
    )
}
