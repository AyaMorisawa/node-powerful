export function shuffle<T>(xs: T[]): T[] {
	'use strict';
	let n = xs.length;
	while (n) {
		const i = Math.floor(Math.random() * n--);
		const t = xs[n];
		xs[n] = xs[i];
		xs[i] = t;
	}
	return xs;
}
