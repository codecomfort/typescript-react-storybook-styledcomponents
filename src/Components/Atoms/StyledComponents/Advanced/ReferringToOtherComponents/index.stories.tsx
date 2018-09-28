
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Icon, Label, Link } from "./index";

storiesOf("StyledComponents/Advanced/ReferringToOtherComponents/ReferTo", module).add(
  "default",
  () => (
    <Link href="#">
    <Icon viewBox="0 0 20 20">
      {/* 吹き出しアイコン */}
      <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z"/>
    </Icon>
    <Label>Hovering my parent chages my style!</Label>
  </Link>
  )
);