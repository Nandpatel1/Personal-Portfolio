import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faInstagram,
    faGoogle,
  } from "@fortawesome/free-brands-svg-icons";

const SocialNetwork = ()=>{
    return (
        <>
             <div class="social-container">
                <a href="https://www.linkedin.com/in/nand-makadia-0128ab20b/"
                    target='_blank'
                    className="youtube social">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/Nandpatel1"
                    target='_blank'
                    className="github social">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="https://twitter.com/MakadiaNand" target='_blank' className="twitter social"> 
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="https://www.instagram.com/nandmakadia/" target='_blank'
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="mailto:nandpatel622002@gmail.com" target='_blank'
                    className="instagram social">
                    <FontAwesomeIcon icon={faGoogle}/>
                </a>
                
            </div>
        </>
    );
};

export default SocialNetwork;