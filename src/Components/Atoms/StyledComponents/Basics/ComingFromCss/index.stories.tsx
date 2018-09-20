import * as React from "react";
import { Counter, Thing, Thing2, Thing3, GlobalStyle, Thing4 } from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("StyledComponents/Basics/ComingFromCss/Counter", module).add(
  "default",
  () => <Counter />
);
storiesOf("StyledComponents/Basics/ComingFromCss/Thing", module).add(
  "default",
  () => <Thing>Hello world!</Thing>
);
storiesOf("StyledComponents/Basics/ComingFromCss/Thing2", module).add(
  "default",
  () => (
    <React.Fragment>
      <Thing2>Hello world!</Thing2>
      <Thing2>How ya doing?</Thing2>
      <Thing2 className="something">The sun is shining...</Thing2>
      <div>Pretty nice day today.</div>
      <Thing2>Don't you think?</Thing2>
      <div className="something-else">
        <div>
          <Thing2>Splendid.</Thing2>
        </div>
      </div>
    </React.Fragment>
  )
);
storiesOf("StyledComponents/Basics/ComingFromCss/Thing3", module).add(
  "default",
  () => (
    // ※ React では、label の for は htmlFor で表現するので
    // reactjs - React label element - Stack Overflow
    // https://stackoverflow.com/questions/22752116/react-label-element
    <Thing3>
      <label htmlFor="foo-button" className="something">
        Mystery button
      </label>
      <button id="foo-button">What do I do?</button>
      <div>
        <label htmlFor="foo-button" className="something">
          Mystery button
        </label>
        <button id="foo-button">What do I do?</button>
        <div>
          <label htmlFor="foo-button" className="something">
            Mystery button
          </label>
          <button id="foo-button">What do I do?</button>
        </div>
      </div>
    </Thing3>
  )
);
storiesOf("StyledComponents/Basics/ComingFromCss/Thing4", module).add(
  "default",
  () => (
    <React.Fragment>
      <GlobalStyle />
      <Thing4>I'm blue, da ba dee da ba daa</Thing4>
    </React.Fragment>
  )
);
