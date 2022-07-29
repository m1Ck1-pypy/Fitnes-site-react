import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>

        <ul className='header__menu'>
            <li className='mainMenu__item'>Home</li>
            <li className='mainMenu__item'>Programes</li>
            <li className='mainMenu__item'>Why us</li>
            <li className='mainMenu__item'>Plans</li>
            <li className='mainMenu__item'>Testimonial</li>
        </ul>
    </div>
  )
}

export default Header