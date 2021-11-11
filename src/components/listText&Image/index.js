import React, { Component } from "react";
import { TextImageComponent } from "..";

import './style.css'
export class ListTextImage extends Component {

    render() {
        const data = [
            {
                'html': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
                    'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
                    'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
                    'mollit anim id est laborum."',
                'image': 'image1',
                'position': 'right'
            },
            {
                'html': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
                    'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
                    'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
                    'mollit anim id est laborum."',
                'image': 'image1',
                'position': 'left'
            },
            {
                'html': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
                    'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' +
                    'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
                    'mollit anim id est laborum."',
                'image': 'image1',
                'position': 'right'
            }
        ]
        return (
            <div className="container-list">
                <h1>Nuestro proyecto</h1>
                <div className="list-box">
                    {data.map((item, index) => {
                        return <TextImageComponent key={index} data={item} width={"25%"} />
                    })
                    }
                </div>
            </div>
        )
    }
}