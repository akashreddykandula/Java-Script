//  let firstpromise1=new promise((resolve,reject)=>{

//     console.log('akash');
//  });

// function saymyname(){
//     console.log('my name is AKASH');
// }
// setTimeout(saymyname,150000);

// let promise1=new promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve('promise fulfilled');
//     }
//     else{
//         reject('promise rejected');
//     }
// });


// promise1.then((message)=>{
//     console.log('first message:'+message);
//     return"promise fulfilled second message"
// }).then((message)=>{
//     console.log('second message:'+message);
//     return"promise fulfilled third message"
// }).then((message)=>{
//     console.log('second message:'+message);
//     return"promise fulfilled third message"})  

// promise1.then((message)=>{
//     console.log('then ka message is :'+message);
// }).catch((error)=>{
//     console.log('error'+error);
// })

let promise1= new promise((resolve,reject)=>{
    setTimeout(resolve,1000,'first')
})

let promise2= new promise((resolve,reject)=>{
    setTimeout(resolve,2000,'second')
})

let promise3= new promise((resolve,reject)=>{
    setTimeout(resolve,4000,'third')
})


promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log(values);
})

.catch((error)=>{
    console.error('error:'+error);
})