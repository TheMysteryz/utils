/**
 * Format a number to a string with 2 digits
 *
 * @example
 * ```ts
 * import { formatDateZero } from './formatDateZero';
 *
 * formatDateZero(1); // '01'
 * formatDateZero(12); // '12'
 * ```
 *
 * @param nb number
 * @returns  string
 */
export const formatDateZero = (nb: number): string =>
	nb.toString().padStart(2, '0');
