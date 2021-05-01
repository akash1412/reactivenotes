import { Box } from "@chakra-ui/react";
import "./App.css";

import NotesOverview from "./components/NotesOverview";

import ModalView from "./components/Modal";

import EditorOverview from "./components/EditorOverview";

function App() {
	return (
		<Box minHeight='100vh' bgColor='white.20' px='.5rem'>
			<ModalView />
			<EditorOverview />

			<NotesOverview />
		</Box>
	);
}

export default App;
