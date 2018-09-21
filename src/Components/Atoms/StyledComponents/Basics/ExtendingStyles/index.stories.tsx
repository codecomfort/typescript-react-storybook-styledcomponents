import * as React from "react";
import { Button, TomatoButton, ReversedButton } from "./index";
import { storiesOf } from "@storybook/react";

storiesOf(
  "StyledComponents/Basics/ExtendingStyles/TomatoButton",
  module
).add("default", () => (
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
));
storiesOf(
  "StyledComponents/Basics/ExtendingStyles/PolymorphicProps",
  module
).add("default", () => (
  <div>
    <Button>Normal Button</Button>
    {/* 既に styled されているコンポーネントがあって、
    それを別の形式でレンダリングしたい場合に as ポリモ-フィックが使える */}
    <Button as="a" href="/">Link with Button styles</Button>
    <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
  </div>
));
storiesOf(
  "StyledComponents/Basics/ExtendingStyles/ReversedButton",
  module
).add("default", () => (
  <div>
    <Button>Normal Button</Button>
    {/* as ポリモ-フィックは、カスタムコンポーネントでも動作する */}
    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
  </div>
));