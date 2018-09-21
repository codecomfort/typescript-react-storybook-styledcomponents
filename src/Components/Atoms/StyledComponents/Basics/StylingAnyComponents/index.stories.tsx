import * as React from "react";
import { Link, StyledLink, StyledDiv } from "./index";
import { storiesOf } from "@storybook/react";

storiesOf(
  "StyledComponents/Basics/StylingAnyComponents/StyledLink",
  module
).add("default", () => (
  <React.Fragment>
    <div>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </div>
    <StyledDiv>styled div</StyledDiv>
  </React.Fragment>
));
