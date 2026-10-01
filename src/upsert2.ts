// トランザクション付き upsert

import { Database } from "bun:sqlite";
import { DBFile } from "./config";
import { upsertWords } from "./upsert";

const db = new Database(DBFile);

const count = upsertWords(db, [
	{ $english: "hello", $japanese: "こんにちは" },
	{ $english: "goodbye", $japanese: "さようなら" }
]);

console.log(`Upserted ${count} words.`);
