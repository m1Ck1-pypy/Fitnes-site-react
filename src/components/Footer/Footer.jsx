import React from 'react';
import './Footer.css';
import GitHub from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedId from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="blur footer__blur1"></div>
            <div className="blur footer__blur2"></div>

            <div className="footer">
                <div className="footer__social">
                    <img src={GitHub} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedId} alt="" />
                </div>

                <div className="footer__logo">
                    <img src={Logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer