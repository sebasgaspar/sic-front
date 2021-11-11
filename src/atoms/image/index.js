import React, { Component } from "react";

import './style.css'
export class ImageAtom extends Component {
    render() {

        const { imageName, alt, width } = this.props
        const image = require(`../../assets/${imageName}`);
        return (
            <div className="img-box" >
                <img src={image.default} alt={alt} style={{ width: width }} />
            </div>
        )
    }
}