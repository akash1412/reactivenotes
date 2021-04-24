import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ModalContextProvider from "./context/ModalContext";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		black: {
			50: "#5f6368",
			100: "#202124",
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ModalContextProvider>
				<App />
			</ModalContextProvider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
