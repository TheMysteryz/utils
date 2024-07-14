/**
 * Sleep for a given number of milliseconds.
 * @param ms number
 * @returns Promise<void>
 * @example
 * ```ts
 * await sleep(1000);
 * ```
 */
export const sleep = (ms: number): Promise<void> =>
	new Promise((r) => setTimeout(r, ms));
