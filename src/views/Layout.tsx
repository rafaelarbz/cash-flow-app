import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div className="m-0 p-0">
            <Header/>
                <main className="w-full">
                    <Outlet />
                </main>
            <Footer/>
        </div>
    );
};

export default Layout;