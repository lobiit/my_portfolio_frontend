import React from 'react';
import {motion} from "framer-motion";
import './About.scss';
import {images} from "../../constants";
import {AppWrap} from "../../Wrapper";

const abouts = [
    {title: 'Web Development', description: 'I am a good web developer', imgUrl: images.about01},
    {title: 'Backend Development', description: 'I am a great backend developer', imgUrl: images.about02},
    {title: 'Fullstack Development', description: 'I am a good fullstack web developer', imgUrl: images.about04}
]

const About = (props) => {
    return (
        <>
            <h2 className="head-text">
                I know That
                <span> Good Design</span>
                <br/>
                means
                <span>Good Business</span>
            </h2>
            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{scale: 1.1}}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={about.imgUrl} alt={about.title}/>
                        <h2 className="bold-text" style={{marginTop: 20 }}>{about.title}</h2>
                        <p className="p-text" style={{marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
};

export default AppWrap(About, 'about');
