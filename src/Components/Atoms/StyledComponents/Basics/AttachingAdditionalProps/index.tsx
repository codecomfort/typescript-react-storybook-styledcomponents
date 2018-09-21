import * as React from "react";
import styled from "../../../styled-components";

interface IAdditionalProps {
  size?: number;
}

interface IChangedProps {
  type?: string;
  margin?: string;
  padding?: string;
}

// export const Input = styled.input.attrs<IAdditionalProps, IInputProps>({
// 動作しない。以下と関連
// → https://github.com/DefinitelyTyped/DefinitelyTyped/issues/28597
export const Input = styled.input.attrs<any, IChangedProps>({
  type: "password",
  margin: (props) => props.size || "1em",
  padding: (props) => props.size || "1em"
})`
  color: palevioletred;
  font-size: 1em;
  border 2px solid palevioletred;
  border-radius: 3px;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
