/**
 * 判断传参是否为可迭代对象
 */
const isArrayLike = obj =>
  obj != null && typeof obj[Symbol.iterator] === "function";

const result0 = isArrayLike(document.querySelectorAll(".className")); // true
const result1 = isArrayLike("abc"); // true
const result2 = isArrayLike(null); // false
// console.log(result0, result1, result2)

/**
 * 判断传参是否为基本数据类型
 */
const isPrimitive = val => Object(val) !== val;

// console.log(
//   isPrimitive(false),
//   isPrimitive('123'),
//   isPrimitive(null),
//   isPrimitive([])
// )

/**
 * 如果一个可枚举对象为空则返回true
 */
const isEmpty = val => val == null || !(Object.keys(val) || val).length;

// console.log(
//   isEmpty([]), // true
//   isEmpty({}), // true
//   isEmpty(""), // true
//   isEmpty([1, 2]), // false
//   isEmpty({ a: 1, b: 2 }), // false
//   isEmpty("text"), // false
//   isEmpty(123), // true - type is not considered a collection
//   isEmpty(true) // true - type is not considered a collection
// );

/**
 * 判断是否传参是否为一个对象
 */
const isObject = obj => obj === Object(obj);

// console.log(
//   isObject([1, 2, 3, 4]), // true
//   isObject([]), // true
//   isObject(["Hello!"]), // true
//   isObject({ a: 1 }), // true
//   isObject({}), // true
//   isObject(true) // false
// );

/**
 * 判断传参是否一个类对象
 */
const isObjectLike = val => val !== null && typeof val === "object";

// console.log(
//   isObjectLike({}), // true
//   isObjectLike([1, 2, 3]), // true
//   isObjectLike(x => x), // false
//   isObjectLike(null) // false
// );

/**
 * 判断val是否为boolean 值
 */
const isBoolean = val => typeof val === "boolean";

// console.log(
//   isBoolean(null), // false
//   isBoolean(false) // true
// );
