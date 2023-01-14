let qnt=prompt("Quer jogar com quantas cartas?");

while(qnt<4 || qnt>14 || qnt%2!==0){
    qnt=prompt("Quer jogar com quantas cartas?");
}

let grade=[];
let aux=[];

for(let i=1;i<=7;i++){
    for(let j=0;j<2;j++){
        let cartaMOD=`
            <div data-test="card" onclick="verificar2(this)" class="card">
                <div class="front-face face">
                    <img data-test="face-down-image" src="./img/back.png" alt="">
                </div>
                <div class="back-face face">
                    <img data-test="face-up-image" src="./img/carta${i}.gif" alt="">
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

let Selecionada1;
let Selecionada2;
let auxSelect=1;
let click1;
let fim=0;

function verificar(selecionado){
    Selecionada1=selecionado.querySelector(".back-face img").getAttribute('src');
    auxSelect++;
    selecionar(selecionado);
    click1=selecionado;
}

function verificar2(x){
    
    if(auxSelect%2!==0){
    verificar(x);
    } else{
        selecionar(x);
        Selecionada2=x.querySelector(".back-face img").getAttribute('src');
        auxSelect++;
        if(Selecionada1!==Selecionada2){
            setTimeout(selecionar,1000,click1);
            setTimeout(selecionar,1000,x);
        }else{
            click1.removeAttribute("onclick");
            x.removeAttribute("onclick");
            fim+=2;
            if(fim==qnt){
                clearInterval(timeInterval);
                setTimeout(alert,1000,`Você ganhou em ${auxSelect-1} jogadas! A duração do jogo foi de ${seg+(min*60)} segundos!`);
            }
        }

    }   

}
let seg=0;
let min=0;
function timer(){
    document.querySelector(".clock").innerHTML=`
    <span>${min.toString().padStart(2,'0')}:${seg.toString().padStart(2,'0')}</span>`
    seg++;
    if(seg>=60){
        seg=0;
        min++;
        
    }
}

let timeInterval=setInterval(timer,1000);


