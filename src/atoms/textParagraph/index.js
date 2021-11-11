import { Component } from "react";

import './style.css'

export class TextParagraphAtom extends Component {

    render() {
        const { data, position } = this.props
        return (
            <div className={`text-box paragraph-${position}`}>
                {(data.title != null)
                    ? <h1>{data.title}</h1>
                    : <div></div>
                }
                <p>{data.html}</p>
            </div>
        )
    }
}