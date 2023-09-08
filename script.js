const rockbtn=document.getElementById("rock");
const paperbtn=document.getElementById("paper");
const scissorsbtn=document.getElementById("scissors");
const pcchoose=document.getElementById("p3");
const resultT=document.getElementById("p2");
const resul=document.getElementById("p1");
const pscore=document.getElementById("pscore");
const cscore=document.getElementById("cscore");

const Rock=0;
const Paper=1;
const Scissors=2;

const tie=0;
const win=1;
const lose=2;

let pcpoints =0;
let playerpoint=0;

//NOS PERMITE USAR EL CLICK 
rockbtn.addEventListener('click',()=>{
play (Rock);
    });
paperbtn.addEventListener("click",()=>{
    play (Paper);
    });
scissorsbtn.addEventListener("click",()=>{
    play (Scissors);
    });




function play(userOption){
    const pcplay =   Math.floor(Math.random() * 3);
      const resultx = round(userOption,pcplay); 
//transforma las variables que son numeros a texto


      choose(pcplay);

   


      switch(resultx){
        case tie:
         resultT.innerHTML="YOU HAVE TIE"
        break;

        case win: 
        resultT.innerHTML="YOU HAVE WIN";
        playerpoint++;
        pscore.innerHTML="Player Score:"+playerpoint;


        if(playerpoint>=5){

            resul.innerHTML="PLAYER WINS";
            pcpoints=0;
            cscore.innerHTML="PC Score:"+ pcpoints;
            playerpoint=0;
            pscore.innerHTML="Player Score:"+playerpoint;
        }

        break;

        case lose: 
        resultT.innerHTML="YOU HAVE LOSE";
        pcpoints++;
        cscore.innerHTML="PC Score:"+pcpoints;
        
        if(pcpoints>=5){
            resul.innerHTML="PC WINS";
            pcpoints=0;
            cscore.innerHTML="PC Score:"+ pcpoints;
            playerpoint=0;
            pscore.innerHTML="Player Score:"+playerpoint;
          }

        break;
        
      }



    }


function round(userOption,pcplay){// COMPARA LOS RESULTADOS PARA DECIR QUIEN GANO

    if(userOption===pcplay){
        return tie;
        
        } else if(userOption===Rock){
        if(pcplay===Scissors) return win;
        if(pcplay===Paper) return lose;
    }
        
         else if(userOption===Scissors){
        if(pcplay===Paper) return win;
        if(pcplay===Rock) return lose;
    }
        
        else if(userOption===Paper){
        if(pcplay===Rock) return win;
        if(pcplay===Scissors) return lose;
        }
    
    
}

function choose(pcplay){//MUESTRA QUE ELEIGIO LA PC
    let pcChoiceText = '';

    switch (pcplay) {
        case Rock:
            pcChoiceText = "Rock";
            break;
        case Paper:
            pcChoiceText = "Paper";
            break;
        case Scissors:
            pcChoiceText = "Scissors";
            break;
    }

    pcchoose.innerHTML = "the computer chose: " + pcChoiceText;
}

