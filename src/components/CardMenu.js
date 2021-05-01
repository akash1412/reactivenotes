import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuIcon,
	MenuCommand,
	MenuDivider,
	IconButton,
} from "@chakra-ui/react";
const CardMenu = () => {
	return (
		<Menu>
			<MenuButton
				alignSelf='flex-end'
				as={IconButton}
				icon={<BiDotsVerticalRounded />}
			/>
			<MenuList fontWeight='bold' fontSize='1.2rem'>
				<MenuItem icon={<FiEdit2 />}>EDIT</MenuItem>
				<MenuItem icon={<RiDeleteBin7Line />}>Delete</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default CardMenu;
