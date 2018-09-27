import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Content, Content2 } from "./index";

storiesOf("StyledComponents/Advanced/MediaTemplates/MediaQuery", module).add(
  "default",
  () => (
    <React.Fragment>
      width 700px を境に色が変わります
      <Content />
    </React.Fragment>
  )
);

storiesOf("StyledComponents/Advanced/MediaTemplates/MediaTemplate", module).add(
  "default",
  () => (
    <React.Fragment>
      <Content2 />
    </React.Fragment>
  )
);
