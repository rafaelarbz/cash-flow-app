import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/ripple';

export default function SidebarComponent() {
  const [visible, setVisible] = useState(false);

  const customHeader = (
      <div className="flex align-items-center gap-2">
          <Avatar image="cash-flow.svg" shape="circle" />
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
          <li>
            <a 
              href="/"
              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline">
              <i className="pi pi-home mr-2"></i>
              <span>Home</span>
              <Ripple />
            </a>
          </li>
          <li>
            <a 
              href="/new"
              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline">
              <i className="pi pi-plus mr-2"></i>
              <span>New Release</span>
              <Ripple />
            </a>
          </li>
        </ul>
      </Sidebar>
    </>
  );
}