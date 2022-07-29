import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />

                {/* the best ad */}
                <div className="hero__slider">
                    <div className="slider__share"></div>
                    <span className="slider__text">the best fitness club in the town</span>
                </div>

                {/* Hero Heading */}
                <div className="hero__maintext">
                    <div className="maintext__firstString">
                        <span className="hollow__text">Shape&#32;</span>
                        <span>Your</span>
                    </div>
                    <div className="maintext__secondString">
                        <span>Perfect body</span>
                    </div>
                    <div className="maintext__description">
                        <span>In here we will help you to shape and build your ideal body and live up your life o fullest</span>
                    </div>
                </div>

                {/* figures */}
                <div className="hero__statistics">
                    <div className="statictics__block">
                        <span>+140</span>
                        <span>expert coachs</span>
                    </div>
                    <div className="statictics__block">
                        <span>+930</span>
                        <span>members joined</span>
                    </div>
                    <div className="statictics__block">
                        <span>+47</span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* buttons */}
                <div className="hero__buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>

            </div>


            <div className="right-h">
                <button className="btn">Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                <img src={hero_image} alt="" className="hero-image" />
                <img src={hero_image_back} alt="" className="hero-image-back" />

                <div className="calories">
                    <img src={Calories} alt="" />
                    <div className="calories__text">
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero