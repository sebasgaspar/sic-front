import React, { Component } from "react";
import {
    TextParagraphAtom,
    ImageAtom
} from "../../atoms";

import './style.css'

export class TextImageComponent extends Component {

    render() {
        let { data, width } = this.props;
        if (data == null || width == null) {
            width = "35%"
            data =
            {
                'title': '¿Quienes somos?',
                'html': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
                    'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
                    'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
                    'mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
                    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
                    'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
                    'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
                'image': 'image1',
                'position': 'right'
            }
        }


        return (
            <div className="container-text">
                <div className="container-group">
                    <TextParagraphAtom
                        data={data}
                        position={data.position} />
                    <ImageAtom
                        imageName="image1.png"
                        alt={data.image}
                        width={width}
                    />
                </div>
            </div>
        )
    }
}