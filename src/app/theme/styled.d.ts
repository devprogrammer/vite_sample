import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: Color;
        transition: Transition;
    }
}

export interface Color {
    bg: GradationVariant<Variant4>
    text: GradationVariant<Variant4>
    border: GradationVariant<Variant2>
}

export interface Transition {
    default: string;
    fast: string;
    slow: string;
}

export type GradationVariant<T> = { [x in T]: string }
export type Variant1 = 1;
export type Variant2 = Variant1 | 2;
export type Variant3 = Variant2 | 3;
export type Variant4 = Variant3 | 4;
export type Variant5 = Variant4 | 5;
export type Variant6 = Variant5 | 6;
export type Variant7 = Variant6 | 7;
export type Variant8 = Variant7 | 8;
export type Variant9 = Variant8 | 9;
export type Variant10 = Variant9 | 10;
export type Variant11 = Variant10 | 11;
export type Variant12 = Variant11 | 12;
export type Variant13 = Variant12 | 13;
export type Variant14 = Variant13 | 14;
export type Variant15 = Variant14 | 15;
export type Variant16 = Variant15 | 16;
export type Variant17 = Variant16 | 17;
export type Variant18 = Variant17 | 18;
export type Variant19 = Variant18 | 19;
export type Variant20 = Variant19 | 20;