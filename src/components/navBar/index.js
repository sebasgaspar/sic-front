import React, { Component } from "react";

import logo from '../../assets/Logo.png'
import { ButtonComponent, ItemValuesAtom } from "../../atoms";

import './style.css'

export class NavBar extends Component {
    itemValues = [
        {
            "name": "Video tutorial",
            "Link": ""
        },
        {
            "name": "¿Quienes Somos?",
            "Link": ""
        },
        {
            "name": "Nuestro proyecto",
            "Link": ""
        },
        {
            "name": "FAQ",
            "Link": ""
        }
    ]
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="imgBox">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {this.itemValues.map((item, index) => {
                            return <ItemValuesAtom key={index} name={item.name} link={item.link} size="20px" />
                        })
                        }
                    </ul>
                </div>
                <div className="btn-box">
                    <ButtonComponent
                        value="Iniciar Sesion"
                        color="hsl(213, 100%, 83%)"
                        colorText="white"
                        redirect="/login" />
                    <ButtonComponent
                        value="Registrarse"
                        color="hsl(213, 21%, 36%)"
                        colorText="white"
                        redirect="/register" />
                </div>
            </nav>
        );
    }
}