import * as React from "react";
import { Counter, StyledCounter } from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("StyledComponents/Basics/ComingFromCss/Counter", module).add(
  "default",
  () => (
    <Counter />
  )
);
