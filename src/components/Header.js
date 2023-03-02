import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoClose, IoMenu, IoHomeOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail, MdOutlineHomeRepairService } from 'react-icons/md';
import { AiOutlinePicture } from 'react-icons/ai';
import '.././styles/Header.css';

const Header = ({ openMenu, menuToggle }) => {

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
    <header className='header'>
      <nav>
        <section className='mobile'>
          <div className='navbar'>
            <div className='logo-container'>
              <Link to={'/'}>
                <img
                  className='revive-logo'
                  id='home'
                  alt='REVIVE Ltd'
                  src={require('../assets/logos/revive_logo.png')}
                  />
              </Link>
            </div>
            {openMenu ? <IoClose className='menu-closebtn' onClick={menuToggle}/> :
              <IoMenu className='menu-openbtn' onClick={menuToggle}/>}
          </div>
          <div className='menu-container'>
            <div className='mobile-menu' style={openMenu ? menuStyles.Active : menuStyles.Inactive}>
              <ul className='nav-links'>
                <Link to={'/'}>
                  <li onClick={menuToggle}><IoHomeOutline className='link-icon'/>HOME</li>
                </Link>
                <Link to={'/services'}>
                  <li onClick={menuToggle}><MdOutlineHomeRepairService className='link-icon'/>SERVICES</li>
                </Link>
                <Link to={'/gallery'}>
                  <li onClick={menuToggle}><AiOutlinePicture className='link-icon'/>GALLERY</li>
                </Link>
                <li className='nav-links-contact'>
                  <MdOutlineEmail className='link-icon'/>
                  <a href='mailto:info@reviverepairs.com'>info@reviverepairs.com</a>
                </li>
                <li className='nav-links-contact'>
                  <a href='tel:+447917442218'>CALL 07917 442218</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='desktop'>
          <div className='nav-contacts'>
            <div className='contact-details'>
              <FiPhone className='contact-logo'/>
              <a className='nav-contact' href='tel:+447917442218'>07917 442218</a>
              <MdOutlineEmail className='contact-logo'/>
              <a className='nav-contact' href='mailto:info@reviverepairs.com'>info@reviverepairs.com</a>
            </div>
          </div>
          <div className='navbar'>
            <div className='logo-container'>
              <Link to={'/'}>
                <img
                  className='revive-logo'
                  id='home'
                  alt='REVIVE Ltd'
                  src={require('../assets/logos/revive_logo.png')}
                  />
              </Link>
            </div>
            <ul className='nav-links'>
              <NavLink className={({isActive}) => isActive ? 'active-link': 'non-active-link' } to={'/'}>
                <li>HOME</li>
              </NavLink>
              <NavLink className={({isActive}) => isActive ? 'active-link': 'non-active-link' } to={'/services'}>
                <li>SERVICES</li>
              </NavLink>
              <NavLink className={({isActive}) => isActive ? 'active-link': 'non-active-link' } to={'/gallery'}>
                <li>GALLERY</li>
              </NavLink>
            </ul>
          </div>
        </section>
      </nav>
    </header>
  )
};

export default Header;