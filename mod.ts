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
 * } from 'pifplif/utils';
 *
 * formatDateZero(1); // '01'
 * formatter.format(1000); // '1,000.00'
 * strCapitalize('hello'); // 'Hello'
 * strLowercase('HELLO'); // 'hello'
 * strUppercase('hello'); // 'HELLO'
 * ```
 * 
 * @module utils
 */

import { formatDateZero } from './src/formatDateZero';
import { formatter } from './src/formatter';
import { strCapitalize, strLowercase, strUppercase } from './src/string';

export { formatDateZero, formatter, strCapitalize, strLowercase, strUppercase };
