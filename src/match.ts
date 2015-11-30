import Option from './option';

export default class Match<T, S> {
	result = Option.none<S>();

	constructor(public target: T) {
	}

	is(compared: T, then: (target?: T) => S): Match<T, S> {
		return this.when(target => target === compared, then);
	}

	when(predicate: (target: T) => boolean, then: (target?: T) => S): Match<T, S> {
		this.result = this.result.noneToOption(
			() => predicate(this.target) ? Option.some(then(this.target)) : Option.none<S>()
		);
		return this;
	}

	getValue(defaultValue: S): S {
		return this.result.getValue(defaultValue);
	}
}
