import { Database } from "bun:sqlite";
import { DBFile } from "./config";

const db = new Database(DBFile);

// 英語に 'e' を含む単語を取得
const words = db.query("select * from words where english like '%e%'").all();
console.log(words);
