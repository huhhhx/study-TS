(function(){
    // 定义一个表示人的类

    // public 修饰的属性可以在任意位置访问（修改）默认修饰符
    // private 私有属性，私有属性只能在类内部进行访问（修改）或者通过在类中添加方法使得私有属性可以被外部访问
    // protected 受保护的类 只能在当前类和当前类的子类中被访问

    class Person {
        private _name: string;
        private _age :number;
        constructor(name:string,age:number){
            this._name = name;
            this._age = age;
        }
        getAge(){
            return this._age;
        }
        setAge(value:number){
            this._age = value
        }

        // ts 中设置getter的方式
        get name(){
            return this._name    // 读取可以直接用实例.name 读取
        }

        set name(value:string){
            this._name = value
        }

    }    


})()