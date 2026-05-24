var mi = 2;
var mj = 2;
var cnt = 0;

var currect;
var flag = false;
var second = 14;
var milisecond = 99;
var loseFlag = true;
var indexOfArray = 0;
const timer = document.getElementById("time");
const count = document.getElementById("count");
const table = document.getElementById("table");
const colors = [["#ffffe0","#fffacd"],
                ["#008b8b","#2f4f4f"],
                ["#a9a9a9","#c0c0c0"],
                ["#228b22","#008000"],
                ["#ff1493","#c71585"],
                ["#ffb6c1","#ffc0cb"],
                ["#98fb98","#90ee90"],
                ["#87cefa","#87ceeb"],
                ["#faebd7","#ffefd5"],
                ["#fff8dc","#f5f5dc"],
                ["#8b008b","#800080"],
                ["#191970","#000080"],
                ["#f5fffa","#f0ffff"],
                ["#ff00ff","#ff00ff"],
                ["#7cfc00","#7fff00"]];
var maxCnt = colors.length;
function arrayChange(){
    for(let i = 0; i < colors.length; i++){
        let idx = Math.floor(Math.random() * colors.length/2);
        let subArray = colors[i];
        colors[i] = colors[idx];
        colors[idx] = subArray;
    }
}

var c = 5;
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
    let game = colors[indexOfArray];
    let anotherColor = game[0];
    let currectColor = game[1];
    for(let i = 0; i < mi; i++ ){
        const row = document.createElement("tr");
         row.id = "tr"+i;
        for(let j = 0; j < mj; j++){
            const cell = document.createElement("td");
            cell.id = i+"-"+j;
            cell.classList.add('td');
            cell.style.backgroundColor= anotherColor;
            row.appendChild(cell);  
        }
        table.appendChild(row);
    }
    let indexI = Math.floor(Math.random() * mi);
    let indexj = Math.floor(Math.random() * mj);
    let index = indexI+"-"+indexj;
    currect = index;
    document.getElementById(index).style.backgroundColor = currectColor;
}

var time;
function startTime(){
   time = setInterval(function(){
        if(milisecond <= 0){
            --second;
            if(second < 0){
                flag = true;
                loseFunc();
            }else{
            timer.innerHTML = second+"."+"00";
            if(second < 3){
                timer.style.color ="red";
            }
            milisecond = 99;
            }
        }else{
            timer.innerHTML = (second+".") + ((milisecond < 10) ? ("0"+milisecond) : (milisecond));
            milisecond--;
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
    if(indexOfArray < maxCnt-1){
        indexOfArray++;
        }else{
            wins();
            nomake = true;
        
    }
    if(!nomake){
    timer.style.color ="yellow";
    count.innerHTML = (++cnt)+"/"+maxCnt;
    if(countPlay >= 2){
    mi = mi < 10 ? mi+=2 : 10;
    mj = mj < 10 ? mj+=2 : 10;
    countPlay = 0;
    }else{
      countPlay++;
    }
    milisecond = 99;
    second = 14;
    clearInterval(time);
    startTime();
    makeTable();
    checkFunc();
    if(cnt >= 9){
      resize();
    }
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
function wins() {
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

    
function clearTable(){
    for(let i = 0; i < mi;i++){
        let id = "tr"+i;
        var tr = document.getElementById(id);
        tr.remove();
    }
}
function resize(){
 
 const tds = document.querySelectorAll('.td');
   
 tds.forEach(td => {
     td.style.width ="50px";
     td.style.height="50px";
 });
}

document.getElementById("home").addEventListener('click',function(){
    location.href = "../../main/index.html";
  });
  
