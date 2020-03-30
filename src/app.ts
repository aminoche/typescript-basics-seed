function sumAll(...arr: Array<number>) {
  console.log(arguments);
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(sum);
