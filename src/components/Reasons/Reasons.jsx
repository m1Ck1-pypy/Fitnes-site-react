import React from 'react'
import './Reasons.css'

import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';


const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="reasons__left">
                <div className="reasons__image1">
                    <img src={image1} alt="" />
                </div>

                <div className="reasons__image2">
                    <img src={image2} alt="" />
                </div>

                <div className="reasons__image3">
                    <img src={image3} alt="" />
                </div>

                <div className="reasons__image4">
                    <img src={image4} alt="" />
                </div>

            </div>

            <div className="reasons__right">
                <span className="right__text">some reasons</span>

                <div className="right__text2">
                    <span className="hollow__text">why&#32;</span>
                    <span>choose us?</span>
                </div>

                <div className="reasons__details">
                    <div className="details__block">
                        <img src={tick} alt="" />
                        <span>over 130+ expert coachs</span>
                    </div>
                    <div className="details__block">
                        <img src={tick} alt="" />
                        <span>train smarted and faster than before</span>
                    </div>
                    <div className="details__block">
                        <img src={tick} alt="" />
                        <span>1 free program for new member</span>
                    </div>
                    <div className="details__block">
                        <img src={tick} alt="" />
                        <span>reliable partners</span>
                    </div>
                </div>

                <span className="reasons__sponsors">
                    out partners
                </span>

                <div className="reasons__partners">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons