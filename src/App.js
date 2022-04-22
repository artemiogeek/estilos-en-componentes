import React, { Component } from 'react';
import Formulario from './components/Formulario';
import ListaCitas from './components/ListaCitas';

import Styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  height: 100%;
};
*,*::after,*::before{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
};
body{
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  margin: 0;
  color: #555;
  box-sizing: border-box;
}
`;

const Container = Styled.div`
max-width: 1140px;
background-color: #f6f6f6;
margin: 0 auto;
`;

class App extends Component {
  state = {
    ListaCitas: []
  };

  agregarCita = (cita) => {
    this.setState({ListaCitas: [...this.state.ListaCitas, cita]})
    console.log("Veamos las Listas");
    console.log(this.state.ListaCitas);
  }

  eliminarCita = (id) => {
    const nuevaListaCitas = this.state.ListaCitas.filter((cita)=> cita.id !== id);
    this.setState({ListaCitas: nuevaListaCitas});
  }

  render() {
    return (
      <div>
        <GlobalStyle/>
        <Container>
          <Formulario agregarCita= {this.agregarCita} />
          <ListaCitas 
            ListaCitas= {this.state.ListaCitas} 
            eliminarCita={this.eliminarCita}
          />
        </Container>

      </div>
    );
  }
}

export default App;