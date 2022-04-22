import Styled from 'styled-components';
import { shareButtonStyle } from '../../style/compartido';

export const Card = Styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
flex-direction: column;
max-width: 18em;
border-radius: 5px;
overflow: hidden;
border: 1px solid #eee;
margin: 1em;
`;

export const CardHeader = Styled.div`
width: 100%;
background-color: #fffffb0;
padding: 0.5em;
border-radius: 1px solid #e2e2e2;
`;

export const CardBody = Styled.div`
width: 100%;
background-color: #fff;
padding: 0.5em;
`;

export const ListaItems = Styled.ul`
margin: 0;
padding: 0;
list-style: none;
`;

export const Item = Styled.li`
padding: 0.5em;
border-top: 1px solid #cbcbcb;
:first-of-type{
    border-top: none;
}
`;

export const CardFooter = Styled.div`
width: 100%;
background-color: #fffffb0;
padding: 0.5em;
border-top: 1px solid #e2e2e2;
display: flex;
justify-content: space-between;
`;

export const Button = Styled.button`
${shareButtonStyle};
`;