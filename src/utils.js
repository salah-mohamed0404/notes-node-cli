export const listNotes = (notes) => {
	if (!notes?.length) {
		console.log("There aren't notes");
		return;
	}

	notes.forEach((note) => {
		console.log("id", note.id);
		console.log("content", note.content);
		console.log("tags", note.tags);
		console.log("\n");
	});
};
