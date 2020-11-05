title: 代码规范
categories:
 - JavaScript
author: 宋玉
date: 2020-11-05 12:32:18
---

## 一、变量

### 用有意义且常用的单词命名
```
// Bad:
const yyyymmdstr = moment().format('YYYY/MM/DD');
// Good:
const currentDate = moment().format('YYYY/MM/DD');
```

### 保持统一
对同一类型的变量使用相同的命名保持统一：
```
// Bad:
getUserInfo();
getClientData();
getCustomerRecord();
// Good:
getUser()
```

### 每个常量(全大写)都该命名
可以用 `ESLint` 检测代码中未命名的常量。
```
// Bad:
// 其他人知道 86400000 的意思吗？
setTimeout( blastOff, 86400000 );
// Good:
const MILLISECOND_IN_A_DAY = 86400000;
setTimeout( blastOff, MILLISECOND_IN_A_DAY );
```

### 避免无意义的前缀
如果创建了一个对象 car，就没有必要把它的颜色命名为 carColor。
```
// Bad:
const car = {
    carMake: 'Honda',
    carModel: 'Accord',
    carColor: 'Blue'
};
function paintCar( car ) {
    car.carColor = 'Red';
}
// Good:
const car = {
    make: 'Honda',
    model: 'Accord',
    color: 'Blue'
};
function paintCar( car ) {
    car.color = 'Red';
}
```

### 传参使用默认值
```
// Bad:
function createMicrobrewery( name ) {
    const breweryName = name || 'Hipster Brew Co.';
    // ...
}
// Good:
function createMicrobrewery( name = 'Hipster Brew Co.' ) {
    // ...
}
```

## 二、函数

### 函数参数( 最好 2 个或更少 )
如果参数超过两个，建议使用 ES6 的解构语法，不用考虑参数的顺序。
```
// Bad:
function createMenu( title, body, buttonText, cancellable ) {
    // ...
}
// Good:
function createMenu( { title, body, buttonText, cancellable } ) {
    // ...
}
createMenu({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
});
```

### 一个方法只做一件事情
这是一条在软件工程领域流传久远的规则。严格遵守这条规则会让你的代码可读性更好，也更容易重构。如果违反这个规则，那么代码会很难被测试或者重用。
```
// Bad:
function emailClients( clients ) {
    clients.forEach( client => {
        const clientRecord = database.lookup( client );
        if ( clientRecord.isActive() ) {
            email( client );
        }
    });
}
// Good:
function emailActiveClients( clients ) {
    clients
        .filter( isActiveClient )
        .forEach( email );
}
function isActiveClient( client ) {
    const clientRecord = database.lookup( client );    
    return clientRecord.isActive();
}
```

### 函数名上体现它的作用
```
// Bad:
function addToDate( date, month ) {
    // ...
}
const date = new Date();
// 很难知道是把什么加到日期中
addToDate( date, 1 );
// Good:
function addMonthToDate( month, date ) {
    // ...
}
const date = new Date();
addMonthToDate( 1, date );
```

### 删除重复代码，合并相似函数
很多时候虽然是同一个功能，但由于一两个不同点，让你不得不写两个几乎相同的函数。
```
// Bad:
function showDeveloperList(developers) {
  developers.forEach((developer) => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink
    };
    render(data);
  });
}
function showManagerList(managers) {
  managers.forEach((manager) => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio
    };
    render(data);
  });
}
// Good:
function showEmployeeList(employees) {
  employees.forEach(employee => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();
    const data = {
      expectedSalary,
      experience,
    };
    switch(employee.type) {
      case 'develop':
        data.githubLink = employee.getGithubLink();
        break
      case 'manager':
        data.portfolio = employee.getMBAProjects();
        break
    }
    render(data);
  })
}
```

### 使用 Object.assign 设置默认属性
```
// Bad:
const menuConfig = {
  title: null,
  body: 'Bar',
  buttonText: null,
  cancellable: true
};
function createMenu(config) {
  config.title = config.title || 'Foo';
  config.body = config.body || 'Bar';
  config.buttonText = config.buttonText || 'Baz';
  config.cancellable = config.cancellable !== undefined ? config.cancellable : true;
}
createMenu(menuConfig);
// Good:
const menuConfig = {
  title: 'Order',
  // 不包含 body
  buttonText: 'Send',
  cancellable: true
};
function createMenu(config) {
  config = Object.assign({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
  }, config);
  // config : {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}
createMenu(menuConfig);
```

### 尽量不要写全局方法
在 JavaScript 中，永远不要污染全局，会在生产环境中产生难以预料的 bug。举个例子，比如你在 Array.prototype 上新增一个 diff 方法来判断两个数组的不同。而你同事也打算做类似的事情，不过他的 diff 方法是用来判断两个数组首位元素的不同。很明显你们方法会产生冲突，遇到这类问题我们可以用 ES2015/ES6 的语法来对 Array 进行扩展。
```
// Bad:
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
};
// Good:
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));        
  }
}
```

### 尽量别用“非”条件句
```
// Bad:
function isDOMNodeNotPresent(node) {
  // ...
}
if (!isDOMNodeNotPresent(node)) {
  // ...
}
// Good:
function isDOMNodePresent(node) {
  // ...
}
if (isDOMNodePresent(node)) {
  // ...
}
```

### 不要过度优化
现代浏览器已经在底层做了很多优化，过去的很多优化方案都是无效的，会浪费你的时间。
```
// Bad:
// 现代浏览器已对此( 缓存 list.length )做了优化。
for (let i = 0, len = list.length; i < len; i++) {
  // ...
}
// Good:
for (let i = 0; i < list.length; i++) {
  // ...
}
```

### 删除弃用代码
这里没有实例代码，删除就对了

## 三、类

### 使用 ES6 的 class
在 ES6 之前，没有类的语法，只能用构造函数的方式模拟类，可读性非常差。
```
// Good:
// 动物
class Animal {
  constructor(age) {
    this.age = age
  };
  move() {};
}
// 哺乳动物
class Mammal extends Animal{
  constructor(age, furColor) {
    super(age);
    this.furColor = furColor;
  };
  liveBirth() {};
}
// 人类
class Human extends Mammal{
  constructor(age, furColor, languageSpoken) {
    super(age, furColor);
    this.languageSpoken = languageSpoken;
  };
  speak() {};
}
```

### 使用链式调用
这种模式相当有用，可以在很多库中都有使用。它让你的代码简洁优雅。
```
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }
  setMake(make) {
    this.make = make;
  }
  setModel(model) {
    this.model = model;
  }
  setColor(color) {
    this.color = color;
  }
  save() {
    console.log(this.make, this.model, this.color);
  }
}
// Bad:
const car = new Car('Ford','F-150','red');
car.setColor('pink');
car.save();
// Good:
const car = new Car('Ford','F-150','red')
  .setColor('pink');
  .save();
```

## 四、异步

### 使用 promise 或者 Async/Await 代替回调
```
// Bad:
get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin', (requestErr, response) => {
  if (requestErr) {
    console.error(requestErr);
  } else {
    writeFile('article.html', response.body, (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
      } else {
        console.log('File written');
      }
    });
  }
});
// Good:
get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin')
  .then((response) => {
    return writeFile('article.html', response);
  })
  .then(() => {
    console.log('File written');
  })
  .catch((err) => {
    console.error(err);
  });
// perfect:
async function getCleanCodeArticle() {
  try {
    const response = await get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin');
    await writeFile('article.html', response);
    console.log('File written');
  } catch(err) {
    console.error(err);
  }
}
```



## [这样写的 JS 代码看着就很舒服](https://mp.weixin.qq.com/s/wfNOed913zeEZQhNnZAjjQ)
