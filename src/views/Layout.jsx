import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/SidebarComponent";

export default function Layout() {

    return (
        <div className="m-0 p-0">
            <SidebarComponent />
            <main className="flex w-full">
                <Outlet />
            </main>
        </div>
    );
}
