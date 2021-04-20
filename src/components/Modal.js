import { useContext } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from "@chakra-ui/react";

import { ModalContext } from "../context/ModalContext";

const ModalView = () => {
	const { isModalOpen, handleModalCloseAction } = useContext(ModalContext);

	return (
		<Modal isOpen={isModalOpen} onClose={handleModalCloseAction}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader color='#fff'>Modal Title</ModalHeader>
				<ModalCloseButton />
				<ModalBody>sdasdasd</ModalBody>

				<ModalFooter>
					<Button colorScheme='blue' mr={3} onClick={handleModalCloseAction}>
						Close
					</Button>
					<Button variant='ghost'>Secondary Action</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ModalView;
