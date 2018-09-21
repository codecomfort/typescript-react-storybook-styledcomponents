import * as React from "react";
import styled from "../../../styled-components";

interface IInputProps {
  size?: string;
}

interface IAdditionalProps {
  type?: string;
  margin?: string;
  padding?: string;
}

// うまく型定義がハマらない
// → https://github.com/DefinitelyTyped/DefinitelyTyped/issues/28597

// export const Input = styled.input.attrs<IInputProps, IAdditionalProps>({ // NG
// export const Input = styled.input.attrs<any, IAdditionalProps>({ // OK
export const Input = styled<IInputProps, "input">("input").attrs<any, IAdditionalProps>({ // OK
  // ラッパーコンポーネントを作るほどでもない場合は、
  // attrs を使ってアドホックにプロパティを生やせる
  type: "password",
  margin: (props) => props.size || "1em",
  padding: (props) => props.size || "1em"
})`
  color: palevioletred;
  font-size: 1em;
  border 2px solid palevioletred;
  border-radius: 3px;
  // 生やしたプロパティは、スタイリングで使用できる
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;