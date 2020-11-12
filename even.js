const isEven  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(12);
const elevenIsEven = isEven(15);

console.log(tenIsEven);
console.log(elevenIsEven);

//Another way by using function directly in console.log
/*const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));
 */