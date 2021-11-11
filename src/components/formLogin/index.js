import { Component } from "react";

import { ButtonComponent } from '../../atoms'

import './style.css'
export class FormLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            errors: {
                validate: '',
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
            errors.validate = "Por favor completa el formulario"
            isValid = false
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
            <div className="conatiner-form-login">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <input id="user" type="text" value={this.state.user} onChange={this.handleChange} placeholder="Usuario" autocomplete="off" />
                    </div>
                    <div className="form-field">
                        <input id="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Contraseña" />
                        <div className="text-danger">{this.state.errors.validate}</div>
                    </div>
                    <ButtonComponent
                        value="Iniciar Sesion"
                        color="hsl(213, 21%, 36%)"
                        colorText="white"
                    />
                </form>
            </div>
        )
    }
}