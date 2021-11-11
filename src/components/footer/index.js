import React, { Component } from "react";
import {
    ImageAtom,
    SocialIconsAtom,
    SideMapAtom,
    InfoContactAtom
} from "../../atoms";

import './style.css'
export class FooterComponent extends Component {

    render() {
        return (
            <div className="footer-box">
                <div className="row">
                    <div className="col-sm text-center">
                        <ImageAtom
                            imageName="Logo.png"
                            alt="logo"
                            width="80%"
                        />
                        <SocialIconsAtom />
                    </div>
                    <div className="col-sm">
                        <SideMapAtom />
                    </div>
                    <div className="col-sm">
                        <InfoContactAtom />
                    </div>
                </div>
            </div>
        )
    }
}