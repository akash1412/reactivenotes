import { useContext, useState } from "react";
import { Box } from "@chakra-ui/react";
import "./App.css";
import Create from "./components/Create";
import NotesOverview from "./components/NotesOverview";

import ModalView from "./components/Modal";

function App() {
	const [notes, setNotes] = useState([]);

	return (
		<Box minHeight='100vh' bgColor='#333'>
			{/* <ModalView /> */}

			<Create />

			<NotesOverview />
		</Box>
	);
}

export default App;
