import * as React from "react";
import styled from "../../../styled-components";

// Define Styled Components outside of ther render method
export const StyledCounter = styled.div`
  background: yellow;
`;

export const Paragraph = styled.p`
  background: orange;
`;

export const Button = styled.button`
  background: red;
`;

export class Counter extends React.Component<{}, { count: number }> {
  state = {
    count: 0
  };

  increment = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  decrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  };

  render() {
    return (
      <StyledCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </StyledCounter>
    );
  }
}
