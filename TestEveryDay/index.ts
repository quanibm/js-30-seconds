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
    if (!(item as any).pId) {
      res.push(item);
    } else {
      const parent = map[(item as any).pId];
      parent.child = parent.child || [];
      parent.child.push(item);

      const el = map[1];
      el.custom = 123;

      console.log(parent, item, (item as any).pId);
    }
  }
  return res;
};

// const arr = [{id: 1}, {id:2, pId: 1}, {id: 3, pId: 2}, {id: 4}, {id:3, pId: 2}, {id: 5, pId: 4}]
// console.log(
//   fn(arr)
// )
// fn(arr) => [{id: 1, child: [{id: 2, pId: 1, child: [{ id: 3, pId: 2}]}]}, {id: 4, child: [{id: 5, pId: 4}]}]
interface Array<T> {
  bubbleSort(): any;
  selectionSort(): any;
  insertionSort(): any;
}

/**
 * 冒泡排序
 */
Array.prototype.bubbleSort = function() {
  for (let i = 0, len = this.length; i < len; i++) {
    for (let j = 0, len1 = this.length - 1; j < len1; j++) {
      if (this[j] > this[j + 1]) {
        const aux = this[j + 1];
        this[j + 1] = this[j];
        this[j] = aux;
      }
    }
  }
};
// let arr = [1, 7, 6, 2, 4, 3, 9];
// console.log(arr.bubbleSort());

Array.prototype.selectionSort = function() {
  const len = this.length;
  let indexMin
  for (let i = 0; i < len - 1; i++)
  {
    indexMin = i
    for (let j = i + 1; j < len; j++)
    { 
      if(this[indexMin] > this[j])
      {
        indexMin = j
      }
    }
     if (indexMin != i) {
       const aux = this[i];
       this[i] = this[indexMin];
       this[indexMin] = aux;
       console.log(this)
     }
  }
  return this
};
// let arr = [1, 7, 6, 2, 4, 3, 9];
// let arr = [1, 7, 6, 2, 4,32,32,3,112,1,21,3,2,32,3,2,32,4,24,2,31,3,1,3,13,1,3,2,3,23,2,3,231,2,13, 3, 9];
// console.log(arr.selectionSort());

/**
 * 思想
    一般人打扑克牌，整理牌的时候，都是按牌的大小（从小到大或者从大到小）整理牌的，那每摸一张新牌，就扫描自己的牌，把新牌插入到相应的位置。
    插入排序的工作原理：通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

 * 步骤
    1.从第一个元素开始，该元素可以认为已经被排序；
    2.取出下一个元素，在已经排序的元素序列中从后向前扫描；
    3.如果该元素（已排序）大于新元素，将该元素移到下一位置；
    4.重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；
    5.将新元素插入到该位置后；
    6.重复步骤 2~5。

 */
Array.prototype.insertionSort = function() {
  let len = this.length;
  let preIndex, current;
  for (let i = 0;  i < len; i++)
  {
    preIndex = i - 1; 
    current = this[i]
    while (preIndex >= 0 && this[preIndex] > current)
    {
      this[preIndex + 1] = this[preIndex];
      preIndex--;
    }
    if(preIndex + 1 != i) {
      this[preIndex + 1] = current;
    }
  }
  return this
};
// let arr = [1, 7, 6, 2, 4,32,32,3,112,1,21,3,2,32,3,2,32,4,24,2,31,3,1,3,13,1,3,2,3,23,2,3,231,2,13, 3, 9];
// console.log(arr.insertionSort());
