import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
assert.match(page, /<h1>Hi, I’m Sambhav/);
assert.match(page, /https:\/\/dhh\.smugcurve13\.com/);
assert.match(page, /https:\/\/sambhavsoni\.is-a\.dev/);
assert.match(page, /<meta name="viewport"/);
const styles = readFileSync(new URL('./styles.css', import.meta.url), 'utf8');
assert.match(styles, /--accent: #00f5bd/);
assert.match(styles, /--ink: #e8fff3/);
console.log('site checks passed');
