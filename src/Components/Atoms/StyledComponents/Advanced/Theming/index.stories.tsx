import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button, ButtonWithDefault } from "./index";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "mediumseagreen"
};

storiesOf("StyledComponents/Advanced/Theming/Button", module).add(
  "default",
  () => (
    <div>
      <Button>Normal</Button>
      <ButtonWithDefault>NormalWithDefault</ButtonWithDefault>

      <br />
      <ThemeProvider theme={theme}>
        <React.Fragment>
          {/* ThemeProvider の効果で theme には Context 経由でアクセスできるので、いちいち指定しなくてよい */}
          <Button>Themed</Button>
          <ButtonWithDefault>ThemedWithDefault</ButtonWithDefault>
        </React.Fragment>
      </ThemeProvider>
    </div>
  )
);
