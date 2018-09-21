import * as React from "react";
import styled from "../../../styled-components";

// Typescript で as polymorphic を使うには、型宣言を追加しておく必要あり
export const Button = styled<{ primary?: boolean, as?: string | React.StatelessComponent, href?: string }, "button">("button")`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// レアなケースなら、Button に出し分けの関数を差し込むより、
// 別コンポーネントを作ってしまった方が簡単だし、Button の複雑化も避けられる
export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export const ReversedButton: React.SFC<{}> = (props) => (
  <button {...props} children={((props.children) as string).split('').reverse()} />
);