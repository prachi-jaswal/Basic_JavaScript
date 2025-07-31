let s1={
    name:"Prachi",
    rollNo:2,
    state: "haryana",
}

/*let name=s1.name;

console.log(name);
console.log(s1.rollNo);*/

let{name,rollNo,state}=s1
console.log(name)
console.log(rollNo)
console.log(state)


/*console.log(s1.name);

s1.rollNo=12
console.log(s1.state);

delete s1.state;

console.log(s1.state);

s1.mobileNo=98145663;
console.log(s1.mobileNo); */

/*let ar=[10,20,s1]

let [a,b,c]=ar

console.log(c)*/


/*let arr= [
     10,
     {
    name:"Prachi",
    ar:[
        100,{
        x:34,
    },
],
},
];

let z=arr[1].ar[1].x
console.log(z); */

let obj={
    name:"prachi",
    showName: function(){
        console.log(this.name);
    }
}

obj.showName();