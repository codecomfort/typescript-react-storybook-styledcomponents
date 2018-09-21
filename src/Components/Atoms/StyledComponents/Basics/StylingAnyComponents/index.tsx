import * as React from "react";
import styled from "../../../styled-components";

// StyledLink に与えられた color や font-weithg は、className として参照できる
export const Link: React.SFC<{ className?: string }> = props => (
  <a className={props.className}>
    {props.children}
    <br />
    {`className: ${props.className}`}
  </a>
);

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

export const StyledDiv = styled("div")`
  background: lime;
`;