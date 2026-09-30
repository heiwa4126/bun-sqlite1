# bun-sqlite1

[bun:sqlite](https://bun.com/docs/runtime/sqlite)
の練習。

## 実行

To install dependencies:

```bash
bun ci
```

To run:

```bash
# https://bun.com/docs/runtime/sqlite の最初のサンプルコードを実行
bun run index

# テーブル作ってinsert
bun run create-table1
## var/table1.sqlite ができる

# select のテスト
bun run select1
bun run select2

# insert のテスト
bun run insert1
bun run insert1  # 2度目は UNIQUE 制約でエラーになる
bun run select1
bun run select2
```
