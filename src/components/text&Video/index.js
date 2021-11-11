import React, { Component } from "react";
import {
    TextParagraphAtom,
    VideoPlayerAtom
} from "../../atoms";

import './style.css'

export class TextVideoComponent extends Component {

    render() {
        const data = [
            {
                'title': 'Video tutorial',
                'html': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
                    'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
                    'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
                    'mollit anim id est laborum."'
            },
            {
                'html': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
                    'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
                    'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
                    'mollit anim id est laborum."'
            }
        ]


        return (
            <div className="container-box">
                <div className="container-group">
                    <TextParagraphAtom
                        data={data[0]}
                        position="left" />
                    <VideoPlayerAtom
                        videoName="video1"
                        position="right" />
                </div>
                <div className="container-group">
                    <TextParagraphAtom
                        data={data[1]}
                        position="right" />
                    <VideoPlayerAtom
                        videoName="video2"
                        position="left" />
                </div>
            </div>
        )
    }
}