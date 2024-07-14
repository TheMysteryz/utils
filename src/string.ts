/**
 * Capitalize the first letter of a string
 *
 * @example
 * ```ts
 * strCapitalize('hello'); // 'Hello'
 * ```
 *
 * @param str string
 * @returns string
 */
export const strCapitalize = (str?: string): string =>
	(str && str[0]?.toUpperCase() + str.slice(1)) || '';

/**
 * Uppercase a string
 *
 * @example
 * ```ts
 * strUppercase('hello'); // 'HELLO'
 * ```
 *
 * @param str string
 * @returns string
 */
export const strUppercase = (str?: string): string => str?.toUpperCase() || '';

/**
 * Lowercase a string
 *
 * @example
 * ```ts
 * strLowercase('HELLO'); // 'hello'
 * ```
 *
 * @param str string
 * @returns string
 */
export const strLowercase = (str?: string): string => str?.toLowerCase() || '';
