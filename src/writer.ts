export default class Writer<T, S> {
	constructor(public value: T, public stories: S[]) {
	}

	write<U>(writer: (value: T) => [U, S]): Writer<U, S> {
		const [value, story] = writer(this.value);
		return new Writer(value, [...this.stories, story]);
	}
}
