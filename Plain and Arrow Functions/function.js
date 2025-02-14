//funtion definition
// function saymyname(){
// console.log('akash reddy');
// }
//funtion calling
// saymyname();



//!function counting
// function printcounting(){
//     for(i=1;i<=100;i++){

  
//         console.log(i);
//     }
// }
// printcounting(); 


//!passing parameters/arguments

// function printnumber(num){
//     console.log('printing the number:',num);
// }
// printnumber(10);

//!multiple parameters

// function average(num1,num2){
//     let avg=(num1+num2)/2;
//     console.log('given two numbers is:',num1,',',num2);
//     console.log('Average is:',avg);
// }
// average(10,55); 


//!return function

// function getsum(a,b,c){
//     let sum=a+b+c;
//     return sum;
// }
// let ans=getsum(1,2,3);
// console.log('printing sum ans:',ans);

//!return keyword with string

// function getmyname(firstname,lastname){
//     let fullname=firstname+' '+lastname;
//     return fullname;

    //un-reachable code
//     let a=10;
//     let  b=20;
//     let sum=a+b;
//     console.log(sum);
// }
// let fullname=getmyname('akash','reddy');
// console.log(fullname);


// function getMultiplication(a,b){
//     return a+b;
// }
// console.log(getMultiplication(2,10));


// let getmul=function(a,b){
//     return a+b;

// }
// let ans= getmul(2,2);
// console.log(ans);

//! square numbers

// function squarenumbers(num){
//     let ans=num**2;
//     console.log(ans);
// }
// squarenumbers(5);

//! custom powers----- ARROW FUNCTION

let getexp=(x,y)=>{
    let powers=x**y;
    return powers;
}
let ans=getexp(2,3);
console.log(ans);
