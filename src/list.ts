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

export function sum(xs: number[]): number {
	'use strict';
	let result = 0;
	for (let i = 0, len = xs.length; i < len; ++i) {
		result += xs[i];
	}
	return result;
}

export function product(xs: number[]): number {
	'use strict';
	let result = 1;
	for (let i = 0, len = xs.length; i < len; ++i) {
		result *= xs[i];
	}
	return result;
}
