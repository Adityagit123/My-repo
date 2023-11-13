// Header.jsx

import React, { useState, useRef } from 'react';
import {Container} from 'reactstrap';
import Dropdown from './Dropdown';

import './header.css';
import logoImg from '../assets/logo.png';

const navLinks = [
  {
    display: 'Courses',
    url: '#'
  },
  {
    display: 'Free Resources',
    url: '#'
  },
  {
    display: 'Trial Classes',
    url: '#'
  },
  {
    display: 'Contact Us',
    url: '#'
  },

];

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const menuRef = useRef();

  const menuToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const mouseEnterHandler = () => {
    setDropdownVisible(true);
  };

  const mouseLeaveHandler = () => {
    setDropdownVisible(false);
  };

  return (
    <header className='header'>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logoImg} alt="" className='w-100'/>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav_menu" ref={menuRef} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              <ul className="nav_list">
                {navLinks.map((item, index) => (
                  <li key={index} className='nav_item'>
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>

              {dropdownVisible && <Dropdown />}
            </div>

            <div className="nav_right">
              <p className='mb-0 d-flex align-items-center gap-2'>
                <i class="ri-links-line"></i>
              </p>
            </div>
          </div>

          <div className="mobile_menu">
            <span><i class="ri-menu-line" onClick={menuToggle}></i>  </span>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;

