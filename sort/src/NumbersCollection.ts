import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }
  /* we add the word get so that we acnn use object.length as usual
   instead of calling it as a function*/
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
