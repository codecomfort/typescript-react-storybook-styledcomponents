// この定義がなぜか読み込まれていないので node_modules/@types/styled-components/index.d.ts
// に直接追記している。
export interface ThemedStyledComponentsModule<T> {
    createGlobalStyle(strings: TemplateStringsArray, ...interpolations: any[]): any;  // styled-components.js L2382 return GlobalStyleComponent;
}

export function createGlobalStyle(
    strings: TemplateStringsArray,
    ...interpolations: any[]
): any;