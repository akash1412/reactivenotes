import { Box, Button, useToast, Icon } from "@chakra-ui/react";
import { useState } from "react";
import Quill from "./Quill";
import { fireStoreDB } from "../firebase/config";
import ColorPalete from "./ColorPalete";
import { RiPushpin2Line, RiPushpin2Fill } from "react-icons/ri";

const EditorOverview = () => {
	const [editableValue, setEditableValue] = useState("");
	const [pin, setPin] = useState(false);
	const [currentColor, setCurrentColor] = useState("#202124");

	const toast = useToast();

	const renderToast = code => {
		const title =
			code === 200
				? "Note Created Succesfully"
				: code === 400
				? "Invalid Request"
				: "Note Succesfully Deleted";
		const status =
			code === 200 ? "success" : code === 400 ? "warning" : "error";

		const desciption =
			code === 200 ? "" : code === 400 ? "Received Empty Value" : "";
		toast({
			title: title,
			status: status,
			description: desciption,
			position: "bottom-left",
			duration: 600,
			isClosable: true,
			variant: "left-accent",
		});
	};

	const handleColorChange = color => {
		setCurrentColor(color.hex);
	};

	const handlePinState = () => {
		setPin(!pin);
	};

	const CreateNote = async () => {
		const note = {
			html: editableValue,
			color: currentColor,
			isPinned: pin,
			lastUpdated: Date.now(),
		};
		try {
			await fireStoreDB.collection("notes").add(note);
			renderToast(200);
		} catch (error) {
			console.log(error);
		}
		setEditableValue("");
		setPin(false);
	};

	const ClearEditable = () => {
		setEditableValue("");
	};

	return (
		<Box
			d='flex'
			flexDir='column'
			borderRadius='.8rem'
			overflow='hidden'
			w='60rem'
			margin='0 auto'
			fontWeight='550'
			shadow='lg'>
			<Quill value={editableValue} onChange={setEditableValue} />

			<Box alignSelf='flex-end' py='.5rem' px='.5rem'>
				<Button
					mr='1.4rem'
					fontSize='1.4rem'
					p='.5rem 1rem'
					bgColor='green.400'
					_hover={{ bgColor: "green.400" }}
					onClick={CreateNote}>
					Add
				</Button>
				<Button
					mr='1.4rem'
					fontSize='1.4rem'
					p='.5rem 1rem'
					bgColor='blue.400'
					_hover={{ bgColor: "blue.400" }}
					onClick={ClearEditable}>
					Clear
				</Button>
				<Box as='button' mr='1.4rem' onClick={handlePinState}>
					{!pin ? (
						<Icon as={RiPushpin2Line} w='2rem' h='2rem' />
					) : (
						<Icon as={RiPushpin2Fill} w='2rem' h='2rem' />
					)}
				</Box>
				<ColorPalete curColor={currentColor} onChange={handleColorChange} />
			</Box>
		</Box>
	);
};

export default EditorOverview;
