import { readable } from "svelte/store";

const activeElement = readable<typeof document.activeElement>(
	document.activeElement,
	(set) => {
		const handleChange = () => {
			set(document.activeElement);
		};

		document.addEventListener("focusin", handleChange);
		document.addEventListener("focusout", handleChange);
		return () => {
			document.removeEventListener("focusin", handleChange);
			document.removeEventListener("focusout", handleChange);
		};
	},
);

export default activeElement;
