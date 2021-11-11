import React, { Component } from "react"

import './style.css'
export class ItemValuesAtom extends Component {
    render() {
        const { name, link, size } = this.props
        return (
            <li className="nav-item active">
                <a className="nav-link" href={`/${link}`} style={{ fontSize: size }}>{name}</a>
            </li>
        )
    }

}