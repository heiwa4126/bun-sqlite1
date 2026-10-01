import { Database } from "bun:sqlite";

type WORD = { $english: string; $japanese: string };

export const upsertWords = (db: Database, words: WORD[]) => {

	const upsertWord = db.prepare(`
INSERT INTO words (english, japanese)
VALUES ($english, $japanese)
ON CONFLICT(english) DO UPDATE SET japanese = excluded.japanese`);

	db.transaction((items) => {
		for (const item of items) upsertWord.run(item);
	})(words);

	return words.length;
}
