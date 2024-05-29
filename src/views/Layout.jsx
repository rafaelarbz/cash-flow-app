import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/general/SidebarComponent";
import { useMenu } from "../utils/MenuUtil";

export default function Layout() {
    const menuItems = useMenu();

    return (
        <div className="flex align-content-center">
            <SidebarComponent menuItems={menuItems} />
            <main className="w-full mt-5">
                <Outlet />
            </main>
        </div>
    );
}
