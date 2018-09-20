import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";
import { ITheme, theme } from "./theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ITheme>;

export { css, createGlobalStyle, injectGlobal, keyframes, ThemeProvider };
export default styled;
