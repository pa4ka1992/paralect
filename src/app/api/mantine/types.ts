import { MantineTheme, CSSObject, ContextStylesParams } from '@mantine/core';

export interface ThemeComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultProps?: Record<string, any> | ((theme: MantineTheme) => Record<string, any>);
  classNames?: Record<string, string>;
  styles?:
    | Record<string, CSSObject>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ((theme: MantineTheme, params: any, context: ContextStylesParams) => Record<string, CSSObject>);
  variants?: Record<
    PropertyKey,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (theme: MantineTheme, params: any, context: ContextStylesParams) => Record<string, CSSObject>
  >;
  sizes?: Record<
    PropertyKey,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (theme: MantineTheme, params: any, context: ContextStylesParams) => Record<string, CSSObject>
  >;
}
