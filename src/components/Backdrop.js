import { Box } from "@chakra-ui/react";

const Backdrop = ({ ...overlayProps }) => {
	return (
		<Box
			pos='fixed'
			top='0'
			left='0'
			zIndex='3'
			width='100%'
			height='100%'
			bgColor='rgba(20, 20, 20, 0.733)'
			{...overlayProps}>
			{" "}
		</Box>
	);
};

export default Backdrop;
