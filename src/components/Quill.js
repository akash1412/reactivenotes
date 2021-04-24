import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Quill = ({ value, onChange }) => {
	const modules = {
		toolbar: {
			container: [
				["bold", "italic", "underline", "strike", "blockquote"],
				[{ size: ["large", "small", false, "huge"] }, { color: [] }],
				[{ list: "ordered" }, { list: "bullet" }, , { align: [] }],
				["link"],
				["clean"],
			],
			// handlers: { image: this.imageHandler }
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
			onChange={onChange}
			modules={modules}
			formats={formats}
		/>
	);
};

export default Quill;
