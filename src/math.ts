import Task from './task';
import { range, product } from './list';

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
	return Task.resolve(min + Math.floor(Math.random() * (max - min + 1)));
}

export function factorial(n: number): number {
	'use strict';
	return n === 0 ? 1 : product(range(1, n));
}
