import Task from './task';

export default function print(text: string): Task<void> {
	'use strict';
	return Task.sync<void>(() => console.log(text));
}
