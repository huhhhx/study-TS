class Dog {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    // 构造函数中的 this 就是实例对象
    this.name = name;
    this.age = age;
  }
  bark() {
    console.log(`output->this.name`, this.name);
  }
}
