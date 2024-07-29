(function () {
    // 这是一个抽象类 专门用来被继承的
    // 禁止 Animal 被用来直接创建对象
    abstract class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            // 构造函数中的 this 就是实例对象
            this.name = name;
            this.age = age;
        }
    // 定义一个抽象方法
    // 抽象方法使用abstract开头，没有方法体
    // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract bark():void;
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
