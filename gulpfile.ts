/// <reference path="./typings/bundle.d.ts" />

import { task, src, dest, watch } from 'gulp';
import * as ts from 'gulp-typescript';
import * as tslint from 'gulp-tslint';
import * as merge from 'merge2';
const babel = require('gulp-babel');

const tsProject = ts.createProject('tsconfig.json', <any>{
	typescript: require('typescript')
});

task('build', ['build:ts']);

task('build:ts', () => {
	const tsResult = tsProject.src()
		.pipe(ts(tsProject));
	return merge([
		tsResult.js.pipe(babel())
		.pipe(dest('./built')),
		tsResult.dts.pipe(dest('./built'))
	]);
});

task('watch', ['build', 'lint'], () => {
	watch('./src/**/*.ts', ['build:ts', 'lint']);
});

task('lint', () => {
	return src('./src/**/*.ts')
		.pipe(tslint(<any>{
			tslint: require('tslint')
		}))
		.pipe(tslint.report('verbose'));
});

task('test', ['build', 'lint']);
