import React, { Component } from 'react';
import Titulo from '../Titulo';
import { v4 as uuidv4 } from 'uuid';
import {Form, FormGroup, StyledInput, StyledArea, Button } from './style';

const initialState = {
    cita: {
        nombre: "",
        apellidos: "",
        direccion: "",
        fechaCita: "",
        horaCita: "",
        sintomas: "",
    }
}

class Formulario extends Component {
    constructor(){
        super();
        this.state = {...initialState}
    }

    handleOnChange = (e)=> {
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({cita: {...this.state.cita, [e.target.name]: e.target.value}})
    }

    validaData = () => {
        const {cita} = this.state;
        let valorRetorno = true;
        if(
            cita.nombre === "" ||
            cita.apellidos === "" || 
            cita.direccion === "" || 
            cita.fechaCita === "" || 
            cita.horaCita === "" || 
            cita.sintomas === ""
        ) {
            valorRetorno = false;
        }
        return valorRetorno;
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        if(this.validaData()){
            const nuevaCita = {...this.state.cita};
            nuevaCita.id = uuidv4();

            // console.log(nuevaCita);
            this.props.agregarCita(nuevaCita);
            this.setState({...initialState});
        }
       
    }

    render() {
        return (
            <div>
                <Titulo titulo="Formulario de citas"/>
                <Form onSubmit={this.handlerSubmit}>
                    <FormGroup col={2}>
                        <label htmlFor="nombre">Nombre</label>
                        <StyledInput 
                            type="text" 
                            placeholder='Ingresar Nombre' 
                            name="nombre"
                            onChange={this.handleOnChange}
                            value={this.state.cita.nombre}
                        />
                    </FormGroup>
                    <FormGroup col={2}>
                        <label htmlFor="apellidos">Apellidos</label>
                        <StyledInput 
                            type="text" 
                            placeholder='Ingresar Apellidos' 
                            name="apellidos"
                            onChange={this.handleOnChange}
                            value={this.state.cita.apellidos}
                        />
                    </FormGroup>
                    <FormGroup col={"1"}>
                        <label htmlFor="direccion">Direccion</label>
                        <StyledInput 
                            type="text" 
                            placeholder='Ingresar Direccion' 
                            name="direccion"
                            onChange={this.handleOnChange}
                            value={this.state.cita.direccion}
                        />
                    </FormGroup>
                    <FormGroup col={3}>
                        <label htmlFor="fechaCita">Fecha</label>
                        <StyledInput 
                            type="date" 
                            name="fechaCita"
                            onChange={this.handleOnChange}
                            value={this.state.cita.fechaCita}
                        />
                    </FormGroup>
                    <FormGroup col={3}>
                        <label htmlFor="horaCita">Hora de Cita</label>
                        <StyledInput 
                            type="time" 
                            name="horaCita"
                            onChange={this.handleOnChange}
                            value={this.state.cita.horaCita}
                        />
                    </FormGroup>
                    <FormGroup col={3}>
                        <label htmlFor="sintomas">Sintomas</label>
                        <StyledArea 
                            type="text" 
                            placeholder='Ingresar Sintomas' 
                            name="sintomas"
                            onChange={this.handleOnChange}
                            value={this.state.cita.sintomas}
                            
                        />
                            
                    </FormGroup>

                    <FormGroup col={1}>
                        <Button >Reservar</Button>
                    </FormGroup>
                    
                </Form>
                
            </div>
        );
    }
}

export default Formulario;