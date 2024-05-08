import React from "react";
import { Menubar } from "primereact/menubar";

const Header: React.FC = () => {
    const menuItems = [
      {
        label: 'Início',
        icon: 'pi pi-home'
      },
      {
          label: 'Novo Lançamento',
          icon: 'pi pi-dollar'
      }
    ];

    return (
        <header className="flex w-full">
          <Menubar model={menuItems} />
        </header>
    );
};

export default Header;

