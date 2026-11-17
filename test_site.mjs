import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
assert.match(page, /<h1>Hi, I’m Sambhav/);
assert.match(page, /https:\/\/dhh\.smugcurve13\.com/);
assert.match(page, /https:\/\/sambhavsoni\.is-a\.dev/);
assert.match(page, /<meta name="viewport"/);
console.log('site checks passed');
