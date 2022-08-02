import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_30yuc7b', 'template_3ppdluh', form.current, 'Km3G1j8Uqm84PiSOw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="join" id="join-is">
            <div className="join__left">
                <div className="join__left_textUp">
                    <span className="hollow__text">Ready to&#32;</span>
                    <span>Level up</span>
                </div>
                <div className="join__left_textDown">
                    <span>Your body&#32;</span>
                    <span className="hollow__text">With us?</span>
                </div>
            </div>

            <div className="join__right">
                <form ref={form} className="join__email" onSubmit={sendEmail}>
                    <div className="form__input">
                        <label htmlFor="">&#9993;</label>
                        <input type="email" name="user_email" placeholder="Enter your email..." />
                    </div>
                    <div className="form__btn">
                        <button className="btn btn__join">Join Now</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Join