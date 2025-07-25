//Primitive data types are: Null,undefined, number, boolean, string, BigInt ,Symbol

/*let a="Prachi";
let b=null; //null typeof gives object 
let c=undefined;
let d=40;
let e=2.5;
const s=false; 

console.log(typeof a,typeof b,typeof c,typeof d, typeof e,typeof s);*/

//Arthmatic operator
let a=2;
let b=4;
let c=a+b;
let d=a*b;
let e=a-b;
let f=a/b;
let g=a%b;
let h=a**b; //  **power  */

console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

//Comparison Operator

let p=40;
let s="Hi"; //"40" // IN JavaScript "40" It accepts it is number 

console.log(p==s);
console.log(p===s); // strict comparison 

console.log(p!=s);
console.log(p!==s); //not equal value or not equal type

//Post and pre increment and decrement operator

let t=30;
let r=12;
let q= t++ + ++r;
console.log(q);
console.log(t);
console.log(r);


let i=50;
let j=55;
let k=i++ + ++j + i++ + ++j + --i;

console.log(i);
console.log(j);
console.log(k);

//conditional  operator
let l =10 ? 10:50;
console.log(l);

let u=5 , v=10;

let z= u++ >--v ?( u-- -v < u++ ? v++ +u : --v + u++ ): ++u + v-- - --v;
console.log(u);
console.log(v);
console.log(z);

//string operator
let firstName="Prachi";
let lastName="Jaswal";
let fullName = firstName + lastName;

console.log(fullName);

// ?? operator it consider false value only null , undefined. 
