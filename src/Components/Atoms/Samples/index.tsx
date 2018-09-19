import * as React from "react";
import styled from "../styled-components";

// tslint:disable-next-line:typedef
export const StyledButton = styled.button`
  color: blue;

  ::before {
    content: "🚀";
  }

  :hover {
    color: red;
  }
`;

export const StyledH1WithTheme = styled.h1`
  color: ${(props) => props.theme.primaryColor};
`;

export const StyledH1WithProps = styled<{ color?: string }, "h1">("h1")`
  color: ${(props) => props.color};
`;

export const StyledH1Switchable = styled<{ isActive?: boolean }, "h1">("h1")`
  color: ${(props) =>
    props.isActive ? props.theme.primaryColor : props.theme.secondaryColor};
`;

export interface IComponentProps {
  prop1?: boolean;
  prop2?: string;
  color?: string;
  // [propName: string]: any;
}

export const StyledH1WithPropsSfc: React.SFC<IComponentProps> = (props) => {
  if (!props.prop1) {
    return <div>props1 is false</div>;
  }
  return <StyledH1WithProps {...props} />;
};
