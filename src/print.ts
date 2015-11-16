import Task from './task';

export default function print<T>(object: T): Task<void> {
	'use strict';
	return Task.sync<void>(() => console.log(object));
}
