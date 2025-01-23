# ①課題番号-プロダクト名

Mono:Me
（モノミー）

## ②課題内容（どんな作品か）

- 家の中のモノの整理整頓を楽しく支援するアプリ（卒制の機能の一部）。
- ユーザーは家の中のものを登録可能
- 登録内容はCRUD可能。
- お気に入り度が低いモノは自動的に断捨離リストへ追加される。

## ③DEMO

デプロイしている場合はURLを記入（任意）

## ④作ったアプリケーション用のIDまたはPasswordがある場合

なし

## ⑤工夫した点・こだわった点

- バックエンドをLaravelで、フロントエンドをReactで作成
- 「お気に入り度」が２以下のモノは自動的に断捨離リストへ追加される

## ⑥難しかった点・次回トライしたいこと(又は機能)

- Laravelで構築したバックエンドをAPIでReactにつなげるのが難しかった
- Laravelのbreezeにより、バックエンド側では認証機能を簡単に実装できたが、結局React側でうまく動作させられなかった
- 断捨離リストがitem_idしか表示出来なかった
　これはバックエンド側でデータベースを設計するとき、断捨離リストのカラムを「user_id」と「item_id」のみにしてしまっていたため。

## ⑦質問・疑問・感想、シェアしたいこと等なんでも

- [感想]
  EXP講座で習ったReactを使いたくてバックエンドとフロントを分けてみたけれど、繋げるのが本当に難しかった。
- [参考記事]
  - 1. 【Laravel】コントローラーとは？作成や編集方法を実例で解説。[https://qiita.com/shizen-shin/items/2ddb0748cdca1867440c]
  - 2. Laravel 環境別にCORS設定を行う方法[https://hikoniki.com/2024/07/24/laravel-%E7%92%B0%E5%A2%83%E5%88%A5%E3%81%ABcors%E8%A8%AD%E5%AE%9A%E3%82%92%E8%A1%8C%E3%81%86%E6%96%B9%E6%B3%95/
  ]
　- 3. Laravel 11 で api.phpが消えた！？[https://tobilog.net/10949/#toc3]
　- 4. ポストマン（APIが正常に動作しているか確認できるアプリ） [https://www.postman.com/]
　- 5.【React.js / Laravel(PHP)】Todoアプリ作ってみた！総集編 [https://www.youtube.com/watch?v=QsCT42rEgwY&list=PLoAXfAOMhqwefd1D8jZ6qWVLOHFUze-_r&index=4]