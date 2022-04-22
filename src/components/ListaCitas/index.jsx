import React, { Component } from 'react';

import Titulo from '../Titulo';
import Cita from '../Cita';
import Styled from 'styled-components';

const ListaContainer = Styled.section`
display: flex;
flex-wrap: wrap;
padding: 2em;
`;

class ListaCitas extends Component {
    render() {
        const {ListaCitas} = this.props;
        return (
            <div>
                <Titulo titulo="Lista de Citas"/>
                <ListaContainer>
                    {ListaCitas.map(cita => (
                    <Cita 
                        key={cita.id} 
                        cita={cita} 
                        eliminarCita={this.props.eliminarCita}
                    />
                    ))}
                </ListaContainer>
            </div>
        );
    }
}

export default ListaCitas;