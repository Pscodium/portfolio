import React, { useEffect, useRef, useState } from 'react';
import '../App.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { SiGoogletranslate } from 'react-icons/si'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

import ChangeLanguage, { getDefaultLanguage, translate } from '../services/service-translate';

function Header() {
  const navRef = useRef();
  const [navButton, setNavButton] = useState(false);
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(3);

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
    setNavButton(!navButton)
  }

  useEffect(() => {
    getDefaultLanguage()
  }, [])

  function handleTranslate(lang) {
    ChangeLanguage(lang)
  }

  return (
    <>
      <header>
          <button {...buttonProps} className='translate-btn'>
            <SiGoogletranslate />
          </button>
          <h2>Peterson Larson</h2>
          <nav ref={navRef}>
            <a href="/#">{translate('home')}</a>
            <a href="/#">{translate('about')}</a>
            <a href="/#">{translate('skills')}</a>
            <a href="/#">{translate('contact')}</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button hidden={navButton} className='nav-btn' onClick={showNavbar}>
            <FaBars />
          </button>
      </header>
      <div className={isOpen? 'visible' : 'hidden'} role='menu'>
        <button {...itemProps[0]} onClick={() => handleTranslate('en')}>{translate('english')}</button>
        <button {...itemProps[1]} onClick={() => handleTranslate('pt')}>{translate('portuguese')}</button>
        <button {...itemProps[2]} onClick={() => handleTranslate('es')}>{translate('spanish')}</button>
      </div>
      {isOpen? 
        <div className='dropdown-pointer' />
        :
        null
      }
    </>
  )
}

export default Header;