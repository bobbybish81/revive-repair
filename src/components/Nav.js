import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '.././styles/Nav.css';

function Nav () {

  const [openMenu, setOpenMenu] = useState(false);
  const [homeLink, setHomeLink] = useState(true);
  const [serviceLink, setServiceLink] = useState(false);
  const [galleryLink, setGalleryLink] = useState(false);

  const menuToggle = () => {
    openMenu === true ? setOpenMenu(false) : setOpenMenu(true);
  }

  const linkToggle = (e) => {
    if (e.target.id === 'home' && !homeLink) {
      setHomeLink(true);
      setServiceLink(false);
      setGalleryLink(false);
    }
    if (e.target.id === 'service' && !serviceLink) {
      setHomeLink(false);
      setServiceLink(true);
      setGalleryLink(false);
    }
    if (e.target.id === 'gallery' && !galleryLink) {
      setHomeLink(false);
      setServiceLink(false);
      setGalleryLink(true);
    }
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

  const linkStyle = {
    Active: {
      borderBottom: '1px solid #f47323'
    },
    Inactive: {
      borderBottom: '1px solid #fff'
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
                onClick={linkToggle}
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
              <li className="nav-links-contact"><span className="material-symbols-outlined link-icon">mail</span> info@reviverepairs.com</li>
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
            <Link to={'/'}>
              <img
                className="revive-logo"
                id='home'
                alt="REVIVE Ltd"
                src={require("../images/logos/revive_logo.png")}
                onClick={linkToggle}
                />
            </Link>
          </div>
          <ul className="nav-links">
            <Link to={'/'}>
              <li
              id='home'
              onClick={linkToggle}
              style={homeLink ? linkStyle.Active : linkStyle.Inactive}>
                HOME
              </li>
            </Link>
            <Link to={'/Services'}>
              <li
              id='service'
              onClick={linkToggle}
              style={serviceLink ? linkStyle.Active : linkStyle.Inactive}>
                SERVICES
              </li>
            </Link>
            <Link to={'/Gallery'}>
              <li
              id='gallery'
              onClick={linkToggle}
              style={galleryLink ? linkStyle.Active : linkStyle.Inactive}>
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