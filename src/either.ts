export enum EitherType {
	Left,
	Right
}

export default class Either<T, S> {
	constructor(private type: EitherType, private leftValue: T, private rightValue: S) {
	}

	static left<T, S>(value: T): Either<T, S> {
		return new Either<T, S>(EitherType.Left, value, null);
	}

	static right<T, S>(value: S): Either<T, S> {
		return new Either<T, S>(EitherType.Right, null, value);
	}

	either<U>(f: (value: T) => U, g: (value: S) => U): U {
		return this.type === EitherType.Left ? f(this.leftValue) : g(this.rightValue);
	}

	case<U, V>(f: (value: T) => Either<U, V>, g: (value: S) => Either<U, V>): Either<U, V> {
		return this.type === EitherType.Left ? f(this.leftValue) : g(this.rightValue);
	}

	mapLeft<U>(f: (value: T) => U): Either<U, S> {
		return this.type === EitherType.Left
			? Either.left<U, S>(f(this.leftValue))
			: Either.right<U, S>(this.rightValue);
	}

	mapRight<U>(f: (value: S) => U): Either<T, U> {
		return this.type === EitherType.Right
			? Either.left<T, U>(this.leftValue)
			: Either.right<T, U>(f(this.rightValue));
	}
}
