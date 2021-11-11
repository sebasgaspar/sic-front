import React, { Component } from "react";
import { FormLoginComponent } from "../../components";
import { ImageAtom } from "../../atoms";

import './style.css'
export class LoginPage extends Component {
    render() {
        document.body.style.backgroundColor = "#A8CFFF"
        return (
            <div>
                <div className="row">
                    <div className="col-sm img-container-login">
                        <ImageAtom imageName="Logo.png" alt="Logo" width="80%" />
                    </div>
                    <div className="col-sm">
                        <FormLoginComponent />
                    </div>
                </div>
            </div>
        )
    }
}