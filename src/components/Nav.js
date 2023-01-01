import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import '.././styles/Nav.css';

const Nav = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const menuToggle = () => {
    openMenu === true ? setOpenMenu(false) : setOpenMenu(true);
  }

  const menuStyles = {
    Active: {
      height: '25rem',
      borderBottom: '2px solid #104ca0'
    },
    Inactive: {
      height: '0',
      borderBottom: 'none'
    }
  }

  return (
    <nav>
      <section className="mobile">
        <div className="navbar">
          <div className="logo-container">
            <Link to={'/'}>
              <img
                className="revive-logo"
                id='home'
                alt="REVIVE Ltd"
                src={require("../images/logos/revive_logo.png")}
                />
            </Link>
          </div>
            {openMenu ? <button className="menu-closebtn" onClick={menuToggle}>
              <span className="material-symbols-outlined menu-icon">close</span></button> :
            <button className="menu-openbtn" onClick={menuToggle}>
              <span className="material-symbols-outlined menu-icon">menu</span></button>
            }
        </div>
        <div className="menu-container">
          <div className="mobile-menu" style={openMenu ? menuStyles.Active : menuStyles.Inactive}>
            <ul className="nav-links">
              <Link to={'/'}>
                <li onClick={menuToggle}><span className="material-symbols-outlined link-icon">home</span>HOME</li>
              </Link>
              <Link to={'/Services'}>
                <li onClick={menuToggle}><span className="material-symbols-outlined link-icon">home_repair_service</span>SERVICES</li>
              </Link>
              <Link to={'/Gallery'}>
                <li onClick={menuToggle}><span className="material-symbols-outlined link-icon">gallery_thumbnail</span>GALLERY</li>
              </Link>
              <li className="nav-links-contact">
                <span className="material-symbols-outlined link-icon">mail</span>
                <a href="mailto:info@reviverepairs.com">info@reviverepairs.com</a>
              </li>
              <li className="nav-links-contact">
                <a href="tel:+447917442218">CALL 07917 442218</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="desktop">
        <div className="nav-contacts">
          <div className="contact-details">
            <span className="material-symbols-outlined contact-logo">call</span>
            <a className="contact" href="tel:+447917442218">07917 442218</a>
            <span className="material-symbols-outlined contact-logo">mail</span>
            <a className="mailtoui contact" href="mailto:info@reviverepairs.com">info@reviverepairs.com</a>
          </div>
        </div>
        <div className="navbar">
          <div className="logo-container">
            <Link to={'/'}>
              <img
                className="revive-logo"
                id='home'
                alt="REVIVE Ltd"
                src={require("../images/logos/revive_logo.png")}
                />
            </Link>
          </div>
          <ul className="nav-links">
            <NavLink className={({isActive}) => isActive ? "active-link": "non-active-link" } to={'/'}>
              <li>HOME</li>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link": "non-active-link" } to={'/Services'}>
              <li>SERVICES</li>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link": "non-active-link" } to={'/Gallery'}>
              <li>GALLERY</li>
            </NavLink>
          </ul>
        </div>
      </section>
    </nav>
  )
};

export default Nav;