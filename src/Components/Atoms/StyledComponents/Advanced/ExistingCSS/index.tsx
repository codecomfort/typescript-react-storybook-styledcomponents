// styled(MyComponent) としてスタイルが適用されていないなら、className が渡されていることを確認
// → Basics - Styling Any Components を参照

// 既存のスタイルがあるなら、末尾に追加すれば良い

// Styled Component に className で css を指定しても効かない場合がある
// styled-components は実行時に head タグの末尾に css を差し込むので、そちらが優先されてしまうから
// その場合は、スタイルシート側でセレクタを指定を増やすという方法がある

// サードパーティーのスタイル・スクリプトとの競合を避ける
// 自身で制御できないページに Styled Component をデプロイする必要がある場合は、競合の予防措置をとっとくべき
// ほとんどの原因は不十分な指定によるもの
// 作ったコンポーネントを、ページのスタイルから完全に分離する方法はないが、
// babel-plugin-styled-components-css-namespace を使えば CSS に名前空間を付けられる
// 同一ページ上の 2 つのインスタンスで競合する場合は、process.env.SC_ATTR を使って回避できるらしい

