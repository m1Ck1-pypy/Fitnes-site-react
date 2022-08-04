import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';

import { Link } from 'react-scroll';

const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className="header">
            <img src={Logo} alt="" className='logo' />
            {(menuOpened === false && mobile === true) ? (
                <div className="toggleMunu" onClick={() => setMenuOpened(true)}>
                    <img src={Bars} alt="" style={{ width: "1.9rem", height: "1.4rem" }} />
                </div>
            ) : (
                <ul className='header__menu'>
                    <li className='mainMenu__item'>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}>Home</Link>
                    </li>
                    <li className='mainMenu__item'>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="programs"
                            spy={true}
                            smooth={true}>Programs</Link>
                    </li>
                    <li className='mainMenu__item'>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="reasons"
                            spy={true}
                            smooth={true}>Why us</Link>
                    </li>
                    <li className='mainMenu__item'>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="plans"
                            spy={true}
                            smooth={true}>Plans</Link>
                    </li>
                    <li className='mainMenu__item'>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="testimonials"
                            spy={true}
                            smooth={true}>Testimonial</Link>
                    </li>
                </ul>
            )}

        </div>
    )
}

export default Header