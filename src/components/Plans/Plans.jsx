import React from 'react';
import './Plans.css';

import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
    return (
        <div className="plans__container" id="plans">
            <div className="blur plans__blur1"></div>
            <div className="blur plans__blur2"></div>

            <div className="plans__header">
                <span className="hollow__text">Ready to start</span>
                <span>your journey</span>
                <span className="hollow__text">now withus</span>
            </div>

            {/* plans card */}
            <div className="plans__cards">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="seeMore">
                            <span className="seeMore__test">See more benefits<span className="seeMore__arrow">&#8594;</span></span>
                        </div>

                        <div className="plans__btn">
                            <button className="btn btn_custom">Join Now</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
};

export default Plans;