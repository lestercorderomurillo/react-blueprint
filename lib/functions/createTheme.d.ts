import { ThemeSchema } from "../types";
/**
 * Function to create a theme based on a schema.
 * @param schema - Schema with media query values.
 * @returns The compiled schema for use into styled components.
 */
export declare const createTheme: (schema: ThemeSchema) => ThemeSchema;
