const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

const myArray = Array.from(myIterable);
console.log(myArray); // Output: [1, 2, 3]

const mySet = new Set([1, 2, 3]);

mySet[Symbol.iterator] = function* () {
  yield* [...this].sort();
};

for (const value of mySet) {
  console.log(value);
}
// Output: 1, 2, 3

const obj = { a: 1, b: 2, c: 3 };
obj[Symbol.iterator] = function* () {
  for (const key in this) {
    yield key;
  }
};

for (const key of obj) {
  console.log(key);
}









