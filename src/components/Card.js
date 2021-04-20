import { Box, Heading, Text } from "@chakra-ui/layout";
import { Fragment } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const Card = ({ id, title, content }) => {
	return (
		<Box
			px='1.2rem'
			py='.5rem'
			border='1px solid #e8eaed'
			borderRadius='.4rem'
			d='flex'
			flexDir='column'>
			<Heading as='h2'>{title}</Heading>
			<Box mt='2rem'>
				{content.map(cnt => (
					<Fragment>
						<Text overflowWrap='break-word'>{cnt}</Text>
						<br />
					</Fragment>
				))}
			</Box>
			{/* <Box
				marginTop='auto'
				d='flex'
				justifyContent='center'
				borderTop='1px solid #e8eaed'>
				<DeleteIcon mr='2rem' w='1.5rem' h='1.5rem' />
				<EditIcon w='1.5rem' h='1.5rem' />
			</Box> */}
		</Box>
	);
};

export default Card;
