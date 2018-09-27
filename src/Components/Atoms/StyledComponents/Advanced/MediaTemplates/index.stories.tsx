import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Content } from "./index";

storiesOf("StyledComponents/Advanced/MediaTemplates/MediqQuery", module).add(
  "default",
  () => (
    <React.Fragment>
      width 700px を境に色が変わります
      <Content />
    </React.Fragment>
  )
);
