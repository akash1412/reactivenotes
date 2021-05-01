import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fireStoreDB } from "../firebase/config";

import NoteContainer from "./NoteContainer";

const NotesOverview = () => {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		const fetcher = async () => {
			const collectionRef = await fireStoreDB.collection("notes");

			collectionRef.onSnapshot(snap => {
				let docs = [];
				snap.forEach(doc => {
					docs.push({ id: doc.id, ...doc.data() });
				});
				setNotes(docs);
			});
		};

		fetcher();
	}, []);

	return (
		<Box w={["100%", "75%"]} m='0 auto'>
			<NoteContainer
				notes={notes.filter(note => note.isPinned)}
				heading='pinned'
			/>
			<NoteContainer
				notes={notes.filter(note => !note.isPinned)}
				heading='others'
			/>
		</Box>
	);
};

export default NotesOverview;
