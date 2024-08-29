function increment(x: number): number {
  return x + 1;
}

function toString(x: number): string {
  return x.toString();
}

const simpleCompose = (f, g) => (x) => f(g(x));

function compose<A, B, C>(f: (x: A) => B, g: (y: B) => C): (z: A) => C {
  return (z: A) => g(f(z));
}

export {};
