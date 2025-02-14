// class human{
    //properties
//     age;//public
//     #wt=50;// when we use hash it denotes private variable & it willbe use in same block and to acces the variable we have to use this keyword.
//     ht=39;
//     constructor(newage,newheight){
//         this.age=newage;
//         this.height=newheight

//     }

    //behaviour
//     walking(){
//         console.log('i am walking',this.#wt);// here we use this keyword to acces the private variable.
//     }
//     running(){
//         console.log('i am running');
//     } 
//     get fetchweight(){
//         return this.#wt;
//     }
//     set modifyweight(val){
//         this.#wt=val;
//     }
// }
// let obj=new human(100,200);
// console.log(obj.age);
// console.log(obj.#wt);
// obj.walking();
// console.log(obj.height);

//! Default Parameters/arguments
// function sayname(myname='reddy'){
//     console.log('My name is:',myname);

// }
// sayname('akash');

//! multiple arguments
// function sayname(fname,lname='reddy'){
//     console.log('My name is:',fname,lname);

// }
// sayname('akash');

//! depending on first argument
// function sayname(fname='akash',lname=fname.toUpperCase()){
//     console.log('My name is:',fname,lname);

// }
// sayname('akash','reddy');

// function solve(value){
//     console.log('hello world',value);

// }
// solve('this is js.');

//! default object
// function solve(value={age:20,wt:40,ht:15}){
//     console.log('hello world',value);

// }
// solve();


//! default Array
// function solve(value=['akash','reddy']){
//     console.log('hello world',value);

// }
// solve();

function getage(){
    return 190;

}

function utility(name,age=getage()){
    console.log(name,age);

}
utility('akash',20);




