// async function getData(){
//     setTimeout(function(){
//         console.log('i am inside set timeout');

//     },5000);
// }

// let output=getData();

//await

//fetch API


const myheaders =new headers();
myheaders.append('content-type','application/json');

const url=new request('https://example.org/post',{
method:'post',
body: JSON.stringify({ username: "example"}),
headers: nyHeaders,})

async function getData() {
    const response=await fetch(url,options);
    let data=await response.json();
    console.log('get data response:',data);

}
async function postData() {
    const response=await fetch(url,options);
    let data=await response.json();
    console.log('post data response:',data);

}
// const response = await fetch(myRequest);

async function processdata() {
    await postData();
   await getData();
}


