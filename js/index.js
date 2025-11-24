// console.log("Welcome external js");
// "https://chatgpt.com/share/691edc47-77cc-800c-9f2d-264760d42961"
// // let or const

// let a ="10"
// let b = 10
// console.log(typeof a , typeof b);

// console.log(a == b);
// console.log(a === b);
// console.log(a !== b);


// const x = ""
// const y = 0
// const z = false

// const m = " " 
// let n = 1
// n+=10
// const o = true

// const ok = null
// let yes; 
// // ++a
// console.log(n && "fine");


// console.log(10 == 10 && "its equal");
// console.log(10 != 10 || "its equal");
// console.log(null && "its null");
// console.log(null || "its null");

// console.log(10 == 10 ?? "its equal");
// console.log(null ?? "its equal");
// console.log(undefined ?? "its equal");
// console.log(false ?? "its equal");

// console.log("5"+3);
// console.log("5"-3);
// console.log(Math.floor(30/7));


// const [q,w,e] = [10,20,30]
// console.log(q,w,e);


let num = [1,2,3,4,5]
const add = (a,b=100)=>a+b

console.log(num);
console.log(typeof num);
const n = new Array(10).fill(10,3,5)
console.log(num.length,n.length);
console.log(n);

num[3] =100
console.log(num);
num.push(120)
num.push(140)
console.log(num);
num.pop()
console.log(num);
num.shift()
console.log(num);

num.unshift(40)
console.log(num);

const newArr = num.slice(0,3)
console.log(newArr,num);

console.log(num);
console.log(
    num.filter(val=>val >= 10).reduce((prev,curr)=>prev+curr,0)
);


const newArr1 = num.splice(1,2)
console.log(num);
console.log(newArr1);

num.reverse()
console.log(num);

const fruits = ["apple","orange","grapes","banana","aa"]

// const uppercase = (val,id,arr)=>{
//     console.log(val);
//     console.log(id);
//     console.log(arr);
    
    
    
// }

const newAr = fruits.forEach(
(val,id,arr)=>{
    console.log(val);
    console.log(id);
    console.log(arr);   
    return val.toUpperCase()[0]+val.slice(1)
}
)
console.log(newAr);

const newAr1 = fruits.map(
(val,id,arr)=>{
    console.log(val);
    console.log(id);
    console.log(arr); 
    return val.toUpperCase()[0]+val.slice(1)
}
)
console.log(newAr1);

const numbers = [1,2,3,4,5,6,7,8,9,10]

console.log(
    numbers.map(val=>{
        if(val%2==0) return val
    })
);

console.log(
    numbers.filter(val=>val<4)
);
const evenArr = numbers.filter(val=>val>6)
console.log(evenArr.push(1));
console.log(evenArr);


console.log(evenArr.find(val=>val%2==0));
console.log(evenArr.findIndex(val=>val%2==0));
console.log(evenArr.findLastIndex(val=>val%2==0));


const n1 = [1,2,3,4,5,10,11,12,23,21,20,33,30,45,40,50]
console.log(fruits.sort((a,b)=>1));


console.log(n1.sort());
console.log(n1.sort((a,b)=>b-a));
console.log(n1.sort((a,b)=>a-b));
// console.log(n1.sort((a,b)=>-1));
console.log(n1.sort((a,b)=>-1));


console.log(n1.reduce((prev,curr)=>prev+curr,0));

console.log(n1.some((val)=>val%10));
console.log(n1.every((val)=>val>=2));
console.log(n1.indexOf(90));
console.log(n1.at(5));



const s  ={ name: "A", age: 17 }

// const users = [
//   { name: "A", age: 17 },
//   { name: "B", age: 22 },
//   { name: "C", age: 16 },
//   { name: "D", age: 25 }
// ];

// console.log(users.sort((a,b)=>a.age-b.age));

// const products = [
//   { id: 1, name: "Phone", price: 25000 },
//   { id: 2, name: "Laptop", price: 65000 },
//   { id: 3, name: "Watch", price: 5000 }
// ];

// console.log(products.reduce((prev,curr)=>prev+curr.price,0));
let na = "Pandi"
let age  =22
let place = "madurai"
console.log("name is " + na + " and his age is "+age + " from "+place);
console.log(`Name is ${na} and his age is ${age} and comes from ${place}`);

"https://chatgpt.com/share/692429f8-4d08-800c-922f-ac30be55a860"