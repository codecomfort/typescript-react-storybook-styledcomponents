import * as React from "react";
import styled from "../../../styled-components";

export const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`;

export const Icon = styled.svg`
  transition: fill 0.75s;
  width: 48px;
  height: 48px;

  // 上位コンポーネントを参照し、その hover を検出できる
  // この動作を Link 側にネストで持つこともできるが、それは煩雑になるとのこと
  // なお、検出できるのは対象が Styled Components の場合のみ、React.Component の場合は不可
  // その場合は React.Component を styled() でラップして className を渡せばよいとのこと)
  ${Link}:hover & {
    fill: rebeccapurple;
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: "◀";
    margin: 0 10px;
  }
`;
