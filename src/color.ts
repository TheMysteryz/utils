/**
 * Colors index
 */
const COLORS = {
	red: 1,
	green: 2,
	yellow: 3,
	blue: 4,
	magenta: 5,
	cyan: 6,
	white: 7,
} as const;

/**
 * List of colors
 */
type Color = keyof typeof COLORS;
type Option = {
	foregroundColor?: Color;
	backgroundColor?: Color;
};

const color = (message: string, options?: Option): string => {
	if (!options) return message;

	let colors = [];
	if (options.foregroundColor)
		colors.push('3' + COLORS[options.foregroundColor]);
	if (options.backgroundColor)
		colors.push('4' + COLORS[options.backgroundColor]);

	return `\x1b[1;${colors.join(';')}m${message}\x1b[0m`;
};

/**
 * Colorize a string
 *
 * - List of available colors:
 * ```ts
 * "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white"
 * ```
 *
 * @example
 * ```ts
 * import { cs } from './color';
 *
 * console.log(cs('Hello, World!', { foregroundColor: 'red' }));
 * ```
 * @param message The message
 * @param options **foreground** color | **background** color
 * @returns Return a formated string with color
 */
const cs = (message: string | number, options?: Option): string =>
	color(message.toString(), options);

export type { Color };
export { cs, COLORS };
