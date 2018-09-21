import * as React from "react";
import { Rotate } from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("StyledComponents/Basics/Animations/Rotate", module).add(
  "default",
  () => (
    <Rotate>&lt; 💅 &gt;</Rotate>
  )
);
