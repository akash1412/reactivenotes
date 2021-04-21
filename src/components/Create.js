import {
	Box,
	Button,
	Flex,
	Input,
	Textarea,
	Icon,
	Tooltip,
} from "@chakra-ui/react";
import { useRef, useState, useEffect, Fragment } from "react";
import { fireStoreDB } from "../firebase/config";
import Editable from "./Editable";

import { BsCheck } from "react-icons/bs";
import { IoColorPalette } from "react-icons/io5";
import { AiOutlineClear } from "react-icons/ai";

const Create = () => {
	const containerRef = useRef();
	const editableRef = useRef();
	const titleRef = useRef();
	const [innerHtml, setInnerHtml] = useState("");

	const [showCompleteEditor, setShowCompleteEditor] = useState(false);

	const handleInputChange = e => {
		const { value } = e.target;

		setInnerHtml(value);
	};

	useEffect(() => {
		const handleClick = e => {
			!containerRef.current.contains(e.target) &&
				showCompleteEditor &&
				setShowCompleteEditor(false);
		};
		document.addEventListener("click", handleClick);

		return () => document.removeEventListener("click", handleClick);
	});

	const handleSaveNote = async () => {
		const note = {
			title: titleRef.current.value,
			textArr: editableRef.current.innerText.split("\n").filter(val => val),
			html: innerHtml,
		};

		await fireStoreDB.collection("notes").add(note);

		setInnerHtml("");
	};

	const handleShowCompleteEditor = () => {
		setShowCompleteEditor(true);
	};

	return (
		<Box d='flex' flexDir='column' alignItems='center' py='4rem'>
			<Box
				borderRadius='.8rem'
				border='1px solid #e8eaed'
				w='60rem'
				p='2rem 1.5rem 1rem 1.5rem'
				margin='0 auto'
				fontWeight='550'
				color='#fff'
				d='flex'
				flexDir='column'
				ref={containerRef}>
				{!showCompleteEditor && (
					<Box
						onClick={handleShowCompleteEditor}
						h='5rem'
						fontSize='1.5rem'
						color='#adb5bd'>
						Add Note...
					</Box>
				)}

				{showCompleteEditor && (
					<Fragment>
						<Input
							ref={titleRef}
							type='text'
							name='title'
							required
							_placeholder={{ color: "#adb5bd" }}
							border='none'
							_focus={{ outline: "none" }}
							fontSize='1.5rem'
							bgColor='transparent'
							placeholder='title'
							mb='2rem'
						/>
						<Editable
							name='textarea'
							onChange={handleInputChange}
							innerRef={editableRef}
							html={innerHtml}
						/>
						<Flex justifyContent='flex-end' alignItems='center'>
							<Tooltip
								label='save'
								placement='bottom'
								fontSize='md'
								openDelay={200}>
								<Box as='span' onClick={handleSaveNote}>
									<Icon
										as={BsCheck}
										w='2rem'
										h='2rem'
										mr='2rem'
										cursor='pointer'
									/>
								</Box>
							</Tooltip>
							<Tooltip
								label='clear all'
								placement='bottom'
								fontSize='md'
								openDelay={200}>
								<Box as='span'>
									<Icon
										as={AiOutlineClear}
										w='2rem'
										h='2rem'
										mr='2rem'
										cursor='pointer'
									/>
								</Box>
							</Tooltip>
							<Tooltip
								label='bg color'
								placement='bottom'
								fontSize='md'
								openDelay={200}>
								<Box as='span'>
									<Icon
										as={IoColorPalette}
										w='2rem'
										h='2rem'
										cursor='pointer'
									/>
								</Box>
							</Tooltip>
						</Flex>
					</Fragment>
				)}
			</Box>
		</Box>
	);
};

export default Create;
