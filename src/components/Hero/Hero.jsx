import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion';


const Hero = () => {

    const transition = {
        type: 'spring',
        duration: 3
    }

    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className="hero" id="home">
            <div className="blur hero__blur"></div>
            <div className="left-h">
                <Header />

                {/* the best ad */}
                <div className="hero__slider">
                    <motion.div className="slider__share"
                        initial={{ left: mobile ? '162px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}>
                    </motion.div>
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

                <motion.div 
                    className="heart-rate"
                    transition={transition}
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <img src={hero_image} alt="" className="hero-image" />
                <motion.img 
                    src={hero_image_back} alt="" 
                    className="hero-image-back"
                    initial={{ right: '18rem' }}
                    whileInView={{ right: '25.5rem' }}
                    transition={transition} />

                <motion.div 
                    className="calories"
                    initial={{ right: "45rem" }}
                    whileInView={{ right: "35rem" }}
                    transition={transition}>
                    <img src={Calories} alt="" />
                    <div className="calories__text">
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero