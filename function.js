// function

function sum(a,b){
    console.log(a+b);
    console.log(a-b);

}

sum(10,20)
sum(20,10)


//function checkNumberOddAndEven(n){
 //   if(n%2==0){
  //      console.log("Number is even");
 //   }

  //  else{
  //      console.log("Number is Odd");
 //   }
//}

//checkNumberOddAndEven(20);
//checkNumberOddAndEven(15);

//Note:  0 is false and 1 is true in  Js 
function checkNumberOddAndEven(n){
     if(n%2){
         console.log("Number is even");
     }
      else{
        console.log("Number is Odd");
      }

    }

    checkNumberOddAndEven(25); // o/p Number is even
    checkNumberOddAndEven(30); //o/p Number is odd 

    let j=10;
    console.log("j=" +j);

    let x=190;
    let y=120;
    let z=x+y;

    console.log(x + "+" + y + "=" + z);


    //function sum(...a){
    //   console.log(a);
   // }

   // sum(10,20,40);


   // function sum(){
   //     console.log(arguments [1]);
   // }

   // sum(15,35,52); //o/p = 35 

   function sum(a=0,b=0){
    console.log(a);
    console.log(b);
    console.log(arguments);
   }
   
   sum(10, 20,30);

  // function fn1(x){
  //  console.log(x);
  // }

  // let a=10;

   //fn1(a);
  // console.log(fn1);



  //function fn1(){
   // console.log("fn1 calls")
   // return 10;
  //}

 // function fn2(x){
  //  console.log(x);
  //}
 // fn2(fn1);
  //fn2(fn1()); //fn1() it calls 10.

//function prime(n){

  //  if(n==1)
      //  return false;
    //for(let i=2;i<n/2;i++){
      //  if(n%i==0)
       //     return false;
   // }
   //return true;
//}

//for(let i=1; i<=100; i++){
//    if(prime(i)){
//   console.log(i);
//}
//}


//function fun(fn){
 // fn();
//}

//func(()=> {
 // console.log("byee");
//})

