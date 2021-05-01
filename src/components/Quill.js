import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../index.css";

const Quill = ({ value, onChange }) => {
	const modules = {
		toolbar: {
			container: [
				["bold", "italic", "underline"],
				// [{ size: ["large", "small", false, "huge"] }, { color: [] }],
				[{ list: "ordered" }, { list: "bullet" }],
			],
		},
		clipboard: { matchVisual: false },
	};

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"size",
		"color",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"video",
		"align",
	];

	return (
		<ReactQuill
			value={value}
			className='quill-editor'
			onChange={onChange}
			modules={modules}
			formats={formats}
		/>
	);
};

export default Quill;
