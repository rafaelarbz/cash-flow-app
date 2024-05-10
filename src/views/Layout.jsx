import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/general/SidebarComponent";

export default function Layout() {

    return (
        <div className="flex align-content-center">
            <SidebarComponent />
            <main className="w-full mt-5">
                <Outlet />
            </main>
        </div>
    );
}
