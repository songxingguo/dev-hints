title: 常用排序
categories:
 - JavaScript
author: 宋玉
date: 2020-07-31 10:17:14
---

## Sorting Algorithms in Javascript
> This is just for quick reference does not really talk about CS theory for now.


### [Bubble Sort](https://h3manth.com/javascript-sorting/#bubble-sort-)
```javascript
let compare = (n1, n2) => n1 - n2;
let bubbleSort = (arr, cmp = compare) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (cmp(arr[j], arr[j - 1]) < 0) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
};
```

### [Insertion Sort](https://h3manth.com/javascript-sorting/#insertion-sort-)
```javascript
let insertionSort = (arr) => {
    for (let i = 0; i < a.length; i++) {
        let toCmp = arr[i];
        for (let j = i; j > 0 && toCmp < a[j - 1]; j--)
            arr[j] = a[j - 1];
        arr[j] = toCmp;
    }
    return arr;
}
```

### [Selection Sort](https://h3manth.com/javascript-sorting/#selection-sort-)
```javascript
var selectionSort = function (arr) {
  let i,m,j;
  for (i = -1; ++i < a.length;) {
    for (m = j = i; ++j < a.length;) {
      if (arr[m] > arr[j]) m = j;
    }
    [arr[m], arr[i]] = [arr[i], arr[m]];
 }
 return arr;
}
```

### [Merge Sort](https://h3manth.com/javascript-sorting/#merge-sort-)
```javascript
let mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  let middle = parseInt(arr.length / 2),
  left = arr.slice(0, middle),
  right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
let merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    left[0] <= right[0] ?
    result.push(left.shift()) :
    result.push(right.shift());
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}
```

### [Quick Sort](https://h3manth.com/javascript-sorting/#quick-sort-)
```javascript
let quicksort = function(arr) {
  if(arr.length <= 1) return arr;
  let pivot = Math.floor((arr.length -1)/2);
  let val = arr[pivot], less = [], more = [];
  arr.splice(pivot, 1);
  arr.forEach(function(e,i,a){
    e < val ? less.push(e) : more.push(e);
  });
  return (quicksort(less)).concat([val],quicksort(more))
}
```

## 比较
![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1596122574732-876f0f01-a567-4650-8216-19f5b8a2cc4c.png#align=left&display=inline&height=453&margin=%5Bobject%20Object%5D&name=image.png&originHeight=588&originWidth=968&size=435552&status=done&style=none&width=746)

## 参考

- [参考链接](https://h3manth.com/javascript-sorting/)
- [十大经典排序](https://www.cnblogs.com/itsharehome/p/11058010.html)
- [阮一峰教程](https://javascript.ruanyifeng.com/library/sorting.html#toc8)
