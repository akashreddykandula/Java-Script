
// //! Reflow And Repaint

//!code 1

// const t1=performance.now();//Checks Performance

// for(let i=1;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent=i +' '+'this is para';
//     document.body.appendChild(para);
// }

// const t2=performance.now();
// console.log('total time by code 1 is:',t2-t1);

//!code 2
// const t3=performance.now();
// let mydiv=document.createElement('div');
// for(let i=1;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent='this is para'+i;
//     mydiv.appendChild(para);
//     document.body.appendChild(mydiv);
// }


// const t4=performance.now();
// console.log('total time by code 2 is:',t3-t4);


//! best code

let fragment=document.createDocumentFragment();

for(i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent='This is para'+i;
    //no reflow and no repaint for the below line
    fragment.appendChild(para);
}
//the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);
