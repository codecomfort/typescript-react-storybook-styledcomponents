import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Title, Wrapper } from "./index";

storiesOf("StyledComponents/Basics/GettingStarted", module).add(
  "default",
  () => (
    <Wrapper>
      <Title>Hello world, this is my first styled component!</Title>
    </Wrapper>
  )
);
