import React from 'react';

import {Card, CardHeader, CardBody, ListaItems, Item, CardFooter, Button} from './style';


const Cita = ({cita, eliminarCita}) => {

    const handleClick = (id)=> (e)=>{
        console.log('id desde la cita');
        console.log(id);
        eliminarCita(id);
    }

    return (
        <Card>
            <CardHeader>
                <strong>Descripion de Cita</strong>
            </CardHeader>
            <CardBody>
                <ListaItems>
                    <Item>
                        <strong>Nombre: </strong> {cita.nombre}
                    </Item>
                    <Item>
                        <strong>Apellidos: </strong> {cita.apellidos}
                    </Item>
                    <Item>
                        <strong>Direccion: </strong> {cita.direccion}
                    </Item>
                    <Item>
                        <strong>Fecha: </strong> {cita.fechaCita}
                    </Item>
                    <Item>
                        <strong>Hora: </strong> {cita.horaCita}
                    </Item>
                    <Item>
                        <strong>Sintomas: </strong> {cita.sintomas}
                    </Item>
                </ListaItems>
            </CardBody>
            <CardFooter>
                <Button onClick={handleClick(cita.id)}>Eliminar</Button>
            </CardFooter>
        </Card>
    );
};

export default Cita;