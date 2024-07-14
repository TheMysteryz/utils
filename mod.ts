/**
 * Pifplif utils functions
 *
 * @example
 * ```ts
 * import {
 * 	formatDateZero,
 * 	formatter,
 * 	strCapitalize,
 * 	strLowercase,
 * 	strUppercase,
 * 	copyToClipboard,
 * 	sleep,
 * 	cs, // color
 * 	loading,
 * } from '@pifplif/utils';
 *
 * // date format
 * formatDateZero(1); // '01'
 * // formatter (currency)
 * formatter.format(1000); // '1,000.00'
 * // string
 * strCapitalize('hello'); // 'Hello'
 * strLowercase('HELLO'); // 'hello'
 * strUppercase('hello'); // 'HELLO'
 * // copy to clipboard
 * copyToClipboard('Hello, world!'); // or
 * copyToClipboard('Hello, world!', {
 * 	onSuccess: (data) => console.log('Copied:', data),
 * 	onError: (error) => console.error('Error:', error),
 * });
 * // sleep
 * sleep(1000); // sleep for 1 second
 * // color
 * console.log(cs('Hello, world!', { foregroundColor: "red" })); // color the text in red
 * // loading spinner
 * const {start, stop} = loading(); // start and stop loading spinner
 * start('Loading...');
 * setTimeout(() => stop('Done!'), 5000);
 * ```
 *
 * @module utils
 */

export { copyToClipboard } from './src/copyToClipboard.ts';
export { formatDateZero } from './src/formatDateZero.ts';
export { formatter } from './src/formatter.ts';
export { strCapitalize, strLowercase, strUppercase } from './src/string.ts';
export { sleep } from './src/sleep.ts';
export { cs, COLORS, type Color } from './src/color.ts';
export { loading } from './src/loading.ts';
