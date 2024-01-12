### javascript

01 作用域与变量提升

02 typeof 和 instanceof 原理

03 new操作符

05 原型与原型链

06 浅拷贝与深拷贝

07 异步 （一）

08 异步（二）

09 防抖

10 节流

11 BOM

12 DOM

13 DOM 事件

14 跨域

15 浏览器存储

16 浮点数精度问题

17 http

18 https

19 浏览器安全之XSS

20 浏览器安全之CSRF

#### css

盒模型

BFC

flex

响应式

scss

css动画

svg

canvas

### 框架

1.vue之生命周期

2.vue之mvvm

3 vue之virtual dom

4 vue之dom diff算法

5 react 生命周期

6 react 事件

7 react高级特性

8 react hooks

### 前端工程化

webpack-loader

webpack-plugin

webpack热更新

webpack-proxy

### 前端性能优化

- url 传输过程

- https://github.com/Yuanfang-fe/Blog-X/issues/21

- https://github.com/alex/what-happens-when

- 浏览器渲染机制

- [渲染页面：浏览器的工作原理 - Web 性能 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work)

- https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/

- 浏览器performace

- [Performance - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance)

- https://developer.chrome.com/docs/devtools/evaluate-performance/

- [详解谷歌浏览器 performance 选项卡_杏子_1024的博客-CSDN博客_谷歌performance](https://blog.csdn.net/weixin_44135121/article/details/103998869)

- 前端优化手段

- https://segmentfault.com/a/1190000022205291

- https://www.zhihu.com/question/40505685

- [快速加载](https://web.dev/fast/)

浏览器输入url后的整个过程

浏览器的渲染机制

浏览器性能监控performance

前端优化性能的手段

### git

git 的工作原理

git的常用命令

git 冲突

### 算法

盘点Js内的所有循环

盘点数组与对象的内置方法

时间复杂度和空间复杂度

谈谈你对数据结构的理解

栈

队列

集合

字典

链表

树

排序算法

查找算法

算法设计-分治

算法设计-贪心

数组去重

### 面试题

part1: 

1. js中有哪些方式可以改变js指向? 他们都有哪些不同？

2. 检测数据类型的方法有哪些？都有什么区别？

3. 说说你对闭包的理解？以及闭包的使用场景？

4. 谈谈你对BFC的理解？

5. 平常使用说明构建工具？ 这个工具(如webpack)的构建流程是什么？

6. SPA 有什么优缺点吗？ 怎么解决首屏加载慢问题？

7. 使用git 代码出现代码冲突一般是怎么解决的？

8. 有很多li标签且顺序不固定，怎么把最后一个class为b的li改为红色

9. 为什么说https比http安全？https是如何保证安全的？

10. 前端怎么做性能优化？ 平常在公司内都做过哪些关于性能优化上的工作吗？

11. 【编程题】反转整数

12. 要求：123->321; -321 -> -123; 1200 -> 21；0->0;

part2:

1. 单行文本溢出和多行文本（两行超过宽度显示...）溢出处理？
2. 让chrome支持小于12px的字体显示，你有哪些实现方法？
3. js中的数字精度丢失的原因是什么？如何解决此类问题？如0.1+0.2 !=0.3
4. js中的本地存储有哪些？什么区别？ 在什么业务场景下应用的？
5. 什么是内存泄漏？js中的垃圾回收机制是什么样的？
6. http中 get 和 post 什么区别？
7. react中类组件和函数组件分别是什么？都有什么区别？
8. 如何判断浏览器是否支持es6的特性？
9. web常见的攻击方式有哪些？一般怎么防御？
10. 实现Promise.all()

part3:

1. ```css
    [1,2,3].map(parseInt)的返回值是什么
      
   <style>
       body{
         font-size: 15px;
       line-height: 2;
     }
     p{
         font-size:16px;
     }
   </style>
   <body>
     <p>hello world</p>
   </body>
   ```

2. p标签内的line-height是多少？为什么？

3. 怎么处理跨域问题的？

4. jsonp的原理是什么？

5. react中jsx转换成真实Dom的过程？

6. 平常什么场景下使用cdn? cdn的原理是什么？

7. 从输入url到渲染出页面的整个过程？

8. 手写防抖以及防抖的应用场景

9. 手写节流以及节流的应用场景

part4:

1.script 标签中 defer 和 async 的区别

2.什么是重绘和回流？一般都发生在什么场景？如何避免？

3.箭头函数和普通函数的区别？

4.箭头函数如何获取参数

5.可以实现异步的方式有哪些？它们都有什么区别？

6.js 随机打乱一个数组？ 如input: [1,2,3] output: [2,3,1] ....

7.写一个方法，add(a,b,c,d...z)和add(a)(b)(c)...(z)结果一致

part5:

1. tree-shaking是什么？描述一下它的原理？
2. webpack的热更新是什么？描述一下原理？
3. z-index属性在什么情况下会失效
4. 框架中的v-for为什么要用key?
5. 什么是AMD、CMD、UMD?有什么区别？
6. http 1.0、1.1、2.0的区别？知道http3.0吗？
7. 设计一段程序将string转为number（不可以使用parseInt 及number方法）

part6:

- css 如何实现样式隔离 css
- js中 new方法都做了些什么？javascript
- 如何判断一个div块在可视区域内？开放性
- Preload 和 prefetch 是什么？什么区别？performance
- 实现一个发布订阅模式编码题目
- 求解平方根（不能使用math.sqrt()）编码题目



part7:

- 如何解决移动端的1px问题 css

- 说说浏览器的缓存策略机制 浏览器

- babel 是什么？ 原理是什么？ 工程化

- 了解过前端监控吗？它是如何监听js异常的？前端监控

- 了解单例模式吗？简单实现一下 js设计

- 设计一个方法，找出这个二维数组内的数组的交集 基础编程

- input： [[1,3,5,7], [3,5,8],[3,5,9,11]]

- output: [3,5]

- 设计一个方法计算器，这个方法可以实现基础的加减乘除运算，并且支持链式调用 基础编程

- new Cal(0).add(5).sub(1).sub(1).mul(10).mul(5).div(5)




https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/

[渲染页面：浏览器的工作原理 - Web 性能 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work)

[应用评测 | 性能魔方mmTrix](http://www.mmtrix.com/evaluate/applist)

[Blog](https://web.dev/blog/)

[ProcessOn思维导图、流程图-思维导图模板_思维导图软件免费下载_在线作图协作工具](https://www.processon.com/;jsessionid=B2CCA4D6CE5B4C24F6610BBFB28F75CC.jvm1)

[前言 | 大厂面试题每日一题](https://q.shanyue.tech/engineering/)

[web前端面试 - 面试官系列](https://vue3js.cn/interview/)

https://astexplorer.net/

https://shenjunhong.gitbook.io/blog/webpack/webpack-an-xu-jia-zai-de-yuan-li

[内网穿透（测试版）--已废弃 - 钉钉开放平台](https://open.dingtalk.com/document/resourcedownload/http-intranet-penetration)

https://react.iamkasong.com/

[自顶向下学 React 源码 - 思否编程 - 学编程，来思否，升职加薪快人一步](https://ke.segmentfault.com/course/1650000023864436)

https://leetcode-solution.cn/91?tab=agenda



navicat永久激动教程：https://learnku.com/articles/67706

1. https://pcaaron.github.io/pages/fe/webpack/principle.html#%E5%88%86%E6%9E%90webpack%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6

2. https://shenjunhong.gitbook.io/blog/webpack/webpack-an-xu-jia-zai-de-yuan-li

3. https://segmentfault.com/a/1190000039149471

4. https://www.html5iq.com/5fe8029ca1fe3d72b82e0b45.html

5. http://interview.poetries.top/docs/base.html#%E4%B8%80%E3%80%81html%E3%80%81http%E3%80%81web%E7%BB%BC%E5%90%88%E9%97%AE%E9%A2%98

6. https://vue3js.cn/interview/

7. https://q.shanyue.tech/engineering/

9. https://webpack.wuhaolin.cn/4%E4%BC%98%E5%8C%96/4-10%E4%BD%BF%E7%94%A8TreeShaking.html

10. https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work

11. https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/

12. https://www.yuque.com/lkli50/hr02ph/dw7xk3

13. https://lgedu.yuque.com/docs/share/9789bc95-2db9-4097-9d75-4977c6124ff2

14. https://astexplorer.net/

15. [babel | NorthUnicorn](https://songge7777.github.io/article/babel.html#babel-%E6%8F%92%E4%BB%B6)

16. [@babel/types · Babel](https://babeljs.io/docs/en/babel-types#expression)