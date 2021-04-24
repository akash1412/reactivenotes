import { CirclePicker } from "react-color";

import {
	Popover,
	PopoverTrigger,
	Portal,
	PopoverBody,
	PopoverContent,
	Button,
} from "@chakra-ui/react";

const ColorPalete = ({ curColor, onChange }) => {
	return (
		<Popover placement='top-end'>
			<PopoverTrigger>
				<Button
					borderRadius='50%'
					_hover={{ bgColor: `${curColor}` }}
					bgColor={curColor}></Button>
			</PopoverTrigger>
			<Portal>
				<PopoverContent w='250px'>
					<PopoverBody bgColor='#000'>
						<CirclePicker
							colors={[
								"#202124",
								"#ffa010",
								"#dac01a",
								"#248bcc",
								"#39a78e",
								"#5c2935",
								"#6a5287",
								"#660077",
								"#016612",
							]}
							onChange={onChange}
						/>
					</PopoverBody>
				</PopoverContent>
			</Portal>
		</Popover>
	);
};

export default ColorPalete;
