

// function changetext(event){
//     console.log(event);
//     let fpara=document.getElementById("fpara");
//     fpara.textContent="Hiii akash Reddy kandula"
// }
// let fpara=document.getElementById("fpara");

// fpara.addEventListener('click',changetext);

// fpara.removeEventListener('click',changetex
// let anchorelement=document.getElementById('fanchor');


// anchorelement.addEventListener('click',function(event){
//     event.preventDefault();
//     anchorelement.textContent='clicked Done'

// });


// let paras=document.querySelectorAll('p');

// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',function(){
//         alert("You Have Clicked On Para ",+i)
//     })
// }

function alertpara(event){
    alert('you have clicked on para:'+event.target.textcontent);
}

let mydiv=document.getElementById('wrapper');
document.addEventListener('click',alertpara);