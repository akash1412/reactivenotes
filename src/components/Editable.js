import { Box } from "@chakra-ui/layout";
import { useState, Fragment, useEffect } from "react";
import "../index.css";
import ContentEditable from "react-contenteditable";

const Editable = ({ ...EditableProps }) => {
	return (
		<ContentEditable
			className='editable'
			{...EditableProps}
			placeholder='Add note...'
		/>
	);
};

export default Editable;
