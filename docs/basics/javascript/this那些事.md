## this的基础

### 1. this不同情况下的指向/值

1. ###### 在全局上下文

```javascript
console.log(this === window) // global window
```

严格和非严格模式下都是指向全局对象


2. ###### 在函数体内的指向

   this指向取决于函数被调用的方式

   ```javascript
   // 1. 默认全局对象
   function fn1 () {
     return this
   }
   console.log(fn1() === window)
   // 严格模式'use strict'下为undefined
   console.log(fn1 === undefined)
   
   // 2. 被对象调用
   var obj = { a: 'custom' }
   function whatsThis() {
     return this.a;  // this 的值取决于函数被调用的方式
   }
   
   obj.whatsThis = whatsThis
   console.log(obj.whatsThis())
   
   // 当然还有其他改变函数this方式，下面讲
   
   // 3. 类中的this: 指向实例本身
   class Example {
     constructor() {
       this.name = 'a' // 不会增加到this
       const proto = Object.getPrototypeOf(this);
       console.log(this);
       console.log(proto);
       console.log(Object.getOwnPropertyNames(proto));
     }
     first(){}
     second(){}
     static third(){} // 类本身的属性 Example.third 来访问
   }
   
   new Example(); // ['constructor', 'first', 'second']
   // 结论：在类中，会把constructor和其他方法增加到this的原型上
   
   // 4. getter setter中的this
   function sum() {
     return this.a + this.b + this.c
   }
   
   var o = {
     a: 1,
     b: 2,
     c: 3,
     get average() {
       return this.a + this.b + this.c
     }
   }
   
   Object.defineProperty(o, 'sum', {
     get: sum, enumerable: true, configurable: true, writable: true
   })
   
   console.log(o.average, o.sum);
   
   // 5. 作为dom事件处理函数
   var element = document.getElementById('dom')
   function doSomething(e) {
     console.log(this === e.target)
     this.style.color = 'red'
   }
   element.addEventListener('click', doSomething)
   
   ```

```html
// 作为一个内联事件处理函数
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>
```



### 2.改变this指向的几种方式介绍

上面发现This大部分出现函数体内
普通函数改变this的方式：

1. ###### 默认绑定（见上）

2. ###### 隐士绑定（见上）

3. ###### new绑定

new怎么改变this的？

```javascript
function Person (name) {
  this.name = name
}

const p = new Person('jack')
// 1. p是一个对象
// 2. Person函数的this，指向p
// 3. p上有Person的原型上的方法

function new_ (Con, ...arg) {
  const obj = {}
  Object.setPrototypeof(obj, Con.prototype)
  Con.apply(obj, args)
  return obj; //
}

console.log(p)
```

4. ###### 显示绑定

理解为强绑定，使用bind, apply,call强绑定

```javascript
const obj = {
  name: 'jack'
}
function sayHi() {
  console.log('hi,' + this.name)
}
// bind
sayHi.bind(obj)()
sayHi.apply(obj)
sayHi.call(obj)
```



### 3.箭头函数的指向

箭头函数中this：箭头函数没有自己的this，用到的时候只能根据作用域链去寻找最近的那个。
注意⚠️：在定义该函数的时候外层的作用域指向的对象，而不是使用时候的外层作用域指向的对象

所以this 也是会变的：

```javascript
// 1 没有this
var name = 'window'; 
var A = {
   name: 'A',
   getName: () => {
      console.log(this.name)
   }
}

A.getName();

// 2 定义而非使用
function Person(name) {
    this.name = name;
    this.getName = function() {
       console.log(this)
       return () => console.log(this)
    }
}
const cat = new Person('jing')
var a = cat.getName()
a()
var b = cat.getName.call(null)
b()
```

1. 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误。
2. 不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
3. 不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数。



## this进阶

### this进阶题

```javascript
// 隐士绑定 ----------------------------------
function reads() {
    console.log('reads', this.mains)
}

var package = {
    mains: 'package.json',
    reads: function() {
        setTimeout(function(){
            console.log('Hello,',this.mains);
        })
    },
}

var app = {
    mains: 'app.js',
    reads,
}

var mains ='window or golbal';

// A. package B.app c.window
package.reads() // C A
app.reads()   //  B       
setTimeout(app.reads)  // C
setTimeout(() => {
    app.reads() //  c b   
})
setTimeout(app.reads.bind(app)) // 
```



### this的原理

`this`就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境

```javascript
function test() {
    console.log(this.name)
}

const person = {
    name: '张三',
    test,
}
 
var name = 'aaabb'
var getname = person.test

person.test() // 张三
getname() // aaabb
```





## this在框架中的使用

### this在vue中的使用

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="sayHi">
    <h2 @click="sayHello">Welcome to Your Vue.js App</h2>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    sayHi: () => {
      alert('hi, vue')
      console.log(this)
    },
    sayHello() {
      alert('sayHello, vue')
      console.log(this)
    },
  }
}
</script>

<style>
</style>

```

sayHi中的this会丢失为undefined, sayhello就会指向 vm实例
从vue源码运行角度看：



### this在react中的使用

react和vue相反

```jsx
import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
  }
  sayHi = function() {
    alert('hi, world')
    console.log(this)
  }
  sayhello = () => {
    alert('hello, world')
    console.log(this)
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.sayHi}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.sayhello} 
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

```

剥离react带来的心智负担，本质上，上面的代码不过是一个「类」，从react运行角度看这个类：

```javascript
class App {
  constructor() {
  }
  sayHi() {
    alert('hi, world')
    console.log(this)
  }
  sayhello = () => {
    alert('hello, world')
    console.log(this)
  }
}

var ins = new App()
const sayHi = ins.sayHi
const sayhello = ins.sayhello
sayHi()
sayhello()
```
