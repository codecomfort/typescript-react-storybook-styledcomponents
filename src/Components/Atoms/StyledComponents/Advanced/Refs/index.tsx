import * as React from "react";
import styled from "../../../styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export interface IFormProps {}

// TS での書き方はサンプルコードとはかなり異なる
// reactRefsWithTypeScript.tsx の例を参照
export class Form extends React.Component<IFormProps, any> {
  constructor(props: IFormProps) {
    super(props);
  }

  // FIXME この型付けが分からない
  private inputRef = React.createRef<any>();

  private handleMouseEnter = () => {
    this.inputRef.current!.focus();
  };
  render() {
    return (
      <Input
        ref={this.inputRef}
        placeholder="Hover to focus!"
        onMouseEnter={this.handleMouseEnter}
      />
    );
  }
}
