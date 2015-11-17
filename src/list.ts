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

export function empty<T>(xs: T[]): boolean {
	'use strict';
	return xs.length === 0;
}
