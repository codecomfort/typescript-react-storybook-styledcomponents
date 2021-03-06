import * as React from "react";
import { storiesOf } from "@storybook/react";
import {
  Button,
  ButtonWithDefault,
  Button2,
  MyComponent,
  IMyComponentProps,
  Button3
} from "./index";
import { ThemeProvider, withTheme } from "../../../styled-components";
import { ITheme } from "../../../theme";

const theme = {
  primaryColor: "mediumseagreen"
};

storiesOf("StyledComponents/Advanced/Theming/ThemeProvider", module).add(
  "default",
  () => (
    <div>
      <Button>Normal</Button>
      <ButtonWithDefault>NormalWithDefault</ButtonWithDefault>

      <br />
      <ThemeProvider theme={theme}>
        <React.Fragment>
          {/* ThemeProvider の効果で、styled-components であれば
              theme には Context 経由でアクセスできるので、いちいち指定しなくてよい */}
          <Button>Themed</Button>
          <ButtonWithDefault>ThemedWithDefault</ButtonWithDefault>
        </React.Fragment>
      </ThemeProvider>
    </div>
  )
);

const theme2: ITheme = {
  primaryColor: "palevioletred",
  secondaryColor: "white"
};

const invertTheme = (theme: ITheme): ITheme => ({
  primaryColor: theme.secondaryColor,
  secondaryColor: theme.primaryColor
});

storiesOf("StyledComponents/Advanced/Theming/FunctionThemes", module).add(
  "default",
  () => (
    <ThemeProvider theme={theme2}>
      <div>
        {/* theme2 の通り */}
        <Button2>Default Theme</Button2>

        {/* ThemeProvider の theme には、theme の変換関数を与えることが可能
            (ThemeProviderProps<T> 型を参照) */}
        <ThemeProvider theme={invertTheme}>
          <Button2>Inverted Theme</Button2>
        </ThemeProvider>
      </div>
    </ThemeProvider>
  )
);

export const MyComponentWithTheme = withTheme(MyComponent);

storiesOf(
  "StyledComponents/Advanced/Theming/GettingTheThemeWithoutStyledComponents",
  module
).add("default", () => (
  <div>
    <ThemeProvider theme={theme2}>
      <React.Fragment>
        <MyComponent />
        <br />
        {/* stylec-components でなくても、withTheme でラップすれば、ThemeProvider の theme にアクセスできる */}
        <MyComponentWithTheme />
      </React.Fragment>
    </ThemeProvider>
  </div>
));

const theme3: ITheme = {
  primaryColor: "mediumseagreen",
};

storiesOf(
  "StyledComponents/Advanced/Theming/TheThemeProp",
  module
).add("default", () => (
  <div>
    <Button3>Normal</Button3>
    {/* theme プロパティでアドホックに操作 */}
    <Button3 theme={{ primaryColor: "royalblue" }}>Ad hock theme</Button3>
    <ThemeProvider theme={theme3}>
      <div>
        {/* ThemeProvider の theme を使用 */}
        <Button3>Themed</Button3>
        {/* ThemeProvider を theme を使わない */}
        <Button theme={{ primaryColor: "darkorange"}}>Overidden</Button>
      </div>
    </ThemeProvider>
  </div>
));

