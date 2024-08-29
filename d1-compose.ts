type Increment = (x: number) => number;

const increment: Increment = (x) => x + 1;

console.log(increment(1)); // 2

type ToString = (x: number) => string;
const tostring: ToString = (x) => `"${x}"`;

console.log(tostring(1)); // "1"

type IncrementThenToString = (x: number) => string;
const incrementThenToString: IncrementThenToString = (x) =>
  tostring(increment(x)); // hard-coded composition

console.log(incrementThenToString(68)); // "69"

type SpecificCompose = (
  f: (x: number) => number,
  g: (x: number) => string
) => (x: number) => string;

const specificCompose: SpecificCompose = (f, g) => (x) => g(f(x));

const incrementThenToString2: IncrementThenToString = specificCompose(
  increment,
  tostring
);

console.log("Input 68 - SpecificCompose: ", incrementThenToString2(68)); // "69"

type Compose = <A, B, C>(
  f: (x: A) => B, // Tansforming A to B
  g: (x: B) => C // Transforming B to C
) => (x: A) => C; // Composing f and g => Transforming A to C

const compose: Compose = (f, g) => (x) => g(f(x));

// Compose inferes the correct types, based on the input functions
const incrementThenToString3 = compose(increment, tostring);

console.log("Input 68 - General Compose", incrementThenToString3(68)); // "69"

export {};
