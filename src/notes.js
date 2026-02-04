import { insertDB, saveDB, getDB } from "./db.js";

export const newNote = async (note, tags = []) => {
	const newNote = {
		id: Date.now(),
		content: note,
		tags,
	};

	await insertDB(newNote);

	return newNote;
};

export const getAllNotes = async () => {
	const db = await getDB();
	const notes = db?.notes || [];

	return notes;
};

export const findNotes = async (filter) => {
	const db = await getDB();
	const notes = db?.notes || [];

	if (!notes.length) return;

	return notes.filter((note) =>
		note.content.toLowerCase().includes(filter.toLowerCase()),
	);
};

export const removeNote = async (id) => {
	const db = await getDB();
	const notes = db?.notes || [];

	if (!notes.length) return;

	const match = notes.find((note) => note.id === id);

	if (!match) return;

	const filteredNotes = notes.filter((note) => note.id !== id);

	await saveDB({ notes: filteredNotes });

	return id;
};

export const removeAllNotes = () => saveDB({ notes: [] });
