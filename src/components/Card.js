import { Box, Icon, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import {
	RiPushpin2Line,
	RiPushpin2Fill,
	RiDeleteBin7Line,
} from "react-icons/ri";
import { ModalContext } from "./../context/ModalContext";

import { fireStoreDB, deleteDoc } from "../firebase/config";
import CardMenu from "./CardMenu";

const Card = ({ id, contentProps }) => {
	const { handleModalOpenAction } = useContext(ModalContext);

	const { title, html, lastUpdated, color, isPinned } = contentProps;

	const handleClick = selectedNote => () => {
		handleModalOpenAction(selectedNote);
	};

	const updatePinState = id => async () => {
		await fireStoreDB
			.collection("notes")
			.doc(id)
			.update({ isPinned: !isPinned });
	};

	const deleteIconClick = async id => {
		await deleteDoc(id);
	};

	return (
		<Box
			w={["80%", "300px"]}
			mb='2%'
			key={id}
			px='1.2rem'
			py='.5rem'
			borderWidth='2px'
			borderStyle='solid'
			borderColor={color}
			borderRadius='.4rem'
			position='relative'
			d='flex'
			flexDir='column'>
			<Box
				as='span'
				zIndex='3'
				position='absolute'
				top='2px'
				right='3px'
				cursor='pointer'
				onClick={updatePinState(id)}>
				{!isPinned ? (
					<Icon as={RiPushpin2Line} fill={color} w='1.8rem' h='1.8rem' />
				) : (
					<Icon as={RiPushpin2Fill} fill={color} w='1.8rem' h='1.8rem' />
				)}
			</Box>
			<Box mb='auto' onClick={handleClick({ id, ...contentProps })} zIndex='1'>
				<Heading>{title}</Heading>
				<Box
					mt='2rem'
					cursor='pointer'
					dangerouslySetInnerHTML={{ __html: html }}></Box>
			</Box>

			<Box
				as='button'
				alignSelf='center'
				mt='1rem'
				outline='none'
				onClick={() => deleteIconClick(id)}>
				<Icon
					as={RiDeleteBin7Line}
					fill={color}
					w='1.8rem'
					h='1.8rem'
					cursor='pointer'
				/>
			</Box>
			{/* <CardMenu /> */}
		</Box>
	);
};

export default Card;
