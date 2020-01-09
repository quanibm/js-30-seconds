const log = console.log;

/**
 * 对基本类型数组进行去重
 */
const unique_elements = arr => [...Array.from(new Set(arr))];
// log(
//   uniqueElements([1, 2, 2, 3, 2, 3, 2, false,   false, false, false, 3, 2, 3, 2, 3, 2, 3, 4, 4, 5]) // [1, 2, 3, 4, 5]
// );

/**
 * 合并两个基本数据类型数组,并去重
 */
const union = (a, b) => [...Array.from(new Set([...a, ...b]))];
// log(
//   union([1,2,3], [3,4,5])
// )

/**
 * 数组中随机取一个值
 */
const sample = arr => arr[Math.floor(Math.random() * arr.length)];
// log(
//   sample([3, 7, 9, 11, 12, 33, 322]) // 9
// )

/**
 * 去除数组第一项
 */
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
// log(
//   tail([3, 7, 9, 11, 12, 33, 322]) // 9
// )

/**
 * 选择数组元素
 */
const nth_element = (arr, n) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];
// log(
//   nth_element(["a", "b", "c"], 1), // 'b'
//   nth_element(["a", "b", "b"], -3) // 'a'
// );


/**
 *  
 */
const pullAtValue = (arr, pullArr) => {
  let removed = [],
    push2Removed = arr.forEach(val => pullArr.includes(val) ? removed.push(val) : val),
    mutateTo = arr.filter(val => !pullArr.includes(val))
    arr.length = 0;
    mutateTo.forEach(val => arr.push(val))
    return removed
}

let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
// log(pulled, myArray)