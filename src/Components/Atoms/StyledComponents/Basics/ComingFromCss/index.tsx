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
  // → stories の 2, 3, 4 個目の <Thing2> に適用
  & ~ & {
    background: tomato; // <Thing2> as a sibling of <Thing2>
  }

  // E + F は、E 要素と F 要素が隣接している F 要素に、スタイルを適用する
  // → stories の 2, 3 個目の <Thing2> に適用
  & + & {
    background: lime; // <Thing2> next to <Thing2>
  }

  // className に something を持つ <Thing2> へ適用
  &.something {
    background: orange; // <Thing2> tagged with an additional CSS class ".something"
  }

  // className に .something-else を持つ要素の、子孫の <Thing2> へ適用
  .something-else & {
    border: 1px solid;  // <Thing2> inside another element labeled ".something-else"
  }
`;

export const Thing3 = styled.div`
  color: blue;

  // & なしのセレクタは、子孫要素を参照する
  .something {
    border: 1px solid;  // an element labeled ".something" inside <Thing3>
    display: block;
  }
`;