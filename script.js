let qnt=prompt("Quer jogar com quantas cartas?");

while(qnt<4 || qnt>14 || qnt%2!==0){
    qnt=prompt("Quer jogar com quantas cartas?");
}

let grade=[];
let aux=[];

for(let i=1;i<=7;i++){
    for(let j=0;j<2;j++){
        let cartaMOD=`
            <div onclick="selecionar(this)" class="card">
                <div class="front-face face">
                    <img src="./img/back.png" alt="">
                </div>
                <div class="back-face face">
                    <img src="./img/carta${i}.gif" alt="">
                </div>
            </div> 

        `;
        aux.push(cartaMOD)
    }
    
}

function comparador(){
    return Math.random() -0.5;
}

let container=document.querySelector(".container-cartas");

for(let i=0;i<qnt;i++){
    grade.push(aux[i]);
}

grade.sort(comparador);

for(let i=0;i<qnt;i++){
    container.innerHTML+=`${grade[i]}`;
}

function selecionar(carta){
    let x=carta.querySelector(".back-face");
    let y=carta.querySelector(".face");
    x.classList.toggle("mostrar");  
}

