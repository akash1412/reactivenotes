import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fireStoreDB } from "../firebase/config";
import Card from "./Card";

const NotesOverview = () => {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		const collectionRef = fireStoreDB.collection("notes");

		collectionRef.onSnapshot(snap => {
			let docs = [];
			snap.forEach(doc => {
				docs.push({ id: doc.id, ...doc.data() });
			});
			setNotes(docs);
		});
	}, []);

	return (
		<Box
			m='0 auto'
			w='80%'
			mt='5rem'
			color='#fff'
			fontSize='1.3rem'
			d='grid'
			gridTemplateColumns=' repeat(auto-fit, minmax(150px, 250px))'
			gridColumnGap='2rem'>
			{notes.map(({ id, ...contentProps }) => (
				<Card key={id} id={id} {...contentProps} />
			))}
		</Box>
	);
};

export default NotesOverview;
