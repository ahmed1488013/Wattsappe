function openchat(){
    let logo=document.querySelector(".logo");
    logo.style.display="none";
    let chat=document.querySelector(".thechate");
    chat.style.display="block";
}
// function sendmessage(){
//     let mytext=document.querySelector("#text").value;
//     let para =document.createElement("p");
//     para.innerHTML=mytext;
//     let mybody=document.getElementById("jschat");
//     mybody.appendChild(para);
// }
let mytext=document.querySelector("#text");
let btn=document.querySelector(".yes");
let counter=0;
btn.addEventListener("click",function(){
    let para =document.createElement("p");
    para.innerHTML=mytext.value;
    let mybody=document.getElementById("jschat");
    mybody.style.height="counter * (para.offsetHeight)";
    mybody.appendChild(para);
    console.log(mytext.TEXT_NODE)
    mytext.value="";
})
