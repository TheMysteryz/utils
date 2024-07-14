/**
 * Capitalize the first letter of a string
 * @param str string
 * @returns string
 */
export const strCapitalize = (str?: string): string =>
	(str && str[0]?.toUpperCase() + str.slice(1)) || '';

/**
 * Uppercase a string
 * @param str string
 * @returns string
 */
export const strUppercase = (str?: string): string => str?.toUpperCase() || '';

/**
 * Lowercase a string
 * @param str string
 * @returns string
 */
export const strLowercase = (str?: string): string => str?.toLowerCase() || '';
