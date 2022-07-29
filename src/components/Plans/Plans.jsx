import React from 'react';
import './Plans.css';

import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
    return (
        <div className="plans__container">
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

                        <button className="btn">Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Plans;