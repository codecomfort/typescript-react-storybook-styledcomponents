// React Refs with TypeScript – Martin Hochel – Medium
// https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315

import * as React from "react";

export class MyComponent extends React.Component<{}, {}> {
  private myRef = React.createRef<HTMLDivElement>();
  render() {
    return <div ref={this.myRef} />;
  }

  focus() {
    // componentDidMount 時に current は確定するので null チェック不要
    const node = this.myRef.current!;
    node.focus();
  }
}

export class AutoFocusTextInput extends React.Component<{}, {}> {
  private textInput = React.createRef<MyComponent>();

  componentDidMount() {
    this.textInput.current!.focus();
  }

  render() {
    return <MyComponent ref={this.textInput} />;
  }
}

export const CustomTextInput: React.SFC<{}> = (props) => {
  const textInput = React.createRef<HTMLInputElement>();

  const handleClick = () => {
    if (textInput.current) {
      textInput.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={textInput} />
      {/* ボタンクリックでテキストボックスにフォーカス */}
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
};

// ここまでは分かった。たまにあるケース。


// ここ以降がなんとなくしか分からない。React 公式読んでも、どのような場合に使うかイマイチよくわからない。
// 上位のコンポーネントが、下位のコンポーネントの内部にある DOM 要素を直接操作できるようにする方法っぽい。

// 外部(使う側)向けの、FancyButton がとる ref の型を公開
export type Ref = HTMLButtonElement;

export const FancyButton = React.forwardRef<Ref, { type: "submit" | "button" }>(
  (props, ref) => {
    return (
      <button ref={ref} type={props.type} className="FancyButton">
        {props.children}
      </button>
    );
  }
);

// 以降の、Forwarding refs in higher-order components では、上記の FancyButton の仕組みを
// HoC として汎用化したものだが、未読