const normalize = str => {
  const arr = str.match(/\w+/g);
  const createArr = arr => {
    return arr.reduce((obj, val, n, arr) => {
      arr.length > 1 ? (obj.children = createArr(arr.slice(1))) : "";
      obj.value = arr[0];
      return obj;
    }, {});
  };
  return createArr(arr);
};

// console.log(normalize("[abc[bcd[def]]]"));
// '[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}

const fn = arr => {
  const res = [];
  const map = arr.reduce((res, item) => ((res[item.id] = item), res), {});
  for (const item of Object.values(map)) {
    // console.log(item)
    if (!item.pId) {
      res.push(item);
    } else {
      const parent = map[item.pId];
      parent.child = parent.child || [];
      parent.child.push(item);

      const el = map[1];
      el.custom = 123;

      console.log(parent, item, item.pId);
    }
  }
  return res;
};

// const arr = [{id: 1}, {id:2, pId: 1}, {id: 3, pId: 2}, {id: 4}, {id:3, pId: 2}, {id: 5, pId: 4}]
// console.log(
//   fn(arr)
// )
// fn(arr) => [{id: 1, child: [{id: 2, pId: 1, child: [{ id: 3, pId: 2}]}]}, {id: 4, child: [{id: 5, pId: 4}]}]

/**
 * 冒泡排序
 */
Array.prototype.bubbleSort = function() {
  // for (let i =0, len = this.length; i < len; i++)
  // {
  for (let j = 0, len1 = this.length - 1; j < len1; j++) {
    if (this[j] > this[j + 1]) {
      const aux = this[j + 1];
      this[j + 1] = this[j];
      this[j] = aux;
    }
  }
  // }
};
// let arr = [1,2,3,333,4422,1,134,4,4314,143,14,14,3134,1,4134,1,4312341,2414321,414]
// arr.bubbleSort()
// console.log(arr)

Array.prototype.selectionSort = function() {
    let index 
    for (let i = 0, len = this.length - 1; i < len ; i++)
    {
      for (let j = 0, len1 = this.length ; j < len1 ; j++)
      {
        // console.log(this[i], this[j])   
      }
    }
};

let arr = [
  1,
  2,
  3,
  333,
  4422,
  1,
  134,
  4,
  4314,
  143,
  14,
  14,
  3134,
  1,
  4134,
  1,
  4312341,
  2414321,
  414
];
// arr.selectionSort();
// console.log(arr);
