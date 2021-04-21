import { Box, Heading, Text } from "@chakra-ui/layout";
import { Fragment } from "react";
import { Icon, Tooltip } from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { fireStoreDB } from "../firebase/config";

const Card = ({ id, contentProps }) => {
	const { title, textArr, html } = contentProps;

	const handleDeleteNoteAction = noteId => async () => {
		await fireStoreDB.collection("notes").doc(noteId).delete();
	};

	return (
		<Box
			key={id}
			px='1.2rem'
			py='.5rem'
			border='1px solid #e8eaed'
			borderRadius='.4rem'
			d='flex'
			flexDir='column'>
			<Heading as='h2'>{title}</Heading>
			<Box mt='2rem'>
				{textArr.map(txt => (
					<Fragment>
						<Text fontSize='1.5rem' overflowWrap='break-word'>
							{txt}
						</Text>
						<br />
					</Fragment>
				))}
			</Box>
			<Box marginTop='autp' d='flex' justifyContent='space-around'>
				<Tooltip label='edit' placement='right' openDelay={200}>
					<Box as='span'>
						<Icon as={FiEdit} w='2rem' h='2rem' cursor='pointer' />
					</Box>
				</Tooltip>
				<Tooltip label='delete' placement='right' openDelay={200}>
					<Box as='span' onClick={handleDeleteNoteAction(id)}>
						<Icon as={RiDeleteBinLine} w='2rem' h='2rem' cursor='pointer' />
					</Box>
				</Tooltip>
			</Box>
		</Box>
	);
};

export default Card;
