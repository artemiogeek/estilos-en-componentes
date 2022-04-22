import React from 'react';
import Styled from 'styled-components';

const Title = Styled.h1`
color: #7271fd;
margin: 0;
text-align: ${(props) => props.alinear};
`;

const Titulo = ({titulo}) => {
    return (
        <div>
            <Title alinear="center">{titulo}</Title>
        </div>
    );
};

export default Titulo;