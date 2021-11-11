import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';

import './style.css'
export class SocialIconsAtom extends Component {
    render() {

        const socialMedias = [
            "https://api.whatsapp.com/send?phone=3142337375&text=Hola",
            "https://instagram.com/facebook",
            "https://facebook.com/facebook",
            "https://linkedin.com/facebook",
            "https://mail.hotmail.com/facebook"
        ]

        return (
            <div className="icons-box text-center">
                {socialMedias.map((item, index) => {
                    return <SocialIcon url={item} bgColor="black" key={index} style={{ margin: '0 0.4rem' }} />
                })
                }
            </div>
        )
    }
}