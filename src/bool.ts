import Task from './task';
import { randomInteger } from './math';

export function random(): Task<boolean> {
	'use strict';
	return randomInteger(0, 1).map(x => x === 1 ? true : false);
}
