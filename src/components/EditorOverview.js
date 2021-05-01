import { Box, Button, useToast, Icon, Input } from "@chakra-ui/react";
import { useState, useRef } from "react";
import Quill from "./Quill";
import { fireStoreDB } from "../firebase/config";
import ColorPalete from "./ColorPalete";
import { RiPushpin2Line, RiPushpin2Fill } from "react-icons/ri";

const EditorOverview = () => {
	const [editableValue, setEditableValue] = useState("");
	const [pin, setPin] = useState(false);
	const [currentColor, setCurrentColor] = useState("#202124");
	const [title, setTitle] = useState("");

	// useOutsideClick({
	// 	ref: ref,
	// 	handler: () => setIsModalOpen(false),
	// });

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

	const handleInputChange = e => {
		setTitle(e.target.value);
	};

	const CreateNote = async () => {
		const note = {
			title,
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
		setTitle("");
		setEditableValue("");
		setPin(false);
	};

	const ClearEditable = () => {
		setEditableValue("");
	};

	return (
		<Box py='2rem'>
			<Box
				bgColor='white.20'
				d='flex'
				flexDir='column'
				borderRadius='.8rem'
				border='2px solid #333'
				overflow='hidden'
				w={["100%", "90%", "60rem"]}
				margin='0 auto'
				fontWeight='550'
				shadow='lg'>
				<Input
					fontSize='1.4rem'
					fontWeight='bold'
					placeholder='Note Title...'
					outline='none'
					_active={{ outline: "none" }}
					_focus={{ outline: "none" }}
					border='none'
					borderBottom='.5px solid #333'
					value={title}
					onChange={handleInputChange}
				/>
				<Quill value={editableValue} onChange={setEditableValue} />

				<Box alignSelf='flex-end' py='.5rem' px='.5rem'>
					<Button
						mr='1.4rem'
						fontSize={["1.1rem", "1.2rem"]}
						fontWeight='bold'
						p={[".3rem 1.8rem", ".5rem 2rem"]}
						bgColor='black'
						opacity='.8'
						color='white'
						border='1.5px solid transparent'
						_hover={{ bgColor: "black", opacity: "1" }}
						onClick={CreateNote}>
						ADD
					</Button>
					<Button
						mr='1.4rem'
						fontSize={["1.1rem", "1.2rem"]}
						fontWeight='bold'
						p={[".3rem 1.8rem", ".5rem 2rem"]}
						p='.5rem 2rem'
						bgColor='white'
						border='1.5px solid black'
						_hover={{ bgColor: "black", color: "white" }}
						onClick={ClearEditable}>
						CLEAR
					</Button>
					<Box as='button' mr='1.4rem' outline='none' onClick={handlePinState}>
						{!pin ? (
							<Icon
								as={RiPushpin2Line}
								fill={currentColor}
								w={["1.8rem", "2rem"]}
								h={["1.8rem", "2rem"]}
							/>
						) : (
							<Icon
								as={RiPushpin2Fill}
								fill={currentColor}
								w={["1.8rem", "2rem"]}
								h={["1.8rem", "2rem"]}
							/>
						)}
					</Box>
					<ColorPalete curColor={currentColor} onChange={handleColorChange} />
				</Box>
			</Box>
		</Box>
	);
};

export default EditorOverview;
