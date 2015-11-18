export function pad(text: string, length: number, padChar: string): string {
	'use strict';
	return (padChar.repeat(length) + text).slice(-length);
}
