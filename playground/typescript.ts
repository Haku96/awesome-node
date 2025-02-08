// 定义一个函数、类或接口时使用类型变量，而不是具体的类型
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

// 自动推断类型
let swapped = swap([7, 'seven'])

interface Lengthwise {
  length: number
}
// 在类型参数上面写明约束条件，如果不满足条件，编译时就会报错
// T extends { length: number } 就是约束条件，表示类型参数 T 必须满足 { length: number }，否则就会报错
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  return arg
}

loggingIdentity(3)
loggingIdentity({ length: 10, value: 'typescript' })

// TypeScript 提供了一些内置的类型工具，用来方便地处理各种类型，以及生成新的类型
// https://wangdoc.com/typescript/utility

// Record<Keys, Type> 返回一个对象类型，参数Keys用作键名，参数Type用作键值类型。
type T = Record<'a', number>
const _a: T = { a: 1 }

// class
class Person {
  // 成员可以在类的内部和外部访问
  public name: string

  // 成员只能在类的内部访问
  private age: number

  // 成员可以在类的内部和子类中访问
  protected address: string

  // 静态成员（属性和方法）是属于类本身，而不是类的实例
  static version: number = 3.14

  constructor(name: string, age: number, address: string) {
    this.name = name
    this.age = age
    this.address = address
  }

  public greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }

  private getAge(): number {
    return this.age
  }

  protected getAddress(): string {
    return this.address
  }
}

class Employee extends Person {
  private employeeId: number

  constructor(name: string, age: number, address: string, employeeId: number) {
    super(name, age, address)
    this.employeeId = employeeId
  }

  public getEmployeeDetails(): string {
    return `${this.greet()} My employee ID is ${this.employeeId}.`
  }

  public getProtectedAddress(): string {
    return this.getAddress()
  }
}
