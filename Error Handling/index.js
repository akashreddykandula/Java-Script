//  //! Compile time

 //syntax error
//  console.log(1;

//runtime error
// console.log(x);//reference error--runtime error

// //! try-catch block
// try{
// console.log(x);
//a

//b

//c

// }
// catch(err){
//     console.log('try block starts here');
//     console.log(x);
//     console.log('try block ends here');
//define what to do if error occurs in try block

//retry logical

//fallback mechanism

//loging

//custom error
// console.log('im from catch block');
// console.log('your error is:',err);

// }
// finally{
//     console.log('i am from finlly block');
// }


//! creating a custom error

try{
    //reference error
    console.log(x);
}
catch(err){
    throw new Error('throwing custom error..');

}

