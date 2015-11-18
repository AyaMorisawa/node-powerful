export function id<T>(x: T): T {
	'use strict';
	return x;
}

export function constant<T>(a: T): <S>(b?: S) => T {
	'use strict';
	return <S>(b?: S) => a;
}
