/**
 * Format a number to a string with 2 digits
 * @param nb number
 * @returns  string
 */
export const formatDateZero = (nb: number): string =>
	nb.toString().padStart(2, '0');
