import { Fragment, useContext } from "react";
import { Box, Button, Icon, Input } from "@chakra-ui/react";
import { RiPushpin2Line, RiPushpin2Fill } from "react-icons/ri";
import { ModalContext } from "../context/ModalContext";

import Backdrop from "./Backdrop";

import Quill from "./Quill";
import ColorPalete from "./ColorPalete";

const ModalView = () => {
	const {
		isModalOpen,
		noteContent,
		handleInputChange,
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
						position='fixed'
						top='50%'
						left='50%'
						transform='translate(-50%,-40%)'
						borderRadius='.8rem'
						border='2px solid #333'
						d='flex'
						flexDir='column'
						overflow='hidden'
						w={["95%", "85%", "60rem"]}
						fontWeight='550'
						bgColor='white.20'
						shadow='lg'>
						<Input
							value={noteContent.title}
							onChange={handleInputChange}
							p='.6rem .4rem'
							fontSize='1.5rem'
							fontWeight='bold'
							placeholder='Note Title...'
							outline='none'
							_active={{ outline: "none" }}
							_focus={{ outline: "none" }}
							border='none'
							borderBottom='.5px solid #333'
						/>
						<Quill value={editableInnerHtml} onChange={setEditableInnerHtml} />

						<Box d='flex' justifyContent='flex-end' py='.5rem' px='.5rem'>
							<Button
								mr='1.4rem'
								fontSize={["1.1rem", "1.2rem"]}
								fontWeight='bold'
								p={[".3rem 1.8rem", ".5rem 2rem"]}
								opacity='.8'
								color='white'
								border='1.5px solid transparent'
								bgColor='orange.400'
								_hover={{ bgColor: "orange.500" }}
								_active={{ bgColor: "orange.500" }}
								onClick={handleUpdateAction({
									...noteContent,
									html: editableInnerHtml,
								})}>
								update
							</Button>

							<Box as='button' mr='1.4rem' onClick={handleIsPinnedState}>
								{!noteContent.isPinned ? (
									<Icon
										as={RiPushpin2Line}
										fill={noteContent.color}
										w='2rem'
										h='2rem'
									/>
								) : (
									<Icon
										as={RiPushpin2Fill}
										fill={noteContent.color}
										w='2rem'
										h='2rem'
									/>
								)}
							</Box>
							<ColorPalete
								curColor={noteContent.color}
								onChange={handlePalleteColor}
							/>
						</Box>
					</Box>
				</Fragment>
			) : null}
		</Fragment>
	);
};

export default ModalView;
