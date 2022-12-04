import React, { useState } from 'react';
import '.././styles/Nav.css';

function Nav () {

  const [openMenu, setOpenMenu] = useState(false);

  function toggle () {
    openMenu === true ? setOpenMenu(false) : setOpenMenu(true);
  }

  return (
    <nav>
      <section className="mobile">
        <div className="nav-contacts">
          <p className="address">Placeholder</p>
        </div>
        <div className="navbar">
          <div className="logo-container">
            <img className="revive-logo" alt="REVIVE Ltd" src={require("../images/logos/revive_logo.png")}/>
          </div>
            {openMenu ? <button className="menu-closebtn" onClick={toggle}>×</button> :
            <button className="menu-openbtn" onClick={toggle}>☰</button>
            }
        </div>
        <div className="menu-container">
          <div className="mobile-menu" style={ {height: openMenu ? '20rem' : '0'} }>
            <ul className="nav-links">
              <li>HOME</li>
              <li>SERVICES</li>
              <li>GALLERY</li>
              <li>CONTACT US</li>
              <li>Tel: 07917 442218</li>
              <li>Email: info@reviverepairs.com</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="desktop">
        <div className="nav-contacts">
          <p className="address">Placeholder</p>
          <div className="contact-details">
            <span className="material-symbols-outlined contact-logo">call</span><p>07917 442218</p>
            <span className="material-symbols-outlined contact-logo">mail</span><p>info@reviverepairs.com</p>
          </div>
        </div>
        <div className="navbar">
          <div className="logo-container">
            <img className="revive-logo" alt="REVIVE Ltd" src={require("../images/logos/revive_logo.png")}/>
          </div>
          <ul className="nav-links">
            <li>HOME</li>
            <li>SERVICES</li>
            <li>GALLERY</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </section>
    </nav>
  )
};

export default Nav;