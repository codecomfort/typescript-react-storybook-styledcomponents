import * as React from "react";
import { storiesOf } from "@storybook/react";
import { CustomTextInput, FancyButton, Ref } from "./reactRefsWithTypeScript";

storiesOf("StyledComponents/Advanced/Refs/CustomTextInput", module).add(
  "default",
  () => <CustomTextInput />
);
storiesOf("StyledComponents/Advanced/Refs/FancyButton", module).add(
  "default",
  () => {
    const ref = React.createRef<Ref>();
    return (
      // 外部から内部の要素に ref を差し込める
      <FancyButton type="button" ref={ref}>
        Click me!
      </FancyButton>
    );
  }
);
