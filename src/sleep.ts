/**
 * Sleep for a given number of milliseconds.
 *
 * @example
 * ```ts
 * await sleep(1000);
 * ```
 *
 * @param ms number
 * @returns Promise<void>
 */
export const sleep = (ms: number): Promise<void> =>
	new Promise((r) => setTimeout(r, ms));
