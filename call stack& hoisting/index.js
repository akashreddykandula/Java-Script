
// console.log(greet);
// var greet=function(){
//     console.log('hello world');

// }

//! key value pairs

// let obj={
//     age:25,
//     height:4,
//     weight:30,
//     greet:()=>{
//         console.log('hello world');

//     }
// }
// console.log(obj.age);
// obj.greet();

//! function uses data strctures
// const arr=[
//     function(a,b){
//         return a+b;

//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];
// let first=arr[2];
// let ans=first(5,10);
// console.log(ans);

//! Function returning

// function solve(number){
//     return function(number){
//         return number*number;
//     }

// }
// let ans=solve(5);

// let finalans=ans(10);
// console.log(finalans);

//! Function call stack

// function greetme(greet,fullname){
//     console.log('hello',fullname);;
//     greet();
// }
// function greet(){
//     console.log('greetings of the day');
// }
// greetme(greet,'akash')
// greet();

//! Class call hoisting
// class human{

// }
// const obj1=new human();

//! Using Function call hoisting
//

//! Using Const And let keywords
// console.log(age);
// const age=25;

// {
//! Using Function
// saymyname('akash');
// function saymyname(finalname){
//     console.log(finalname);
// }
// }


//! Using Var keyword
// console.log(age);

// var age=25;

