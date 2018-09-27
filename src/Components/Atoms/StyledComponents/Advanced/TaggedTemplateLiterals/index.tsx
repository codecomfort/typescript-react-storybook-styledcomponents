// Tagged Template Literals は ES6 の新機能

// テンプレートリテラル部を、関数の可変長引数として呼び出しても等価
// fn`this is a ${aVar} day`
// fn(["this is a ", " day"], aVar);

// 例えば styled.h1 の型情報を見ると以下のようになっている(h1 以外も同様)。
// (strings: TemplateStringArray, ...interpolations: Interpolation<～>[]) => StyledComponentClass<>
// strings が ["this is a ", " day"] で、interpolations が ${} 部分の変数

// styled-components の仕組みは Tagged Template Literals で実現されている

import * as React from "react";
import styled from "../../../styled-components";
export const StyledH1_1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// 解説の例のように書き換えてみようとしたが、string[] が TemplateStringsArray とみなされないので
// TS 環境では書き換えは無理っぽい
// const template: TemplateStringsArray = ["font-size: 1.5em; text-align: center; color: palevioletred;"];
// export const StyledH1_2 = styled.h1(template);
