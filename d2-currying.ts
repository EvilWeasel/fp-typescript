function normalSum(a: number, b: number) {
  return a + b;
}

console.log(normalSum(68, 1));

// Currying
function curriedSum(a: number) {
  return (b: number) => a + b;
}

console.log(curriedSum(68)(1));

// Currying with arithmethic lambda
const curriedSumLambda = (a: number) => (b: number) => a + b;

console.log(curriedSumLambda(68)(1));

type Increment = (x: number) => number;
const increment: Increment = curriedSumLambda(1);

console.log(increment(68));

type Decrement = (x: number) => number;

const decrement: Decrement = curriedSumLambda(-1);

console.log(decrement(70));

type Curry2 = <A, B, C>(f: (a: A, b: B) => C) => (a: A) => (b: B) => C;

// Currying with generic function
const curry2: Curry2 = (f) => (a) => (b) => f(a, b);

// make a curried version of normalSum
const sum2 = curry2(normalSum);

console.log(sum2(68)(1));
