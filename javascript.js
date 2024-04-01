console.log("hello javascript")
console.log(1+2)

//const, var, let

const p1 =3.1415;

var x =1;
console.log(x);
var y = 1.4;
console.log(y);
var z = "hello";
console.log(z);
var a =[x, y, z];
console.log(a);
var lst = [1, "0", [1, 2],4.8, true];
console.log(lst);
var obj = {
    name: "mr. x",
    job: "hacker",
    age: 23,
    address: "bangalore",
}
console.log(obj)

let phone = {
    company : {
        name: 'samsung',
        country: 'south korea',
    },
    name: 'galaxy',
    size: 6.5,
    weight: 200,
    color: ['blue', 'red', 'green']
}

let str1 = 'hello';
let str2 = 'world';
let str3 = 'hello world';
console.log(str3);

let outcome = [[1, 3, 2, 4, 5, 6],
               [4, 2, 1, 5, 3, 6],
               [1, 6, 5, 2, 4, 3],
               [4, 3, 1, 2, 6, 5],
               [6, 5, 3, 4, 2, 1],
               [4, 5, 6, 1, 2, 3],
]
console.log(outcome[1][3])//5
console.log(outcome[4][3])//8

let D3 = [
    [
        [1, 2],
        [1, 2]
    ],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [1, 2],
        [1, 2]
    ],
]
