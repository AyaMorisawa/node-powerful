export default class Option<T> {
	constructor(private hasValue: boolean, private value: T) {
	}

	static some<T>(value: T): Option<T> {
		return new Option(true, value);
	}

	static none<T>(): Option<T> {
		return new Option(false, null);
	}

	option<U>(value: U, f: (value: T) => U): U {
		return this.hasValue ? f(this.value) : value;
	}

	case<S>(f: (value: T) => Option<S>, g: () => Option<S>): Option<S> {
		return this.hasValue ? f(this.value) : g();
	}

	map<S>(f: (value: T) => S): Option<S> {
		return this.hasValue ? Option.some(f(this.value)) : Option.none<S>();
	}
}
