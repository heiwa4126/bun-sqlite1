import { Database } from "bun:sqlite";

type WORD = { $english: string; $japanese: string };

const upsertWord = (db: Database) =>
	db.prepare(`
INSERT INTO words (english, japanese)
VALUES ($english, $japanese)
ON CONFLICT(english) DO UPDATE SET japanese = excluded.japanese`);

export const upsertWords = (db: Database, words: WORD[]) =>
	db.transaction((items) => {
		for (const item of items) upsertWord(db).run(item);
		return items.length;
	})(words);
