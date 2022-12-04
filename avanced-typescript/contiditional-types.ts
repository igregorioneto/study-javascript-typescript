declare function f<T extends boolean>(x: T): T extends true ? string : number;

let x = f(Math.random() < 0.5);

interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;