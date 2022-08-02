import React from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const testimonialsLength = testimonialsData.length;

    return (
        <div className="testimonials">
            <div className="testimonials__left">
                <span>Testimonails</span>
                <span className="hollow__text">What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>

                <span>
                    <span style={{ color: "var(--orange)", fontSize: "1.3rem" }}>
                        {testimonialsData[selected].name}
                    </span>
                    {" "} - {testimonialsData[selected].status}
                </span>
            </div>

            <div className="testimonials__right">
                <div></div>
                <div></div>
                <div className="imgClient">
                    <img src={testimonialsData[selected].image} alt="" className="" />
                </div>

                <div className="right__arrows">
                    <img 
                        onClick={() =>  {
                            selected === 0 ? setSelected(testimonialsLength - 1) : setSelected((prev) => prev - 1);
                        }}
                        src={leftArrow} alt="" />
                    <img 
                        onClick={() => {
                            selected === testimonialsLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
                        }}
                        src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials;