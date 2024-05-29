import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/ripple';

export default function SidebarComponent({menuItems = {}}) {
  const [visible, setVisible] = useState(false);

  const customHeader = (
      <div className="flex align-items-center gap-2">
          <Avatar image="images/cash-flow.svg" shape="circle" />
          <span>Cash Flow</span>
      </div>
  );

  return (
    <>
      <Button 
        className="fixed"
        severity="secondary"
        icon="pi pi-bars" 
        rounded text raised 
        onClick={() => setVisible(!visible)} 
      />
      
      <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)}>
        <ul className="list-none p-0 m-0 overflow-hidden">
          {menuItems && 
            Object.entries(menuItems).map(([key, item]) => (
              <li key={key}>
                <a 
                  href={item.href}
                  className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline">
                  <i className={`${item.icon} mr-2`}></i>
                  <span>{item.title}</span>
                  <Ripple />
                </a>
              </li>
            ))
          }
        </ul>
      </Sidebar>
    </>
  );
}