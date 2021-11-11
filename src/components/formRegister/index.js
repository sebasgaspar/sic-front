import { Component } from "react";

import { ButtonComponent } from '../../atoms'
import validator from 'validator'

import './style.css'
export class FormRegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', lastName: '', mail: '', user: '',
            password: '',
            repetPassword: '',
            check: false,
            errors: {
                mail: '',
                password: '',
                checked:''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });

    }
    validate() {
        let isValid = true
        let errors = {};
        if (this.state.name === '' || this.state.lastName === '' || this.state.mail === '' || this.state.password === '') {
            errors.password = "Por favor completa el formulario"
            isValid = false
        } else {
            if (this.state.password !== this.state.repetPassword) {
                errors.password = "Las contraseñas no coinciden";
                isValid = false
            }
            if (!validator.isEmail(this.state.mail)) {
                errors.mail = "Intorduce un correo valido";
                isValid = false
            }
            if(!this.state.check){
                errors.checked = "Por favor acepta los terminos para continuar";
                isValid = false
            }
        }
        this.setState({ errors: errors })
        return isValid
    }
    handleSubmit(event) {
        if (this.validate()) {
            alert("Hola")
        }
        event.preventDefault();
    }
    render() {
        return (
            <div className="conatiner-form-register">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <input id="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Nombre" />
                    </div>
                    <div className="form-field">
                        <input id="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} placeholder="Apellido" />
                    </div>
                    <div className="form-field">
                        <input id="mail" type="email" value={this.state.mail} onChange={this.handleChange} placeholder="Correo" />
                        <div className="text-danger">{this.state.errors.mail}</div>
                    </div>
                    <div className="form-field">
                        <input id="user" type="text" value={this.state.user} onChange={this.handleChange} placeholder="Usuario" />
                    </div>
                    <div className="form-field">
                        <input id="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Contraseña" />
                    </div>
                    <div className="form-field">
                        <input id="repetPassword" type="password" value={this.state.repetPassword} onChange={this.handleChange} placeholder="Repita contraseña" />
                        <div className="text-danger">{this.state.errors.password}</div>
                    </div>
                    <div className="form-field">
                        <div className="round" htmlFor="checkbox">
                            <input type="checkbox" id="checkBox" onChange={() => { }} checked={this.state.check} />
                            <label htmlFor="checkbox" onClick={() => this.setState({ check: !this.state.check })}></label>
                        </div>
                        <label onClick={() => this.setState({ check: !this.state.check })}>Acepto el uso de tratamiento de dato (ley 1581 de 2012) </label>
                        <div className="text-danger">{this.state.errors.checked}</div>
                    </div>
                    <ButtonComponent
                        value="Registrarme"
                        color="hsl(213, 21%, 36%)"
                        colorText="white"
                    />
                </form>
            </div>
        )
    }
}