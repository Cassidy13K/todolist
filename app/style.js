import styled from "styled-components";
import toDoStore from "./toDoStore";

const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	cursor: ${toDoStore.inputTodo == "" || toDoStore.inputPriority == "" ? "not-allowed" : "pointer"};
`;

const P = styled.p `
	font-size: 25px;
	text-align: center;
	margin: auto;
	font-family: "Comic Sans";
`;

const Label = styled.label `
	font-size: 20px;
	font-style: italic;
	text-align: center;
	margin: auto;
	font-family: "Comic Sans";
`;

const Input = styled.input `
	color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	cursor: text;
`;