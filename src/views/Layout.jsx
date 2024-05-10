import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/general/SidebarComponent";

export default function Layout() {

    return (
        <div className="container-fluid">
            <SidebarComponent />
            <main className="w-full">
                <Outlet />
            </main>
        </div>
    );
}
