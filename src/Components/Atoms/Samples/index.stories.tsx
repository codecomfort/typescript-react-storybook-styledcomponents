import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "../styled-components";
import { theme } from "../theme";
import {
  StyledButton,
  StyledH1WithTheme,
  StyledH1WithProps,
  StyledH1Switchable,
  StyledH1WithPropsSfc
} from "./index";

storiesOf("Samples/StyledButton", module).add("default", () => (
  <StyledButton>Hello world!</StyledButton>
));
storiesOf("Samples/StyledH1WithTheme", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <StyledH1WithTheme>H1 is here!</StyledH1WithTheme>
  </ThemeProvider>
));
storiesOf("Samples/StyledH1WithProps", module).add("default", () => (
  <StyledH1WithProps color="green">H1 is here!</StyledH1WithProps>
));

storiesOf("Samples/StyledH1Switchable", module).add("default(active)", () => (
  <ThemeProvider theme={theme}>
    <StyledH1Switchable isActive={true}>H1 is here!</StyledH1Switchable>
  </ThemeProvider>
));
storiesOf("Samples/StyledH1Switchable", module).add("inActive", () => (
  <ThemeProvider theme={theme}>
    <StyledH1Switchable isActive={false}>H1 is here!</StyledH1Switchable>
  </ThemeProvider>
));

storiesOf("Samples/StyledH1WithPropsSfc", module).add("default", () => (
  <StyledH1WithPropsSfc>StyledH1WithPropsSfc is here!</StyledH1WithPropsSfc>
));
storiesOf("Samples/StyledH1WithPropsSfc", module).add("prop1: true", () => (
  <StyledH1WithPropsSfc prop1={true}>
    StyledH1WithPropsSfc is here!
  </StyledH1WithPropsSfc>
));
storiesOf("Samples/StyledH1WithPropsSfc", module).add(
  "prop1: true, color: orange",
  () => (
    <StyledH1WithPropsSfc prop1={true} color="orange">
      StyledH1WithPropsSfc is here!
    </StyledH1WithPropsSfc>
  )
);
