import React from "react";

const Footer: React.FC = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex w-full">
          <p>© {currentYear} Cash Flow</p>
        </footer>
    );
};

export default Footer;