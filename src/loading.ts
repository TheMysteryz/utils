/**
 * A simple loading spinner.
 * @returns An object containing the `start` and `stop` functions.
 * @example
 * ```ts
 * const { start, stop } = loading();
 * start('Loading...');
 * setTimeout(() => stop('Done!'), 5000);
 * ```
 */
export const loading = (): {
	start: (msg: string) => void;
	stop: (msg: string) => void;
} => {
	let interval: Timer;
	let P = ['\\', '|', '/', '-'];
	let x = 0;

	const clear = () => {
		process.stdout.clearLine(0);
		process.stdout.cursorTo(0);
	};

	const start = (msg: string) => {
		interval = setInterval(() => {
			clear();
			process.stdout.write(P[x++] + ' ' + msg);
			x &= 3;
		}, 250);
	};

	const stop = (msg: string) => {
		clearInterval(interval);
		clear();
		process.stdout.write(msg + '\n');
	};

	return { start, stop };
};
