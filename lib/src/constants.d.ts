export declare const StyleProps: string[];
export declare const TypographyProps: string[];
export declare const ColorPallete: {
    red: string;
    coral: string;
    orange: string;
    gold: string;
    yellow: string;
    lime: string;
    lightGreen: string;
    green: string;
    darkGreen: string;
    nature: string;
    teal: string;
    aqua: string;
    sky: string;
    lightBlue: string;
    blue: string;
    darkBlue: string;
    blueViolet: string;
    violet: string;
    indigo: string;
    purple: string;
    magenta: string;
    pink: string;
    hotPink: string;
    black: string;
    gray: string;
    white: string;
};
export declare const FontSizes: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};
export declare const FontWeights: {
    thinnest: number;
    thin: number;
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    boldest: number;
};
export declare const Spacing: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};
export declare const Breakpoints: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};
/**
 * Regular expression for matching both theme sizes and pixel values
 * Matches patterns like:
 * - xxs, xs, sm, md, lg, xl, xxl
 * - xxl/2xxl through xxl/8xxl
 * - 200px, 10px, etc.
 */
export declare const SizeRegex: RegExp;
export declare const ColorIntensity = "(100|150|200|250|300|350|400|450|500|550|600|650|700|750|800|850|900)";
