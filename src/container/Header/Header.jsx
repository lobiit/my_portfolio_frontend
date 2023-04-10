import React from 'react';
import './Header.scss';
import { motion } from "framer-motion";
import {images} from "../../constants";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        },
    },
};
const Header = (props) => {
    return (
        <div className="app__header app__flex">
            <motion.div
            whileView={{x: [-100, 0], opacity: [0, 1] }}
            transition={{duration: 0.5}}
            className="app__header-info">
                <div className="badge-cmp app__flex">
                    <span>
                        👋
                    </span>
                    <div style={{marginLeft: 20}}>
                        <p className="p-text">Hello, I am</p>
                        <h1 className="head-text">Lobi</h1>
                    </div>
                    <div className="tag-cmp app__flex">
                        <p className="p-text">Web Developer</p>
                        <p className="p-text">Freelancer</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileView={{ opacity: [0, 1] }}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className="app__header-img">
                <img src={images.profile} alt="profile_bg"/>
                <motion.img
                    whileView={{ scale: [0, 1] }}
                    transition={{duration: 1, ease:'easeInOut'}}
                    src={images.circle}
                    alt="profile_circle"
                    className="overlay_circle"/>
            </motion.div>
            <motion.div
                variant={scaleVariants}
                whileView={scaleVariants.whileInView}
                className="app__header-circles">
                {[images.python, images.react, images.django].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle} alt="profile_bg"/>
                    </div>
                ))}
            </motion.div>
        </div>
    )
};

export default Header;
