import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { fireStoreDB } from "../firebase/config";

const Create = () => {
	const containerRef = useRef();

	const [showTitle, setShowTitle] = useState(false);
	const [tAreaWidth, setTAreaWidth] = useState(20);
	const [noteVal, setNoteVal] = useState({
		title: "",
		textArea: "",
	});

	const handleInputChange = e => {
		const { name, value } = e.target;

		setNoteVal({ ...noteVal, [name]: value });
	};

	const handleTextAreaSize = e => {
		e.keyCode === 13 && setTAreaWidth(prevVal => prevVal + 10);

		if (tAreaWidth >= 20) {
			e.keyCode === 8 && setTAreaWidth(prevVal => prevVal - 10);
		}
	};

	useEffect(() => {
		const handleClick = e => {
			!containerRef.current.contains(e.target) &&
				showTitle &&
				setShowTitle(false);
		};
		document.addEventListener("click", handleClick);

		return () => document.removeEventListener("click", handleClick);
	});

	const handleSaveNote = async ({ title, textArea }) => {
		const note = { title, content: textArea.split("\n").filter(val => val) };

		await fireStoreDB.collection("notes").add(note);
	};

	return (
		<Box d='flex' flexDir='column' alignItems='center' py='4rem'>
			<Box
				borderRadius='.8rem'
				border='1px solid #e8eaed'
				w='60rem'
				p='2rem 1.5rem'
				margin='0 auto'
				fontWeight='550'
				d='flex'
				flexDir='column'
				ref={containerRef}>
				{showTitle && (
					<Input
						type='text'
						name='title'
						value={noteVal.title}
						onChange={handleInputChange}
						required
						border='none'
						outline='none'
						fontSize='1.5rem'
						color='#fff'
						borderBottom='2px solid #e8eaed'
						bgColor='transparent'
						placeholder='Title'
						mb='2rem'
					/>
				)}

				<Textarea
					value={noteVal.textArea}
					onChange={handleInputChange}
					onFocus={() => setShowTitle(true)}
					onKeyDown={handleTextAreaSize}
					required
					cols='30'
					rows='1'
					name='textArea'
					placeholder='Note'
					resize='vertical'
					outline='none'
					border='none'
					color='#fff'
					// h={`${tAreaWidth}px`}
					borderBottom='2px solid #e8eaed'
					// _placeholder={{ color: "rgb(39, 38, 38)" }}
					bgColor='transparent'></Textarea>
			</Box>
			<Button
				mt='3rem'
				p='.8rem 2rem'
				cursor='pointer'
				onClick={() => handleSaveNote(noteVal)}>
				save
			</Button>
		</Box>
	);
};

export default Create;
