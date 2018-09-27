import * as styledComponents from "styled-components";
import { ThemedCssFunction, ThemedStyledComponentsModule } from "styled-components";
import { ITheme, theme } from "./theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  injectGlobal,
  keyframes,
  ThemeProvider,
  withTheme
} = styledComponents as ThemedStyledComponentsModule<ITheme>;

type CssFunction = ThemedCssFunction<ITheme>;
export { css, createGlobalStyle, injectGlobal, keyframes, CssFunction, ThemeProvider, withTheme };
export default styled;
