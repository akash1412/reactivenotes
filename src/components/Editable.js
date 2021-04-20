import { Box } from "@chakra-ui/layout";
import { useState, Fragment, useEffect } from "react";

const Editable = ({ contentRef }) => {
	const [isEditing, setEditing] = useState(false);

	 

	 
	return (
		<Fragment>
			<Box
				ref={contentRef}
				contentEditable
				outline='none'
				fontSize='4rem'
				data-title='title'
				aria-label='title'
				role='textbox'
				aria-multiline
				tabIndex='0'
				suppressContentEditableWarning
				// onKeyUp={handleKeyDownHandler}
			></Box>
		</Fragment>
	);
};

export default Editable;
