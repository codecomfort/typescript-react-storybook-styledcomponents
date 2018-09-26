import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button, ButtonWithDefault, Button2 } from "./index";
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

const theme2 = {
  fg: "palevioletred",
  bg: "white"
};
// const invertTheme = ({ fg }: { fg: string }, { bg }: { bg: string }) => ({
//   fg: bg,
//   bg: fg
// });
type Args = {
  fg: string;
  bg: string;
};
const invertTheme = (args: Args) => ({ fg: args.bg, bg: args.fg });

storiesOf("StyledComponents/Advanced/Theming/FunctionThmemes", module).add(
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
