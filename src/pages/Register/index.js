import React, { Component } from "react";
import { FormRegisterComponent } from "../../components";
import { ImageAtom } from "../../atoms";

import './style.css'
export class RegisterPage extends Component {
    render() {
        document.body.style.backgroundColor = "#A8CFFF"
        return (
            <div>
                <div className="row">
                    <div className="col-sm img-container-register">
                        <ImageAtom imageName="Logo.png" alt="Logo" width="80%" />
                    </div>
                    <div className="col-sm">
                        <FormRegisterComponent />
                    </div>
                </div>
            </div>
        )
    }
}