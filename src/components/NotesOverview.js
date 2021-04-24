import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fireStoreDB } from "../firebase/config";
import Card from "./Card";

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
		<Box
			m='0 auto'
			w='80%'
			my='5rem'
			d='grid'
			gridTemplateColumns='repeat(auto-fit, minmax(150px, 250px))'
			gridTemplateRows='min-content'
			gridColumnGap='2rem'>
			{notes.map(({ id, ...contentProps }) => (
				<Card key={id} id={id} contentProps={contentProps} />
			))}
		</Box>
	);
};

export default NotesOverview;
