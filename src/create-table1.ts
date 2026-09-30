import { Database } from "bun:sqlite";
import { rmSync } from "node:fs";
import { DBFile } from "./config";

// DBFile を削除 (rm -f と同等)
rmSync(DBFile, { force: true });

const db = new Database(DBFile, { create: true });

// テーブルとインデックスの作成 (db.run() で実行)
db.run(`
CREATE TABLE IF NOT EXISTS words (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	english VARCHAR(128),
	japanese VARCHAR(128)
);
CREATE UNIQUE INDEX IF NOT EXISTS words_english_idx ON words (english)`);

// データの挿入 (複数行 VALUES による一括 INSERT)
db.run(`
BEGIN;
INSERT OR IGNORE INTO words (english, japanese) VALUES
	('apple', 'りんご'),
	('banana', 'バナナ'),
	('cherry', 'さくらんぼ'),
	('deer', 'しか'),
	('eel', 'うなぎ');
COMMIT`);

// 登録内容の確認
const words = db.query("SELECT * FROM words").all();
console.log(words);
