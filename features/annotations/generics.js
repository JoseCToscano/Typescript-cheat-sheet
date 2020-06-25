var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
function printStrings(arr) {
    arr.map(function (element) {
        console.log(element);
    });
}
function printNumbers(arr) {
    arr.map(function (element) {
        console.log(element);
    });
}
function printAnything(arr) {
    arr.map(function (element) {
        console.log(element);
    });
}
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log("I am a house");
    };
    return House;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log("I am a Car");
    };
    return Car;
}());
function printHousesOrCars(arr) {
    arr.map(function (element) {
        element.print();
    });
}
printHousesOrCars([new House(), new House()]);
//printNumbers([1, 2, 3]);
//printStrings(["a", "b", "c"]);
//printAnything([1, 2]);
var arr = new ArrayOfAnything(["a", 3, "b", "c"]);
