(function () {
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      // 构造函数中的 this 就是实例对象
      this.name = name;
      this.age = age;
    }
    bark() {
      console.log("汪汪汪");
    }
  }
  class Dog extends Animal {
    place: string;
    constructor(name: string, age: number, place: string) {
      // 子类写了构造函数 必须使用super在子类中对父类调用一次
      super(name, age);
      this.place = place;
    }
    run() {
      console.log("run");
    }
    bark(): void {
      console.log("汪汪汪");
    }
  }
})();
