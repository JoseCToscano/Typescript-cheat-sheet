export class Attributes<T> {
  constructor(private data: T) {}
  // sintaxis para poder tener los types segun cada Key correspondiente de T
  // K toma los valores de los keys de T
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
