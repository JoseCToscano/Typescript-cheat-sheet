const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["ferofo"]];
const carsByMake2: string[][] = [];

//help with interference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importanteDates: (Date | string)[] = [new Date(), "2030-10-10"];
