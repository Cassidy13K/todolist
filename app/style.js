import styled from "styled-components";
import toDoStore from "./toDoStore";

const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	cursor: pointer;
`;

const Submit = Button.extend`
	cursor: ${toDoStore.inputTodo == ""  ? "not-allowed" : "pointer"};
`;
// TODO: conditional for cursor not working

const P = styled.p `
	font-size: 25px;
	text-align: center;
	margin: auto;
`;

const Label = styled.label `
	font-size: 20px;
	font-style: italic;
	text-align: center;
	margin: auto;
`;

const Input = styled.input `
	color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	cursor: text;
`;

const Textarea = styled.textarea `
	color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	cursor: text;
`;

// export const Component = styled.input... ------- can also use export before instead of below

// export default all;			// to export all and import with * as all -- bad practice, only if rlly all is needed
export {Button, Submit, P, Label, Input, Textarea};