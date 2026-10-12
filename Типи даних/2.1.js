'use strict';

const values = [true, 'hello', 5, 12, -200, false, false, 'word'];
const counts = { number: 0, string: 0, boolean: 0 };

for (const value of values) {
  const type = typeof value;
  counts[type]++;
}

console.dir(counts);