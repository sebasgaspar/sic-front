import React, { Component } from "react";
import { ItemValuesAtom } from "..";

import './style.css'
export class SideMapAtom extends Component {
    itemValues = [
        {
            "name": "Video tutorial",
            "Link": ""
        },
        {
            "name": "¿Quienes Somos?",
            "Link": ""
        },
        {
            "name": "Nuestro proyecto",
            "Link": ""
        },
        {
            "name": "FAQ",
            "Link": ""
        }
    ]
    render() {
        return (
            <div className="sideMap-box">
                <ul className="navbar-nav mr-auto">
                    {this.itemValues.map((item, index) => {
                        return <ItemValuesAtom key={index} name={item.name} link={item.link} size="25px" />
                    })
                    }
                </ul>
            </div>
        )
    }
}