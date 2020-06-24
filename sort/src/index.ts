import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([1000, 3, -5, 0]);
const charactersCollection = new CharactersCollection("Xaayb");
numbersCollection.sort();
charactersCollection.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
