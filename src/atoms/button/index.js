import React, { Component } from "react";

import './style.css'


export class ButtonComponent extends Component {

    getComponent = (redirect) => {
        return (redirect == null
            ? <Button {...this.props} />
            : (<a href={redirect}>
                <Button {...this.props} />
            </a>))
    }

    render() {
        const { redirect } = this.props

        return (
            this.getComponent(redirect)
        );
    }
}

class Button extends Component {
    constructor(props) {
        super(props);
        const { color } = this.props
        this.state = { hover: false, color: color };
    }

    toggleHover = () => {
        this.setState({ hover: !this.state.hover })
        if (this.state.hover) {
            let hsl = String(this.state.color)
            let hslSplit = hsl.split(",")
            let opacity = Number(hslSplit[2].slice(0, -2))
            opacity = opacity + 15
            let hoverColor = `${hslSplit[0]},${hslSplit[1]},${opacity}%)`
            this.setState({ color: hoverColor })
        } else {
            let hsl = String(this.state.color)
            let hslSplit = hsl.split(",")
            let opacity = Number(hslSplit[2].slice(0, -2))
            opacity = opacity - 15
            let hoverColor = `${hslSplit[0]},${hslSplit[1]},${opacity}%)`
            this.setState({ color: hoverColor })
        }

    }

    render() {
        const { value, colorText = "black", callback } = this.props

        return (
            <div className="btn">

                <button style={{ backgroundColor: this.state.color, color: colorText }}
                    onMouseOver={this.toggleHover}
                    onMouseLeave={this.toggleHover}
                    onClick={callback}
                >
                    {value}
                </button>
            </div>
        )
    }
}