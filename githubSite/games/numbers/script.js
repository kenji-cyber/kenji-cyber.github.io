var row = 2;
var col = 2;
const content = document.getElementById("content");
const cellmax = 7;
var hiddentime = 1500;
var maxnumber = 4;
var numbers = 1;
var cellid = [];
var colorHidden = "aliceblue";
var gamesCnt = 15;
const timerlimit = 2100;
var stagecnt = 1;
var stage = 1;
var second = 19;
var milisecond = 99;

function makeTable(){
  
    cellid = [];
    let table = document.createElement("table");
    table.id = "table";
    resize(table);
    for(let i = 0; i < row;i++ ){
         let tr = document.createElement("tr");
         tr.id ="tr"+i
        for(let j = 0; j < col; j++){
             let td = document.createElement("td");
             td.id = i+"-"+j;
             td.className ="cell";
             cellid.push(i+"-"+j);
             tr.appendChild(td);
           
        }
        table.appendChild(tr);
    }
    content.appendChild(table);
   
    shuffle();
    insertNumbers();
    setTimeout(numberHidden,hiddentime);
    gamesCnt--;
}

function resize(table){
    if(row >= 4){
        table.style.margin = "1% auto";
    }
   
}

function shuffle(){
    for(let s = 0; s < 3; s++){
  for(let i = 0; i < cellid.length;i++){
    let idx = Math.floor(Math.random() * cellid.length)
    let x = cellid[i];
    cellid[i] = cellid[idx];
    cellid[idx] = x;
  }
}
}
function insertNumbers(){
    for(let i = 0; i < maxnumber;i++){
       const inner = document.getElementById(cellid[i]);
       inner.innerHTML = (i+1);
      }
    
}
function numberHidden(){
    for(let i = 0; i < cellid.length; i++){
        const tdcolor = document.getElementById(cellid[i]);
        tdcolor.style.color = colorHidden;
    }
    clickTd();
    timer();
}

const time = document.getElementById("timer");
var setTime;
function timer(){

   setTime =  setInterval(()=>{
        if(milisecond > 0){
            milisecond--;
            let secondDisplay = second < 10 ? ("0"+second) : (second);
            let milisecondDisplay = milisecond < 10 ? ("0"+milisecond) : (milisecond);
            time.innerHTML = `${secondDisplay}:${milisecondDisplay}`;
        }else{
            milisecond = 99;
            second--;
            if(second < 5){
               time.style.color = "red"; 
            }
            if(second <= 0){
               reTime();
                loseGame();
                clearInterval(setTime);
            }
        }

    },1)

}
function reTime(){
    second = 19;
    milisecond = 99;
    time.innerHTML = `${second+1}:00`;
    time.style.color = "#000"; 
}

function remakeTable(){
    document.getElementById("table").remove();
    if(stagecnt % 3 == 0){
        row += 2;
        col += 2;
        row = row > cellmax ? cellmax: row;
        col = col > cellmax ? cellmax: col;
        maxnumber++;
        displayStage();
        setTimeout(makeTable,2000);
    }else{
        makeTable();
    }
    stagecnt++;
   
}

function loseGame(){
    for(let i = 0; i < cellid.length; i++){
        const cell = document.getElementById(cellid[i]);
        cell.style.color = "#000";
    }
    let h1;
  let timer =  setTimeout(() =>{
        time.style.visibility = "hidden";
        document.getElementById("table").remove();
        h1 = document.createElement("h1");
        h1.innerText = "You lose !";
        content.appendChild(h1);
      
    },1500);

    let timer2 = setTimeout(()=>{
        clearTimeout(timer);
        time.style.visibility = "visible";
        h1.remove();
        row = 2;
        col = 2;
        stage = 1;
        stagecnt = 1;
        numbers = 1;
        maxnumber = 4;
        gamesCnt = 15;
        hiddentime = 1700;
        document.getElementById("start").style.display = "inline";
        content.style.display = "none";
        clearTimeout(timer2);
    },3500);
            
  
}
function wingame(){
    for(let i = 0; i < cellid.length; i++){
        const cell = document.getElementById(cellid[i]);
        cell.style.backgroundColor = "#adff2f";
        cell.style.color = "#000";

    }
    let h1;
    let timer =  setTimeout(() =>{
        document.getElementById("table").remove();
        h1 = document.createElement("h1");
        h1.innerText = "You Winner !";
        content.appendChild(h1);
    },1500);

    let timer2 = setTimeout(()=>{
        clearTimeout(timer);
        h1.remove();
        row = 2;
        col = 2;
        stage = 1;
        stagecnt = 0;
        numbers = 1;
        maxnumber = 4;
        gamesCnt = 15;
        hiddentime = 1700;
        document.getElementById("start").style.display = "inline";
        content.style.display = "none";
        clearTimeout(timer2);
    },3500);

}

function displayStage(){
    content.style.display = "none";
    let  h2 = document.createElement("h2");
    h2.innerText = "Stage "+stage++;
    document.getElementById("body").appendChild(h2);
    setTimeout(()=>{
        content.style.display = "inline";
        h2.remove();
    },2000);

}

function clickTd(){
    for(let i = 0; i < cellid.length; i++){
        let flag = false;
        const inner = document.getElementById(cellid[i]);
       
            const handleClick = function(){
            let val = inner.innerHTML;
            if(val == numbers){
                if(numbers >= maxnumber){
                    inner.style.backgroundColor = "#adff2f";
                    inner.style.color = "#000";
                  if(gamesCnt <= 0){
                        wingame();
                    }else{
                        numbers = 1;
                        hiddentime += 400;
                        hiddentime = hiddentime > timerlimit ? timerlimit : hiddentime;
                        clearInterval(setTime);
                       let remakeTimer = setTimeout(()=>{
                        reTime();
                        remakeTable();
                        clearTimeout(remakeTimer);
                       },1000);
                    
                    }
                }else{
                inner.style.backgroundColor = "#adff2f";
                inner.style.color = "#000";
                numbers++;
                numbers = numbers <= cellid.length ? numbers : 0;  
               
                }
                flag = true;
            }else if(!flag){
                clearInterval(setTime);
                setTimeout(reTime,1500);
                inner.style.backgroundColor = "red";
                loseGame();
            }
        };
        inner.removeEventListener("click", handleClick);
        inner.addEventListener("click",handleClick);
       
       }
     
}

document.getElementById("start").addEventListener("click",()=>{
    document.getElementById("start").style.display = "none";
    displayStage();
    setTimeout(makeTable,2000);
});

document.getElementById("home").addEventListener('click',function(){
    location.href = "../../main/index.html";
  });
