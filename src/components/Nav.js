import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '.././styles/Nav.css';

// function Nav ({navToggle, homepage, service, gallery}) {
function Nav () {

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

  // const linkStyle = {
  //   Active: {
  //     borderBottom: '1px solid #f47323'
  //   },
  //   Inactive: {
  //     borderBottom: '1px solid #fff'
  //   }
  // }

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
              <li className="nav-links-contact"><span className="material-symbols-outlined link-icon">mail</span><a href="mailto:info@reviverepairs.com">info@reviverepairs.com</a></li>
              <li className="nav-links-contact"><a href="/">CALL 07917 442218</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="desktop">
        <div className="nav-contacts">
          <div className="contact-details">
            <span className="material-symbols-outlined contact-logo">call</span><a className="contact"href="/">07917 442218</a>
            <span className="material-symbols-outlined contact-logo">mail</span><a className="mailtoui contact" href="mailto:info@reviverepairs.com">info@reviverepairs.com</a>
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
                // onClick={navToggle}
                />
            </Link>
          </div>
          <ul className="nav-links">
            <Link to={'/'}>
              <li
              id='home'
              // onClick={navToggle}
              // style={homepage ? linkStyle.Active : linkStyle.Inactive}
              >
                HOME
              </li>
            </Link>
            <Link to={'/Services'}>
              <li
              id='service'
              // onClick={navToggle}
              // style={service ? linkStyle.Active : linkStyle.Inactive}
              >
                SERVICES
              </li>
            </Link>
            <Link to={'/Gallery'}>
              <li
              id='gallery'
              // onClick={navToggle}
              // style={gallery ? linkStyle.Active : linkStyle.Inactive}
              >
                GALLERY
              </li>
            </Link>
          </ul>
        </div>
      </section>
    </nav>
  )
};

export default Nav;