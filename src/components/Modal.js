import { Fragment, useContext } from "react";
import { Box, Button, Icon, Flex } from "@chakra-ui/react";
import { RiPushpin2Line, RiPushpin2Fill } from "react-icons/ri";
import { ModalContext } from "../context/ModalContext";

import Backdrop from "./Backdrop";

import Quill from "./Quill";
import ColorPalete from "./ColorPalete";

const ModalView = () => {
	const {
		isModalOpen,
		noteContent,
		handleIsPinnedState,
		handlePalleteColor,
		editableInnerHtml,
		setEditableInnerHtml,
		handleUpdateAction,
		handleModalCloseAction,
	} = useContext(ModalContext);

	return (
		<Fragment>
			{isModalOpen ? (
				<Fragment>
					<Backdrop onClick={handleModalCloseAction} />
					<Box
						zIndex='5'
						position='absolute'
						top='50%'
						left='50%'
						transform='translate(-50%,-50%)'
						borderRadius='.8rem'
						d='flex'
						flexDir='column'
						overflow='hidden'
						w='60rem'
						fontWeight='550'
						bgColor='#fff'
						shadow='lg'>
						<Quill value={editableInnerHtml} onChange={setEditableInnerHtml} />
						<Flex d='flex' w='100%'>
							<Box alignSelf='flex-end' py='.5rem' px='.5rem'>
								<Button
									mr='1.4rem'
									fontSize='1.4rem'
									p='.5rem 1rem'
									bgColor='orange.400'
									_hover={{ bgColor: "orange.400" }}
									onClick={handleUpdateAction({
										...noteContent,
										html: editableInnerHtml,
									})}>
									update
								</Button>

								<Box as='button' mr='1.4rem' onClick={handleIsPinnedState}>
									{!noteContent.isPinned ? (
										<Icon as={RiPushpin2Line} w='2rem' h='2rem' />
									) : (
										<Icon as={RiPushpin2Fill} w='2rem' h='2rem' />
									)}
								</Box>
								<ColorPalete
									curColor={noteContent.color}
									onChange={handlePalleteColor}
								/>
							</Box>
						</Flex>
					</Box>
				</Fragment>
			) : null}
		</Fragment>
	);
};

export default ModalView;
