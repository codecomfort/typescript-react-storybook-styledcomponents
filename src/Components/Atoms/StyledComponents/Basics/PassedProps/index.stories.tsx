import * as React from "react";
import { Input, StyledMyComponent } from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("StyledComponents/Basics/PassedProps/Input", module).add(
  "default",
  () => (
    <div>
      <Input placeholder="@mxstbr" value="@probablyup" type="text" />
      <Input value="@geelen" type="text" inputColor="rebeccapurple" />
    </div>
  )
);
storiesOf("StyledComponents/Basics/PassedProps/StyledMyComponent", module).add(
  "default",
  () => (
    <div>
      <StyledMyComponent value="@geelen" type="text" inputColor="rebeccapurple" />
    </div>
  )
);
