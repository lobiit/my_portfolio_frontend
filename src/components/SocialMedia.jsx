import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = (props) => (
    <div className="app__social">
        <div>
            <BsGithub />
        </div>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsTwitter />
        </div>
    </div>
);

export default SocialMedia;
