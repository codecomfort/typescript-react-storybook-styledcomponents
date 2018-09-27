import * as React from "react";
import styled, { css, CssFunction } from "../../../styled-components";

export const Content = styled.div`
  background: papayawhip;
  height: 3em;
  width: 3em;

  @media (max-width: 700px) {
    background: palevioletred;
  }
`;

interface IMediaTemplate {
  desktop: CssFunction;
  tablet: CssFunction;
  phone: CssFunction;
}
const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

const media: IMediaTemplate = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (styles: TemplateStringsArray) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(styles)}
      }
    `;

    return acc;
  },
  {} as IMediaTemplate
);

export const Content2 = styled.div`
  background: papayawhip;
  height: 3em;
  width: 3em;

  ${media.desktop`background: dodgerblue;`}
  ${media.tablet`background: mediumseagreen;`}
  ${media.phone`background: palevioletred;`}
`;
