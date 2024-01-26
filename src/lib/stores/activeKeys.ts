import { derived, readable } from "svelte/store";

// TODO: handle "keyup", which not fired when meta key pressed
// on MacOS
//

const activeKeys = readable<Set<string>>(new Set(), (_, update) => {
	const handleKeydown = ({ key }: KeyboardEvent) => {
		update((keys) => {
			return keys.add(key);
		});
	};
	const handleKeyup = ({ key }: KeyboardEvent) => {
		update((keys) => {
			// HACK: Clean all keys on Meta key keyup
			// workaround for problem MacOS not firing "keyup",
			// when Meta key presssed
			if (key === "Meta") {
				keys.clear();
				return keys;
			}

			keys.delete(key);
			return keys;
		});
	};
	document.addEventListener("keydown", handleKeydown);
	document.addEventListener("keyup", handleKeyup);
	return () => {
		document.removeEventListener("keydown", handleKeydown);
		document.removeEventListener("keyup", handleKeyup);
	};
});

export default activeKeys;
