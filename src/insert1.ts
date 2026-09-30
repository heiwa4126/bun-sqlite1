// トランザクション付き insert
// https://bun.com/docs/runtime/sqlite#transactions

import { Database } from "bun:sqlite";
import { DBFile } from "./config";

const db = new Database(DBFile);

const insertWord = db.prepare("INSERT INTO words (english, japanese) VALUES ($english, $japanese)");
const insertWords = db.transaction(words => {
  for (const word of words) insertWord.run(word);
	return words.length;
});

const count = insertWords([
  { $english: "hello", $japanese: "こんにちは" },
  { $english: "goodbye", $japanese: "さようなら" }
]);

console.log(`Inserted ${count} words.`);
