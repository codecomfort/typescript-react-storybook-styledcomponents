import * as React from "react";
import styled, { css } from "../../../styled-components";

interface IProps {
  complex?: boolean;
  whiteColor?: boolean;
}

const complexMixin = css`
  color: ${(props: any) => (props.whiteColor ? 'white' : 'black')};
`;

export const StyledComp = styled<IProps, "div">("div")`
  /* This is an example of a nested interpolation */
  ${(props: any) => (props.complex ? complexMixin : 'color: blue;')};
  background: green;
 `;

// 以下は、解説にあるように、css 関数を使わないとどうなるかの例
export const StyledComp2 = styled<IProps, "div">("div")`
  /* This is an example of a nested interpolation */
  ${(props: any) => (props.complex ? `color: ${(props: any) => (props.whiteColor ? 'white' : 'black')}` : 'color: blue;')};
`

const complexMixinWithoutCss = `
  color: ${(props: any) => (props.whiteColor ? 'white' : 'black')};
`;

export const StyledComp3 = styled<IProps, "div">("div")`
  /* This is an example of a nested interpolation */
  ${(props: any) => (props.complex ? complexMixinWithoutCss : 'color: blue;')};
`