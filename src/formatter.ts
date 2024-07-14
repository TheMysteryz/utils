/**
 * A module for number formatting.
 *
 * @example
 * ```ts
 * import { formatter } from './formatter';
 *
 * formatter.format(123456.789); // 123,456.79
 * ```
 */
export const formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});
