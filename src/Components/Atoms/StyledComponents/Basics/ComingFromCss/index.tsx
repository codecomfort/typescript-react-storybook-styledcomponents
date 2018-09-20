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

export const Thing = styled.button`
  color: blue;

  // Pseudo-elements
  ::before {
    content: "🚀";
  }

  // Pseudo-class
  :hover {
    color: red;
  }
`;

export const Thing2 = styled.div.attrs({ tabIndex: 0 })`
  color: blue;

  // & でメインコンポーネントを参照できる
  &:hover {
    color: red; // <Thing2> when hovered
  }

  // E ~ F は、E 要素の後ろにあり、且つ、同じ階層である F 要素に、スタイルを適用する
  & ~ & {
    background: tomato; // <Thing2> as a sibling of <Thing2>
  }
`;
