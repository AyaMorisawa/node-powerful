import Task from './task';

export interface Point {
	x: number;
	y: number;
}

export function distance(point1: Point, point2: Point): number {
	'use strict';
	return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
}

export function randomInteger(min: number, max: number): Task<number> {
	'use strict';
	return Task.sync(() => min + Math.floor(Math.random() * (max - min + 1)));
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

export function factorial(n: number): number {
	'use strict';
	return n === 0 ? 1 : product(range(1, n));
}

export function range(from: number, to: number): number[] {
	'use strict';
	let result: number[] = [];
	for (let i = from; i <= to; ++i) {
		result.push(i);
	}
	return result;
}
