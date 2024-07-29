// function fn(a:number):number{
//     return a;
// }


// 在定义函数的时候，如果遇到类型不明确就可以使用泛型

function fn<T>(a:T):T{
    return a;
}

// 可以直接低哦啊用具有泛型的函数

let res = fn(10);   // 不指定泛型 ts可以自动对类型进行推断
let res1 = fn<string>('hello')  // 指定泛型

// 泛型可以同时指定多个
function fn2<T,K>(a:T,b:K):T{
    return a;
}

interface Inter {
    length:number;
}

// 泛型必须是 Inter 的子类
function fn3<T extends Inter>(a:T):number{
    return a.length
}


class myClass<T>{
    name:T;
    constructor(name:T){
        this.name = name
    }
}

const myc = new myClass<string>('hhx')