// let obj={
//     name:'akash',
//     "full name":'akash reddy kandula',
//     age:25,
//     weight:49,
//     height:"5'5 ft",
//     greet:function(){
//         console.log('Hello this is inside from the object.');
//     }

// }
// console.log(obj);
// obj.greet();
// console.log(typeof(obj));

// let obj2=obj;
// console.log(obj2);


// //! Creation of Arrays

// let arr=[1,2,3,4,5,'akash',true];

// arr.push('reddy');

// console.log(arr);

// arr.pop();

// arr.shift();

// arr.unshift('kandula');

// arr.push(1);

// console.log(arr.slice(2,4));

// arr.splice(1,0,'apple');


// console.log(arr);
// console.log(arr[6]);


//! Map

// let arr=[10,20,30];
// let ansarray=arr.map((number)=>{
//     return number*number;

// })
// console.log(ansarray);

//  let arr=[10,20,30];

//  arr.map((number,index)=>{
//     console.log(number);
//     console.log(index);

//  })

//! filter

// let arr=[10,20,4,6,2,3,6,9,13];

// let evenaray=arr.filter((number)=>{
//     if(number%2===0){
//         return true;

//     }
//     else
//     {
//         return false;
//     }
// }
// );
// console.log(evenaray);

// let arr=[1,2,'akash','reddy',null];
// let ans=arr.filter((value)=>{
//     if(typeof(value)=='string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// );
// console.log(ans);

//! Reduce

// let arr=[10,20,30,40];

// let ans=arr.reduce((acc,curr )=>{
//     return acc+curr;
    
// },0)
// console.log(ans);;

//! sort

// let arr=[1,6,8,5,9,4,7]
// console.log(arr.sort());

//! Index of

// let arr=[1,2,3,4,5,6,7,8];
// console.log(arr.indexOf(4));
// console.log();

// ! Loops

// let arr=[10,20,30];
// let length=arr.length;
// console.log('length:', length);

// arr.forEach((value,index)=>
// {
//    console.log( 'number:',value,"index:",index);
// });

// for(let index=0;index<length;index++){
//     console.log(arr(i));
// }


//! for in
// let obj={
//     name:'akash',
//     "full name":'akash reddy kandula',
//     age:25,
//     weight:49,
//     height:"5'5 ft",
//     greet:function(){
//         console.log('Hello this is inside from the object.');
//     }}
//     for( let key in obj){
//         console.log(key,'', obj[key]);
//     }

//!for of loop

// let arr=[10,20,30,40];
// for(let value of arr){
//     console.log(value);
// }

// let fullname='akash';
// for(let val of fullname){
//     console.log(val);
// }

//!Array with Functons

// let arr=[10,20,30,40];
// function getsum(arr){
//     let len=arr.length;
//     let sum=0;
//     for(let index=0;index<length; index++){
//         sum=sum+arr[index];
//     }
//     return sum;
// }
// let totalsum=getsum(arr);
// console.log(totalsum);