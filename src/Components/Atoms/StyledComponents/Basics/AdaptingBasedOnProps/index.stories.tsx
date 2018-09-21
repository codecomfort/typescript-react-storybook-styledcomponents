import * as React from "react";
import { Button } from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("StyledComponents/Basics/AdaptingBasedOnProps/Button", module).add(
  "default",
  () => (
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <Button primary={false}>Normal</Button>
      <Button primary={true}>Primary</Button>
    </div>
  )
);
