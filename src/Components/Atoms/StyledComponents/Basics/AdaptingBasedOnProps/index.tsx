import * as React from "react";
import styled from "../../../styled-components";

// テンプレートリテラル部に関数を差し込み、プロパティに応じて出し分けることが可能
export const Button = styled<{ primary?: boolean }, "button">("button")`
  background: ${(props) => (props.primary ? "palevioletred" : "white")}
  color: ${(props) => (props.primary ? "white" : "palevioletred")}
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;