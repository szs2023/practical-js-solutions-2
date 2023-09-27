let btn=document.querySelector("button");
btn.addEventListener("click",(e)=>{
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    document.body.style.background=`rgb(${r},${g},${b})`;
})