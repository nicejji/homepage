import { writable } from "svelte/store";

export type Favorite = { href: string; name: string };

export type Schema = {
	favorites: Favorite[];
};

const getDefault = (): Schema => {
	return { favorites: [] };
};

let initial: Schema | null = null;
try {
	const str = localStorage.getItem("app-db");
	if (str) {
		initial = JSON.parse(str);
	}
} catch {
	console.log("Failed to load DB");
}

const appDB = writable<Schema>(initial ?? getDefault());
appDB.subscribe((data) => {
	localStorage.setItem("app-db", JSON.stringify(data));
});

export default appDB;
