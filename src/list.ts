import Task from './task';

export function shuffle<T>(xs: T[]): Task<T[]> {
	'use strict';
	return Task.sync(() => {
		let n = xs.length;
		while (n) {
			const i = Math.floor(Math.random() * n--);
			const t = xs[n];
			xs[n] = xs[i];
			xs[i] = t;
		}
		return xs;
	});
}

export function isEmpty(xs: { length: number }): boolean {
	'use strict';
	return xs.length === 0;
}

export function replicate<T>(n: number, x: T): T[] {
	'use strict';
	const result: T[] = [];
	for (let i = 0; i < n; ++i) {
		result.push(x);
	}
	return result;
}
