/**
 * @file formatter.ts
 * @module formatter
 * @description A module for number formatting.
 */
export const formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});
