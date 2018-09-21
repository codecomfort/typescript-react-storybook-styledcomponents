import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./index";

storiesOf("StyledComponents/Basics/AttachingAdditilanProps/Input", module).add(
  "default",
  () => (
    <div>
      <Input placeholder="A small text input" size="1em" />
      <Input placeholder="A bigger text input" size="2em" />
    </div>
  )
);
