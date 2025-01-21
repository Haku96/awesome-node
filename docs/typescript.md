### 基础知识

- 类型断言（Type Assertion）可以用来手动指定一个值的类型 `值 as 类型` 或者 `<类型>值`
- 类型推论：如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型

  - 变量初始化时有赋值则默认为初始值的类型
  - 变量初始化时没有赋值则默认为 `any`

- 联合类型：联合类型（Union Types）表示取值可以为多种类型中的一种 `let idCard: string | number`

- 声明文件：当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能，声明文件必需以 `.d.ts` 为后缀。[参考代码](https://github.com/sindresorhus/internal-ip/blob/main/index.d.ts)

- 内置对象是指根据标准在全局作用域（Global）上存在的对象，它们可以直接在 TypeScript 中当做定义好了的类型。[参考资料](https://ts.xcatliu.com/basics/built-in-objects.html)

- 注释指令：采用 JS 双斜杠注释的形式，向编译器发出的命令。[网道](https://wangdoc.com/typescript/comment)

### 实例代码

```ts
// 普通类型，在赋值过程中改变类型是不被允许的
let isDone: boolean = false

// any 类型，在赋值过程中允许被赋值为任意类型
let foo: any = 'foo'

// void 表示没有任何返回值的函数
function logName(): void {
  console.log('Hello World')
}

// 对象类型 Interfaces
// 对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）
interface Person {
  name: string
  age: number
  gender?: 'male' | 'female'
  readonly idCard: number
}
let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male',
  idCard: 350725199205184329,
}

// 数组，相同类型的对象
let fibonacci: number[] = [0, 1, 1, 2, 3, 5]
let reverseFibonacci: Array<number> = [...fibonacci].reverse()

// 元组（Tuple）类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let bar: [string, number] = ['1', 1]

// 函数，需要有输入和输出
function sum(x: number, y: number = 6): number {
  return x + y
}

// 函数重载：允许一个函数接受不同数量或类型的参数时，作出不同的处理
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}

// 枚举（Enum）类型用于取值被限定在一定范围内的场景
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Days['Sun'] === 0) // => true
console.log(Days[0] === 'Sun') // => true

// 抽象类不能被实例化，只能被继承。抽象类可以包含抽象方法，这些方法没有实现，必须在子类中实现
abstract class Animal {
  abstract makeSound(): void

  move(): void {
    console.log('Moving...')
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Barking...')
  }
}

const dog = new Dog()
dog.makeSound()
dog.move()
```
