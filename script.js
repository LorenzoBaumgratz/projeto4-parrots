let qnt=prompt("Quer jogar com quantas cartas?");

while(qnt<4 || qnt>14 || qnt%2!==0){
    qnt=prompt("Quer jogar com quantas cartas?");
    
}
let grade=[];




let container=document.querySelector(".container-cartas");
let carta=`<div onclick="selecionar(this)" class="card">
<div class="front-face face">
    <img src="./img/back.png" alt="">
</div>
<div class="back-face face">
    <img src="./img/unicornparrot.gif" alt="">
</div>
</div> 

`;

for(let i=0;i<qnt;i++){
    grade.push(carta);
    container.innerHTML+=`${grade[i]}`;
}


function selecionar(carta){
    let x=carta.querySelector(".back-face");
    let y=carta.querySelector(".face");
    x.classList.toggle("mostrar");
    
   
    
}

