import React, { Component } from "react";
import { MdLocationOn } from 'react-icons/md'
import { GrMail } from 'react-icons/gr'
import { IconContext } from "react-icons";

import './style.css'
export class InfoContactAtom extends Component {

    render() {
        return (
            <IconContext.Provider value={{ size: '3rem' }}>
                <div className="info-container-box">
                    <div className="row info-item">
                        <div className="col-2">
                            <GrMail />
                        </div>
                        <div className="col-6">
                            <p>contacto@gmail.com</p>
                        </div>
                    </div>
                    <div className="row info-item">
                        <div className="col-2">
                            <MdLocationOn />
                        </div>
                        <div className="col-6">
                            <p>Lorem ipsum dolor sit amet,
                                consectetur.
                                ul. Racławicka 2-4
                                53-146 Wrocaw
                                POLAND</p>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        )
    }
}