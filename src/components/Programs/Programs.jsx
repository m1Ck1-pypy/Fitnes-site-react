import React from 'react';
import './Programs.css';
import {programsData}from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="programs" id="programs">
        {/* Programs Header */}
        <div className="programs__header">
            <span className="hollow__text">Explore Out</span>
            <span>Programs</span>
            <span className="hollow__text">to shape you</span>
        </div>

        {/* programs categories */}
        <div className="programs__categories">
            {programsData.map((program) => (
                <div className="category">
                    {program.image}
                    <span className="category__heading">{program.heading}</span>
                    <span className="category__details">{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs