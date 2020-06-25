class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

function printStrings(arr: string[]): void {
  arr.map((element: string) => {
    console.log(element);
  });
}
function printNumbers(arr: number[]): void {
  arr.map((element: number) => {
    console.log(element);
  });
}
function printAnything<T>(arr: T[]): void {
  arr.map((element: T) => {
    console.log(element);
  });
}

class House {
  print() {
    console.log("I am a house");
  }
}

class Car {
  print() {
    console.log("I am a Car");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  arr.map((element: T) => {
    element.print();
  });
}

printHousesOrCars<House>([new House(), new House()]);
//printNumbers([1, 2, 3]);
//printStrings(["a", "b", "c"]);
//printAnything([1, 2]);

const arr = new ArrayOfAnything(["a", 3, "b", "c"]);
