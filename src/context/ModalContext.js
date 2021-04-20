import { createContext, useState } from "react";

export const ModalContext = createContext({
	isModalOpen: true,
});

const ModalContextProvider = ({ children }) => {
	const [isModalOpen, setModalOpen] = useState(true);

	const handleModalOpenAction = () => {
		setModalOpen(true);
	};

	const handleModalCloseAction = () => {
		setModalOpen(false);
	};

	return (
		<ModalContext.Provider
			value={{ isModalOpen, handleModalOpenAction, handleModalCloseAction }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
