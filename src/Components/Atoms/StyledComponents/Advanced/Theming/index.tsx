import * as React from "react";
import styled from "../../../styled-components";

export interface IButtonProps {
  theme?: {
    primaryColor: string;
  };
}

export const Button = styled<IButtonProps, "button">("button")`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${(props) => props.theme.primaryColor}
  border: 2px solid ${(props) => props.theme.primaryColor}
`;

export const ButtonWithDefault = styled<IButtonProps, "button">("button")`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${(props) => props.theme.primaryColor}
  border: 2px solid ${(props) => props.theme.primaryColor}
`;

ButtonWithDefault.defaultProps = {
  theme: {
    primaryColor: "palevioletred"
  }
};

export interface IButton2Props {
  theme?: {
    fg: string;
    bg: string;
  };
}

export const Button2 = styled<IButton2Props, "button">("button")`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
