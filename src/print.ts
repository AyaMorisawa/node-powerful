import Task from './task';

export default function print(text: string): Task<void> {
	'use strict';
	return Task.sync<string, void>(console.log.bind(console))(text);
}
