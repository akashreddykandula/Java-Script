// !global scope
//we can use this i.e global variable throught the program

// var age=15;  

// console.log(age);

// {
//     console.log(age);
// }

// if(true){
//     console.log(age);
// }
// for(let i=0;i<2;i++){
//     console.log(age);
// }

// function sayhello(){
//     console.log('im ',age,'years old');
// }
// sayhello();


//! Function scope

// function sayhello(){
//     var name='earth';//accessible only inside the function.
//     console.log(name);
// }
// sayhello();`

// console.log('hello',name); !name is not defined error


//! Block scope
// console.log(height);//undefined
// {
//     var height=180;

// }
// console.log(height);
//! let keyword
// {
//     let age=20;

// }
// console.log(age);// error

//! Temporal Dead Zone
console.log(marks);//temporal dead zone
console.log('akash reddy');//temporal dead zone
console.log('kandula');//temporal dead zone
const marks=100;
console.log(marks);








