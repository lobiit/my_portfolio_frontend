import React, {useState} from 'react';
import './Footer.scss';
import {AppWrap, MotionWrap} from "../../Wrapper";
import {images} from "../../constants";
import {client} from "../../client";

const Footer = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    const handleSubmit = ()=>{
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.name,
            email: formData.email,
            message: formData.message,
        }
        client.create(contact)
            .then(()=> {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err)=> console.log(err));
    }
    return (
        <>
            <h2 className="head-text">Take a coffee & chat with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email"/>
                    <a href="mailto:john.lobi.tumbo@gmail.com" className="p-text" >john.lobi.tumbo@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile"/>
                    <a href="tel: +254707119271" className="p-text" >+254707119271</a>
                </div>
                {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Your name" name="name" value={name} onChange={handleChangeInput}/>
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput}/>
                    </div>
                    <div>
                        <textarea name="message" className="p-text" placeholder="Your Message" value={message} onChange={handleChangeInput}/>
                    </div>
                    <button type="butto" className="p-text" onClick={handleSubmit}>{!loading? 'Send Message' : 'Sending...' }</button>
                </div>
                    ) : (
                        <div>
                        <h3 className="head-text">Thank you for getting in touch</h3>
                    </div>)}
            </div>
        </>
    )
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg')
;
