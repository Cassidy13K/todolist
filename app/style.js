import styled from "styled-components";

const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	cursor: pointer;
	font-family: "Sedgwick Ave", cursive;

	:hover {
		transform: scale(1.1);
	}

	:active {
		background-color: palevioletred;
	}
`;

const P = styled.p `
	font-size: 25px;
	text-align: center;
	margin: auto;
`;

const Ul = styled.ul `
	list-style-type: none;
`;

const Input = styled.input `
	color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	cursor: text;
	margin: 10px;
	font-family: "Sedgwick Ave", cursive;

	:active {
		border-color: black;
	}
`;

const Textarea = styled.textarea `
	color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	cursor: text;
	font-family: "Sedgwick Ave", cursive;

	:active {
		border-color: black;
	}
`;

const Radio = Input.extend `
	cursor: pointer;
	// transform: scale(1.5);
`;

const Label = styled.label `
	font-size: 20px;
	font-style: italic;
	text-align: center;
	margin: auto;
	margin-right: 10px;
	cursor: pointer;
`;

// export const Component = styled.input... ------- can also use export before instead of below

// export default all;			// to export all and import with * as all -- bad practice, only if rlly all is needed
export {Button, P, Label, Input, Textarea, Ul, Radio};