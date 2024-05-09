import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/general/SidebarComponent";

export default function Layout() {

    return (
        <>
            <SidebarComponent />
            <main className="w-full">
                <Outlet />
            </main>
        </>
    );
}
