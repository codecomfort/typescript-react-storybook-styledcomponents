import * as React from "react";
import { Counter, Thing, Thing2 } from "./index";
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
