import { Box, Icon } from "@chakra-ui/react";
import { useContext } from "react";

import { RiPushpin2Line, RiPushpin2Fill } from "react-icons/ri";
import { ModalContext } from "./../context/ModalContext";

const Card = ({ id, contentProps }) => {
	const { handleModalOpenAction } = useContext(ModalContext);

	const { html, lastUpdated, color, isPinned } = contentProps;

	const handleClick = selectedNote => () => {
		handleModalOpenAction(selectedNote);
	};

	return (
		<Box
			w='250px'
			mb='2%'
			key={id}
			px='1.2rem'
			py='.5rem'
			borderWidth='2px'
			borderStyle='solid'
			borderColor={color}
			borderRadius='.4rem'
			d='flex'
			flexDir='column'
			cursor='pointer'
			onClick={handleClick({ id, ...contentProps })}>
			<Box as='span' alignSelf='flex-end'>
				{!isPinned ? (
					<Icon as={RiPushpin2Line} w='1.5rem' h='1.5rem' />
				) : (
					<Icon as={RiPushpin2Fill} w='1.5rem' h='1.5rem' />
				)}
			</Box>
			<Box mt='2rem' dangerouslySetInnerHTML={{ __html: html }}></Box>
		</Box>
	);
};

export default Card;
