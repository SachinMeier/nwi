import {join} from 'node:path';
// import {readdirSync} from 'node:fs';
import {run} from 'node:test';
import {tap} from 'node:test/reporters';

const concurrency = 3;
// 5 mins
const timeout = 1000 * 60 * 5;

const asPath = file => join(file.path, file.name);
const flatten = arr => [].concat(...arr);

const files = [
    "test/lnd_test.js",
];


run({concurrency, files, timeout}).compose(tap).pipe(process.stdout);