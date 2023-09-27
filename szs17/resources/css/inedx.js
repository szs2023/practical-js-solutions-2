let counter=document.querySelector("h1");
let btnincrease=document.querySelector("button");
let btndecrease=document.querySelector(".btn-decrease")
btnincrease.addEventListener("click",()=>{
     counter.innerText=+counter.innerText+1
     let r=Math.floor(Math.random()*255);
     let g=Math.floor(Math.random()*255);
     let b=Math.floor(Math.random()*255);
     document.body.style.background=`rgb(${r},${g},${b})`;
})
btndecrease.addEventListener("click",()=>{
    if (counter.innerText>0) {
        counter.innerText=+counter.innerText-1
        let r=Math.floor(Math.random()*255);
        let g=Math.floor(Math.random()*255);
        let b=Math.floor(Math.random()*255);
        document.body.style.background=`rgb(${r},${g},${b})`;
    }      
})
