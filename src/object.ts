export function merge<T, U>(source1: T, source2: U): T & U;
export function merge<T, U, V>(source1: T, source2: U, source3: V): T & U & V;
export function merge<T, U, V, W>(source1: T, source2: U, source3: V, source4: W): T & U & V & W;
export function merge(...sources: any[]): any {
	'use strict';
	return Object.assign({}, ...sources);
}
