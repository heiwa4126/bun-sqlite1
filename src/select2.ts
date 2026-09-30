import { Database } from "bun:sqlite";
import { DBFile } from "./config";

const db = new Database(DBFile);

// 日本語に 'ん' を含む単語を取得
const words = db.query("select * from words where japanese like '%ん%' order by japanese").all();
console.log(words);
