import { Outlet } from "react-router-dom";
import { useMenu } from "../../utils/MenuUtil";
import Footer from "./FooterComponent";
import SidebarComponent from "./SidebarComponent";

export default function LayoutComponent() {
    const menuItems = useMenu();

    return (
        <>
            <header className="static w-full">
                <SidebarComponent menuItems={menuItems} />
            </header>
            <main className="flex flex-column w-full">
                <Outlet />
            </main>
            <footer className="
                static bottom-0 mb-4 mt-4 w-full 
                flex align-items-center justify-content-center">
                <Footer />
            </footer>
        </>
    );
}