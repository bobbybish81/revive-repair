import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '.././styles/Nav.css';

function Nav () {

  const [openMenu, setOpenMenu] = useState(false);

  function toggle () {
    openMenu === true ? setOpenMenu(false) : setOpenMenu(true);
  }

  return (
    <nav>
      <section className="mobile">
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
              <Link to={'/'}>
                <li>HOME</li>
              </Link>
              <Link to={'/Services'}>
                <li>SERVICES</li>
              </Link>
              <Link to={'/Gallery'}>
                <li>GALLERY</li>
              </Link>
              <li className="nav-links-contact">EMAIL info@reviverepairs.com</li>
              <li className="nav-links-contact">CALL 07917 442218</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="desktop">
        <div className="nav-contacts">
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
            <Link to={'/'}>
              <li>HOME</li>
            </Link>
            <Link to={'/Services'}>
              <li>SERVICES</li>
            </Link>
            <Link to={'/Gallery'}>
              <li>GALLERY</li>
            </Link>
          </ul>
        </div>
      </section>
    </nav>
  )
};

export default Nav;