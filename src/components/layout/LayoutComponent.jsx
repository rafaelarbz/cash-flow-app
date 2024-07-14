import { Outlet } from "react-router-dom";
import { useMenu } from "../../utils/MenuUtil";
import Footer from "./FooterComponent";
import SidebarComponent from "./SidebarComponent";

export default function LayoutComponent() {
    const menuItems = useMenu();

    return (
        <div className="relative min-h-full">
            <header className="fixed top-0 left-0 right-0 z-1 bg-white shadow-1 p-1">
                <SidebarComponent menuItems={menuItems} />
            </header>
            <main className="pt-7 pb-7 left-0 right-0">
                <Outlet />
            </main>
            <footer className="fixed bottom-0 left-0 right-0 z-1 bg-white shadow-1 p-4 flex justify-content-center">
                <Footer />
            </footer>
        </div>
    );
}