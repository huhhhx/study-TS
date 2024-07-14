class Person {
  // 定义属性实例 通过实例访问
  // readonly 表示只读属性，无法修改
  readonly name: string = "hhx";
  age: number = 18;
  // 定义静态属性 通过类访问
  static place: string = "sc";
  sayHello() {
    console.log(`output`);
  }
}
const per = new Person();
per.age = 18;
