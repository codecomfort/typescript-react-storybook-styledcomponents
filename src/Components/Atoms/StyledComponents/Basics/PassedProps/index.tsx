import * as React from "react";
import styled from "../../../styled-components";

// Typescript を使ってる場合、シンプル要素(＝div や input など)に対し、
// known HTML attribute 以外の属性は、定義なしに使用できない
// サンプルのような、以下の書き方はエラーになる
// TS の書き方は以下を参照
// styled-components: API Reference - TypeScript - Styling components
// https://www.styled-components.com/docs/api#typescript

// export const Input = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${(props) => props.inputColor || "palevioletred"};
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

// 解説 1. の例
// ターゲットがシンプル要素である Styled コンポーネントでは、known HTML attribue が DOM へパススルーされる
// (stories 側で placeholder, value, type を渡し、それが本コンポーネントを経由して input 要素に適用されている)
export const Input = styled<{ inputColor?: string }, "input">("input")`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

// 解説 2. の例
// ターゲットが React コンポーネントである Styled コンポーネントでは、
// 全て React コンポーネントの props として渡される
// 1. の例と異なり、known HTML attribute であっても DOM へパススルーされないため、
// value や type を明示的にセットする必要がある
// styled のスタイルについても、1. の例では DOM へパススルーされていたが、
// こちらでは className プロパティとして渡されるので明示的にセットする必要あり
// (後述の、Styling any components の部分も参照)
const MyComponent: React.SFC<{ [name: string]: string }> = (props) => (
  <React.Fragment>
    <input
      value={`${props.value}, ${props.inputColor}`}
      type={props.type}
      className={props.className}
    />
    <input value={props.className} type={props.type} />
  </React.Fragment>
);

export const StyledMyComponent = styled(MyComponent)`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
