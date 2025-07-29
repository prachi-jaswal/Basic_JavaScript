//Different ways to create an array


//let arr=[10,20,30];

//console.log(arr[2]);

//let ar=new Array(5);
//arr[0];

//console.log(ar);

//let arr=Array.of(1,2,3,4,5);

//console.log(arr);

//+++++++++++++++++++++++++++++++++++//

let str="Prachi";
let ar=Array.from(str);
console.log(ar);  //O/P: ["P" ,"r" ,"a" ,"c", "h", "i"]

//let ar1=[10,200,300]

//let ar2=[10,20,30]

//let ar3=[ar1,ar2]

//console.log(ar3);

//stack : LIFO
//let ar=[100,200,300];

//ar.push(20);

//console.log(ar);

//ar.pop();
//console.log(ar);

//SHIFT remove the element  from first 
let arr1=[12,39,90,100]

arr1.shift();
console.log(arr1);

//Unshift add more element at starting 

let arr=[12,29,30]

arr.unshift(100,200)

console.log(arr);

//let ar1=[10,200,300]

//let ar2=[10,20,30]

//let ar=ar1.concat(ar2);

//console.log(ar);

//let ar=[10,20,30];

//ar.forEach(item=>console.log(item))

let arr2=[100,230.450]

arr2.forEach(function fn(item){
    console.log("hello")
})