# todo-app
React, TypeScriptで作るシンプルなtodoアプリ。
React, TypeScriptの基礎をアウトプットするのに最適なプロジェクト。

## プロジェクトを通して学べること

Hooksを使用した基礎的な開発

React, TypeScriptの基礎

## 学習対象者

ある程度のJavaScript(https://developer.mozilla.org/ja/docs/Web/JavaScript) の知識がある

React公式チュートリアル(https://ja.reactjs.org/) を終えて次の段階へ進みたい人

Node.js(https://nodejs.org/ja/) をインストール済みであること

Git Bash もしくは何らかの UNIX シェルの操作をある程度習得している人



## 環境

M1 Mac book air

| 環境    | バージョン   |
|:--------|:--------:|
| Node.js | 16.15.1  |
| React   | 17以上   　|

## 開発環境の準備

Vite.js(https://ja.vitejs.dev/) を使用しプロジェクト環境を構築する

```shell
# Node.js に同梱されている npm コマンドを利用する場合
$ npm create vite

# パッケージマネージャーにyarnを利用している場合
$ yarn creare vite
```

```
% npm create vite

✔ Project name: … vite-project
✔ Select a framework: › react
✔ Select a variant: › react-ts

Scaffolding project in /Users/zenn/vite-project...

Done. Now run:

  cd vite-project
  npm install
  npm run dev
  ```
  
 ## 起動
 viteの指示に従い、プロジェクトを起動すればOK。
 
 ```shell
 % cd vite project
 % npm install
 % npm run dev
 ```
 
 ブラウザで( http://localhost:5173) にアクセスするとReactアプリが表示される。
 
 ##参考
 このプロジェクトは[Zenn](https://zenn.dev/) で公開されている [React Hooks と TypeScript で簡単 TODO アプリ](https://zenn.dev/sprout2000/articles/60cc8f1aa08b4b)の写経用リポジトリです。


