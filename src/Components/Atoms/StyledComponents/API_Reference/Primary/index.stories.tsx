import * as React from "react";
import { storiesOf } from "@storybook/react";
import { StyledComp, StyledComp2, StyledComp3 } from "./index";

storiesOf("StyledComponents/ApiReference/CssNested", module).add(
  "default",
  () => (
    <div>
      <div>
        <StyledComp complex whiteColor>
          Styled!
        </StyledComp>
        <StyledComp complex>Styled!</StyledComp>
        <StyledComp whiteColor>Styled!</StyledComp>
        <StyledComp>Styled!</StyledComp>
      </div>
      <br />
      // 以下、Not Styled の要素には // color: (props) => (props.whiteColor ?
      'white' :'black'); がセットされている
      <div>
        <StyledComp2 complex whiteColor>
          Not Styled!
        </StyledComp2>
        <StyledComp2 complex>Not Styled!</StyledComp2>
        <StyledComp2 whiteColor>Styled!</StyledComp2>
        <StyledComp2>Styled!</StyledComp2>
      </div>
      <br />
      <div>
        <StyledComp3 complex whiteColor>
          Not Styled!
        </StyledComp3>
        <StyledComp3 complex>Not Styled!</StyledComp3>
        <StyledComp3 whiteColor>Styled!</StyledComp3>
        <StyledComp3>Styled!</StyledComp3>
      </div>
    </div>
  )
);
