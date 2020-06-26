import React from 'react';

import { Header } from './styles/menu-styled';

const Menu = () => {
  return (
    <div>
       {/* START HEADER */}
     <Header>
      {/* START LOGO CONTAINER */}
       <section className="logo-container">
        <h1 class="logo">SysEstudo</h1>
       </section>
      {/* END LOGO CONTAINER */}

      {/* START MENU MAIN*/}
       <nav className="menu-main">
        {/* START MENU LIST */}
         <ul className="menu-list">

           {/* START MENU ITEM */}
           <li className="menu-item">
             <a href="" className="menu-link">Home</a>
           </li>

         </ul>
        {/* END MENU LIST */}
       </nav>
      {/* END MENU MAIN*/}

     </Header>
    {/* END HEADER */}
    </div>
  );
}

export default Menu;
