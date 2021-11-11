import React, { Component } from "react";
import ReactPlayer from "react-player";

import './style.css'

export class VideoPlayerAtom extends Component {

    render() {
        const { videoName, position } = this.props
        const video = require(`../../assets/videos/${videoName}.mp4`);

        return (
            <div className={`video-container position-${position}`}>
                <ReactPlayer
                    url={video.default}
                    width='100%'
                    height='100%'
                    controls
                    playing={true}
                />
            </div>
        )
    }
}