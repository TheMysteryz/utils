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
 * } from '@pifplif/utils';
 *
 * formatDateZero(1); // '01'
 * formatter.format(1000); // '1,000.00'
 * strCapitalize('hello'); // 'Hello'
 * strLowercase('HELLO'); // 'hello'
 * strUppercase('hello'); // 'HELLO'
 * copyToClipboard('Hello, world!'); // or
 * copyToClipboard('Hello, world!', {
 * 	onSuccess: (data) => console.log('Copied:', data),
 * 	onError: (error) => console.error('Error:', error),
 * });
 * sleep(1000); // sleep for 1 second
 * console.log(cs('Hello, world!', { foregroundColor: "red" })); // color the text in red
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
