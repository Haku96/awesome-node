<div align="center">
  <h1>Typescript</h1>
</div>

### 1. 起源

> TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

1. 为 Javascript 提供类型支持
2. 为 Javascript 提供编译支持，提供类似 Babel 的效果将浏览器暂未支持的语法编译到低版本浏览器也能运行的语法

### 2. 基础知识

- VSCode 插件与配置
- 常用注释与最佳实践
- esno 等编译工具的使用与学习

```ts
// Array<数组类型> 或 数组类型[]
const arrOne: string[] = []
const arrTwo: Array<string> = []

// 对象 interface, 推荐 Pascal 命名
interface User {
  /**
   * @description name of the user
   */
  name: string
  age: number
  gender?: string
}

const Jerry: User = {
  name: 'Jerry',
  age: 20,
}

// enum 枚举，相关常量放在一个容器里面，方便使用
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

const right = Direction.Right
```

### 3. 函数

```ts
// 类型别名
type Sum = (a: number, b: number) => number

const sum = function (a: number, b: number): number {
  return a + b
}

const add: Sum = function (a, b) {
  return a + b
}

// 函数重载：根据参数类型不同，执行不同逻辑的行为，基于 typeof 等实现
// TypeScript 的重载属于伪重载，只能在类型层面实现重载的效果，实际的逻辑运行，由于 JavaScript 不支持，对比 Java 等语言无法真正实现
```

### 4. class

```ts
/** @link https://wangdoc.com/typescript/class */
```

### 5. 泛型，动态类型参数

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0]
}

getFirst<string>(['1'])
```

### 6. 类型工具，处理各种类型，以及生成新的类型

- [内置工具类型](https://github.com/Haku96/NuggetsBooklet/tree/master/TypeScript%20%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B)

```ts
// 大部分工具类型都是成对出现的
// Partial，它接收一个对象类型，并将这个对象类型的所有属性都标记为可选
// Required，它接收一个对象类型，并将这个对象类型的所有属性都标记为必填
// Readonly
interface User {
  name: string
  age: number
  email: string
}

type PartialUser = Partial<User>

// Record，返回一个对象类型，参数Keys用作键名，参数Type用作键值类型
type UserProps = 'name' | 'job' | 'email'
type User = Record<UserProps, string>

const _user: User = {
  name: 'John Doe',
  job: 'fe-developer',
  email: 'john.doe@example.com',
}

// Pick，返回一个对象类型，从类型中筛选部分
// Omit，返回一个对象类型，从类型中反向筛选部分
```

### 7. 未分类

- [类型声明](https://wangdoc.com/typescript/d.ts)
- [any-unknown-never](https://wangdoc.com/typescript/any)
