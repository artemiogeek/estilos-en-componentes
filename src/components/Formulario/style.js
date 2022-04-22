import Styled, {css} from 'styled-components';
import { shareButtonStyle } from '../../style/compartido';

const sharedInputStyle = css`
display: block;
width: 100%;
background-color:#eee;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 20px 0;
padding: 20px;
box-sizing: border-box;
`

export const Form = Styled.form`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
padding: 1em 2em
`;

export const FormGroup = Styled.div`
flex: 0 0 ${(props) => (props.col === "1"? 100: 100/props.col -2)}%;
@media (max-width: 600px){
    flex: 0 0 100%;
}
`;

export const StyledInput = Styled.input`
height: 40px;
${sharedInputStyle}
`;

export const StyledArea = Styled.input`
resize: none;
height: 5em;
${sharedInputStyle}
`;

export const Button = Styled.button`
${shareButtonStyle};
`;