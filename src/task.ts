import Either from './either';
import { range } from './math';

export interface Executor<T> {
	(done: (value: T) => void): void;
}

export default class Task<T> {
	constructor(private executor: Executor<T>) {
	}

	static resolve<T>(value: T): Task<T> {
		return new Task<T>(done => done(value));
	}

	static all<T>(tasks: Task<T>[]): Task<T[]> {
		return new Task<T[]>(done => Promise.all(tasks.map(task => new Promise<T>(task.executor))).then(done));
	}

	static race<T>(tasks: Task<T>[]): Task<T> {
		return new Task<T>(done => Promise.race(tasks.map(task => new Promise<T>(task.executor))).then(done));
	}

	static sync<T>(f: () => T): Task<T> {
		return new Task<T>(done => done(f()));
	}

	static fromPromise<T, S>(f: () => Promise<T>): Task<Either<S, T>> {
		return new Task<Either<S, T>>(done => f().then(
			value => done(Either.right<S, T>(value)),
			reason => done(Either.left<S, T>(reason)))
		);
	}

	static delay(ms: number): Task<void> {
		return new Task<void>(done => setTimeout(done, ms));
	}

	static repeat(times: number, f: (index: number) => Task<void>): Task<void> {
		return range(1, times).map(f).reduce((prev, current) => prev.next(current));
	}

	next<S>(task: Task<S>): Task<S> {
		return this.pipe(() => task);
	}

	pipe<S>(f: (value: T) => Task<S>): Task<S> {
		return new Task<S>(done => this.executor(value => f(value).executor(done)));
	}

	map<S>(f: (value: T) => S): Task<S> {
		return new Task<S>(done => this.executor(value => done(f(value))));
	}

	run(): Promise<T> {
		return new Promise<T>(this.executor);
	}
}
