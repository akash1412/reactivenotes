import { createContext, useState } from "react";
import { fireStoreDB } from "../firebase/config";

export const ModalContext = createContext({});

const ModalContextProvider = ({ children }) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [noteTitle, setTitle] = useState("");
	const [noteContent, setNoteContent] = useState(null);
	const [editableInnerHtml, setEditableInnerHtml] = useState("");

	const handlePalleteColor = ({ hex }) => {
		setNoteContent({ ...noteContent, color: hex });
	};

	const handleModalOpenAction = ({ html, ...contents }) => {
		setModalOpen(true);

		setEditableInnerHtml(html);
		setNoteContent(contents);
	};

	const handleModalCloseAction = () => {
		setModalOpen(false);
	};

	const handleUpdateAction = updatedNote => async () => {
		await fireStoreDB
			.collection("notes")
			.doc(updatedNote.id)
			.update(updatedNote);

		setModalOpen(false);
	};

	const handleInputChange = ({ target: { value } }) => {
		setNoteContent({ ...noteContent, title: value });
	};

	const handleIsPinnedState = () => {
		setNoteContent({ ...noteContent, isPinned: !noteContent.isPinned });
	};

	return (
		<ModalContext.Provider
			value={{
				isModalOpen,
				handleInputChange,
				handlePalleteColor,
				noteContent,
				editableInnerHtml,
				setEditableInnerHtml,
				handleModalOpenAction,
				handleModalCloseAction,
				handleUpdateAction,
				handleIsPinnedState,
			}}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
