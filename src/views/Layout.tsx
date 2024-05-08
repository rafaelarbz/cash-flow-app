import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

interface Layout {
    children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
};

export default Layout;