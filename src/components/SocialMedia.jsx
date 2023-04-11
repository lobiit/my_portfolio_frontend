import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = (props) => (
    <div className="app__social">
        <div>
            <a href="https://github.com/lobiit">
                <BsGithub />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/tumbo-lobi-john-05ba4a1a1/">
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a href="https://twitter.com/johnlobiit">
                <BsTwitter />
            </a>
        </div>
    </div>
);
export default SocialMedia;
