var mi = 6;
var mj = 6;
var cnt = 0;

var currect;
var flag = false;
var minute = 19;
var second = 99;
var loseFlag = true;
var indexOfArray = 0;
const timer = document.getElementById("time");
const count = document.getElementById("count");
const table = document.getElementById("table");
const kanji = [ ["頂","頃"],
                ["雰","零"],
                ["雲","雪"],
                ["遣","遺"],
                ["貸","賃"],
                ["籍","藉"],
                ["興","與"],
                ["縁","緑"],
                ["綱","網"],
                ["巴","巳"],
                ["士","土"],
                ["季","李"],
                ["大","太"],
                ["堀","掘"],
                ["悔","侮"],
                ["島","鳥"],
                ["衝","衡"],
                ["晢","皙"],
                ["徙","徒"],
                ["眼","眠"]];
var maxCnt = kanji.length;
function arrayChange(){
    for(let i = 0; i < kanji.length; i++){
        let idx = Math.floor(Math.random() * kanji.length/2);
        let subArray = kanji[i];
        kanji[i] = kanji[idx];
        kanji[idx] = subArray;
    }
}

var c = document.getElementById("countDown").innerHTML;
document.getElementById("startGame").addEventListener("click",function(){
    document.getElementById("startGame").style.display="none";
    document.getElementById("countDown").style.visibility ="visible";
    let down = setInterval(function(){
        if(c <= 1){
            start();
            clearInterval(down);
        }else{
            document.getElementById("countDown").innerHTML = --c;
        }
    },1000);
})

function start(){
    arrayChange();
    document.getElementById("countDown").style.display ="none";
    count.innerHTML = cnt+"/"+maxCnt;
    makeTable();
    checkFunc();
    startTime();
    timer.style.visibility = "visible";
}

function makeTable(){
    let game = kanji[indexOfArray];
    let anotherKanji = game[0];
    let currectKanji = game[1];
    for(let i = 0; i < mi; i++ ){
        const row = document.createElement("tr");
         row.id = "tr"+i;
        for(let j = 0; j < mj; j++){
            const cell = document.createElement("td");
            cell.id = i+"-"+j;
            cell.classList.add('td');
            cell.innerHTML= anotherKanji;
            row.appendChild(cell);  
        }
        table.appendChild(row);
    }
    let indexI = Math.floor(Math.random() * mi);
    let indexj = Math.floor(Math.random() * mj);
    let index = indexI+"-"+indexj;
    currect = index;
    document.getElementById(index).innerHTML = currectKanji;
}

var time;
function startTime(){
   time = setInterval(function(){
        if(second <= 0){
            --minute;
            if(minute < 0){
                flag = true;
                loseFunc();
            }else{
            timer.innerHTML = minute+"."+"00";
            if(minute < 3){
                timer.style.color ="red";
            }
            second = 99;
            }
        }else{
            timer.innerHTML = (minute+".") + ((second < 10) ? ("0"+second) : (second));
            second--;
        }
},1);
}

var countPlay = 0;
var countFlag = true;
function checkFunc(){
    for(let i = 0; i < mi; i++ ){
        for(let j = 0; j < mj; j++){
            let checkCell = i+"-"+j;
              document.getElementById(checkCell).addEventListener("click",function(){
              if(!flag && currect == checkCell){
                reGame();
              }else{
               loseFunc();
                flag = true;
              }
            });
         
           }
        }
    }

function reGame(){
    let nomake = false;
    clearTable();
    if(indexOfArray < kanji.length-1){
        indexOfArray++;
        }else{
        wins();
        indexOfArray = 0;
        nomake = true;
    }
    if(!nomake){
    timer.style.color ="yellow";
    count.innerHTML = (++cnt)+"/"+maxCnt;
    second = 99;
    minute = 19;
    clearInterval(time);
    startTime();
    makeTable();
    checkFunc();
    }
}
function wins() {
    if(loseFlag){
        timer.style.display = "none";
        setTimeout(function(){
            table.style.display = "none";
            count.style.display ="none";
            document.getElementById("score").style.display ="block";
            document.getElementById("score").innerHTML = maxCnt+"/"+maxCnt;
        },1000);
    
        setTimeout(function(){
            location.href = "index.html";
        },3000);
        loseFlag = false;
    }
}
function loseFunc(){
  if(loseFlag){
    document.getElementById(currect).style.backgroundColor ="#ff0000";
    timer.style.display = "none";
    setTimeout(function(){
        table.style.display = "none";
        count.style.display ="none";
        document.getElementById("score").style.display ="block";
        document.getElementById("score").innerHTML = cnt+"/"+maxCnt;
    },1000);

    setTimeout(function(){
        location.href = "index.html";
    },3000);
    loseFlag = false;
}
}
    
function clearTable(){
    for(let i = 0; i < mi;i++){
        let id = "tr"+i;
        var tr = document.getElementById(id);
        tr.remove();
    }
}

document.getElementById("home").addEventListener('click',function(){
    location.href = "../../main/index.html";
  });

