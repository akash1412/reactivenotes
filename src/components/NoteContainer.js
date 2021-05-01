import { Box, Heading } from "@chakra-ui/react";

import Card from "./Card";

const NoteContainer = ({ notes, heading }) => {
	return (
		// my='3rem' d='flex' flexDir='column'
		<Box maxWidth={["100%", "100rem"]} margin={[0, "0 auto"]}>
			<Heading
				as='h1'
				ml={["1.1rem", "3rem"]}
				mb='1.2rem'
				fontSize={["1.2rem", "1.2rem", "1.3rem"]}
				color='#333'>
				{heading.toUpperCase()}
			</Heading>
			<Box
				my='1.2rem'
				d='grid'
				justifyItems='center'
				alignContent='center'
				justifyContent='center'
				gridTemplateColumns='repeat(auto-fit, minmax(150px, 300px))'
				gridTemplateRows='min-content'
				gridColumnGap='2rem'
				gridRowGap='1.5rem'>
				{notes.map(({ id, ...contentProps }) => (
					<Card key={id} id={id} contentProps={contentProps} />
				))}
			</Box>
		</Box>
	);
};

export default NoteContainer;
