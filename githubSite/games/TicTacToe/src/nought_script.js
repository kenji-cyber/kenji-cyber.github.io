
let cnt = 0;
    const unarray =["1","2","3","4","5","6","7","8","9"];
    const viArray =[];
    const array =[];
    const array1 =[];
    let mainValue = "X";
    let currectValue ="O";
    let mainAttack ="";
    let k = 0;
    let background = document.getElementById("wrapper");
      background.style.visibility = "hidden";
    let currect = "";
      document.getElementById("X").style.visibility = "hidden";
      document.getElementById("O").style.visibility = "hidden";
    let rese = document.getElementById("resert");
      rese.style.visibility = "hidden";
    let o = document.getElementById("O").id;
    let x = document.getElementById("X").id;

    // 人間とロボットの場合
   function HvsR(){
        // background.style.visibility = "visible";
        document.getElementById("b1").style.visibility = "hidden";
        document.getElementById("b2").style.visibility = "hidden";
        currect = "hr";
        document.getElementById("X").style.visibility = "visible";
        document.getElementById("O").style.visibility = "visible";
        rese.style.visibility = "visible";
        rese.innerHTML ="Return";
   }
   //先攻の場合
   function fastpass(){
          changeDisplay();
          mainAttack = x;

   }
   function secondpass(){
        changeDisplay();
        mainAttack = o;
        mainValue = o;
        currectValue = x;
        setTimeout(vilan,1);
        k++;
   }

   function HvsH(){
    rese.style.visibility = "visible";
        document.getElementById("h1").style.fontSize ="32px";
        background.style.visibility = "visible";
        document.getElementById("b1").style.visibility = "hidden";
        document.getElementById("b2").style.visibility = "hidden";
      currect = "hh";
      document.getElementById("h1").innerHTML = "Fist move X";
   }
  
  function changeDisplay(){
    rese.innerHTML ="Resert";
    background.style.visibility = "visible";
    document.getElementById("h1").style.fontSize ="32px";
    document.getElementById("X").style.visibility = "hidden";
  document.getElementById("O").style.visibility = "hidden";
  }
  function clickB(e){
  var e = e || window.event;
  var elem = e.target || e.srcElement;
  var elemId = elem.id;
if(elemId != 0){
      if(currect == "hr"){
        if(mainAttack == "X"){
        if(k < 10){
        hr(elemId);
        }
        k++;
      }else{
          if(k < 10){
          if(k >= 1){
            setTimeout(vilan,500);
            }
            hr(elemId);
            }
          k++;
      }
      }else{
        if(k % 2 == 0){
            mainAttack = x;
            mainValue = x;
            currectValue = o;
            hh(elemId);
           
        }else{
            mainAttack = o;
            mainValue = o;
            currectValue = x;
            hh(elemId);
            
        }
       k++;
      }
  }  
  else{
    alert("場所が違います!")
  }
  cnt++;
  
}

function hr(elemId){
  for(let i = 0 ; i < 10;i++){
    if(elemId == i){
      let value = document.getElementById(i);
      if(value.innerHTML != mainValue && value.innerHTML != currectValue ){
        value.innerHTML = mainValue;
       for(let k = 0; k < unarray.length;  k++){
        if(elemId == unarray[k]){
          unarray.splice(k,1);
          break;
        } 
       }
       value.id ="0";
        array.push(i);
      }
      break;
    }
  }
    let g = "";
    for(let k = 0 ; k < array.length; k++){
    g  += array[k];
    }
    let f = check(g,mainAttack);
    if(f == false && mainAttack != "O"){
      setTimeout(vilan,500);
    } 
}

function hh(elemId){
  for(let i = 0 ; i < 10;i++){
    if(elemId == i){
      let value = document.getElementById(i);
      if(value.innerHTML != mainValue && value.innerHTML != currectValue ){
        value.innerHTML = mainValue;
        for(let k = 0; k < unarray.length;  k++){
          if(elemId == unarray[k]){
            unarray.splice(k,1);
            break;
          } 
         }
       value.id ="0";
       if(mainValue == "X"){
        array.push(i);
       }else{
        array1.push(i);
       }
      }
      break;
    }
  }
    let g = "";
    if(mainValue == "X"){
      document.getElementById("h1").innerHTML = "Move the O";
    for(let k = 0 ; k < array.length; k++){
    g  += array[k];
    }
  }else{
    document.getElementById("h1").innerHTML = "Move the X";
    for(let k = 0 ; k < array.length; k++){
      g  += array1[k];
      }
  }
    check(g,mainAttack);
   
}

  const vilanArray =[];


  function vilan(){
         let idx = 0
         if(mainAttack == "X"){
         idx = RobotFirst();
         }else{
          idx = RobotSecond();
         }
         //最初に真ん中を取る
         if(unarray.indexOf("5") != -1 ){
          idx = 5;
         }
        // alert(idx);
        while(true){
          if(idx == 0){
            break;
          }
          let  l =  Math.floor(Math.random() * unarray.length);
          let  v = unarray[l];
          let value = document.getElementById(v);
          //負ける確率を上げる
            if(v == idx){
              //  alert(unarray);
               for(let k = 0; k < unarray.length;  k++){
                if(v == unarray[k]){
                  unarray.splice(k,1);
                  break;
                } 
               }
                value.innerHTML = currectValue;
                vilanArray.push(v);
                value.id ="0";
                break;
            }
        }
      let str ="";
      for(let k = 0 ; k < vilanArray.length; k++){
      str += vilanArray[k];
      }
   check(str,currectValue);
}

//勝ったかどうかのチェック
function check(g,c){

  let flag = false;
  const checkList = [
    ["1","2","3"],
    ["1","5","9"],
    ["1","4","7"],
    ["2","5","8"],
    ["3","6","9"],
    ["3","5","7"],
    ["4","5","6"],
    ["7","8","9"]
  ];
  const k = [
    [".buttton1",".buttton2",".buttton3"],
    [".buttton1",".buttton5",".buttton9"],
    [".buttton1",".buttton4",".buttton7"],
    [".buttton2",".buttton5",".buttton8"],
    [".buttton3",".buttton6",".buttton9"],
    [".buttton3",".buttton5",".buttton7"],
    [".buttton4",".buttton5",".buttton6"],
    [".buttton7",".buttton8",".buttton9"]
  ];

  for(let b = 0; b < checkList.length;b++){
  if(g.indexOf(checkList[b][0]) != -1 && g.indexOf(checkList[b][1]) != -1 && g.indexOf(checkList[b][2]) != -1){
    const chk = k[b] ;
       for(let i = 0; i < chk.length;i++){
          let value = document.querySelector(chk[i]);
          value.style.background = "#00ff7f";
          value.style.color ="#9932cc";
       }
    flag = true;
    break;
  }
}
  
  if(flag){
     for(let k = 0; k < unarray.length;  k++){
      let value = document.getElementById(unarray[k]);
      value.id ="0";
      }
      if(currect == "hr"){
        if(c == mainAttack){
          document.getElementById("h1").innerHTML = "You Wins";
        }else{
          document.getElementById("h1").innerHTML = "The Robot Wins";
        }
      }else{
    document.getElementById("h1").innerHTML = "The "+c+" Wins";
      }
    setTimeout(resert,2000);
  }
  if(unarray.length == 0 && flag == false){
    setTimeout(cron,700);
    function cron(){
      document.getElementById("h1").innerHTML = "Draw in the game！";
    for(let i = 0; i < 9;i++){
       let g = ".buttton"+(i+1);
       let value = document.querySelector(g);
       value.style.backgroundColor = "#bc13fe";
       value.style.color = "white";
    }
    }
    setTimeout(resert,3000);

  }
  return flag;
}

//リセット
function resert(){
  location.href = "TicTacToe.html";
}
let log =0;

// ロボットの動き
function RobotFirst(){
  let g = "";
  let elem = "";
  let evil = "";
  for(let k = 0 ; k < array.length; k++){
    g  += array[k];
  }
  for (let index = 0; index < unarray.length; index++) {
    elem += unarray[index];
    
  }
  for (let ind = 0; ind < vilanArray.length; ind++) {
    evil += vilanArray[ind];
    
  }
 
  //順番を直す
  const win_patterns = [
    [1, 2, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [4, 5, 6],
    [3, 5, 7],
    [1, 5, 9],
    [7, 8, 9]
];
const vice_patterns = win_patterns;
const win_patterns1 = [[3, 5, 7],[1, 5, 9]];

      while(true){
        let v = Math.floor(Math.random() * vice_patterns.length);
        win_patterns1.push(vice_patterns[v]) ;
           vice_patterns.splice(v,1);
           if(vice_patterns <= 0){
            break;
           }  
          }
      let c = 0;
      let cnt = 0;
      let h = 1;
      if(g.length > h){
       h = 2;
      }
     for(let i = 0; i < win_patterns1.length;i++){
            let p = win_patterns1[i];
          if(evil.indexOf(p[0]) != -1 ){
              cnt++;
           }
           if(evil.indexOf(p[1]) != -1 ){
                cnt++;
           }
           if(evil.indexOf(p[2]) != -1){
                cnt++;
           }
           if(cnt >= h){
             if( evil.indexOf(p[0]) == -1 ){
               c = p[0];
               if(elem.indexOf(c) != -1){
               
                 break;
               }
              } 
             if( evil.indexOf(p[1]) == -1){
               c = p[1];
               if(elem.indexOf(c) != -1){
               
                 break;
               }
              } 
             if( evil.indexOf(p[2]) == -1){
               c = p[2];
               if(elem.indexOf(c) != -1){
               
                 break;
               }
             }
            
           
            }
            cnt = 0;
            if(g.indexOf(p[0]) != -1 ){
                 cnt++;
            }
            if(g.indexOf(p[1]) != -1 ){
                 cnt++;
            }
            if(g.indexOf(p[2]) != -1){
                 cnt++;
            }
            if(cnt >= h){
              if( g.indexOf(p[0]) == -1 ){
                c = p[0];
                if(elem.indexOf(c) != -1){
                  break;
                }
               } 
              if( g.indexOf(p[1]) == -1){
                c = p[1];
                if(elem.indexOf(c) != -1){
                  break;
                }
               } 
              if( g.indexOf(p[2]) == -1){
                c = p[2];
                if(elem.indexOf(c) != -1){
                  break;
                }
               } 
            }
            if(elem == ""){
               c = 0;
               break;
              }
             cnt = 0;
           }
        
        if(c == 0 && elem != ""  || elem.indexOf(c) == -1 && elem != ""){
          while(true){
            let  i =  Math.floor(Math.random() * unarray.length);
            let p = unarray[i];
            if(elem.indexOf(p) != -1){
              c = p;
              break;
            }
          }
          log = 0;
         
        }
       
       
    return c;
}



function RobotSecond(){
  let g = "";
  let elem = "";
  let evil ="";
  for(let k = 0 ; k < array.length; k++){
    g  += array[k];
  }
  for (let index = 0; index < unarray.length; index++) {
    elem += unarray[index];
    
  }
  for (let ind = 0; ind < vilanArray.length; ind++) {
    evil += vilanArray[ind];
    
  }
  //順番を直す
  const win_patterns = [
    [1, 2, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [4, 5, 6],
    [3, 5, 7],
    [1, 5, 9],
    [7, 8, 9]
];
const vice_patterns = win_patterns;
const win_patterns1 = [[3, 5, 7],[1, 5, 9]];

      while(true){
        let v = Math.floor(Math.random() * vice_patterns.length);
        win_patterns1.push(vice_patterns[v]) ;
           vice_patterns.splice(v,1);
           if(vice_patterns <= 0){
            break;
           }  
      }
      let c = 0;
      let cnt = 0;
      let h = 1;
      if(evil.length > 1){
       h = 2;
      }
     for(let i = 0; i < win_patterns1.length;i++){
            let p = win_patterns1[i];
            if(evil.indexOf(p[0]) != -1 ){
                 cnt++;
            }
            if(evil.indexOf(p[1]) != -1 ){
                 cnt++;
            }
            if(evil.indexOf(p[2]) != -1){
                 cnt++;
            }
            if(cnt >= h){
              if( evil.indexOf(p[0]) == -1 ){
                c = p[0];
                if(elem.indexOf(c) != -1){
                 
                  break;
                }
               } 
              if( evil.indexOf(p[1]) == -1){
                c = p[1];
                if(elem.indexOf(c) != -1){
                  break;
                }
               } 
              if( evil.indexOf(p[2]) == -1){
                c = p[2];
                if(elem.indexOf(c) != -1){
                  break;
                }
               } 
            }
            if(elem == ""){
               c = 0;
               break;
              }
             cnt = 0;
        }

        if(c == 0 && elem != "" || c == log && elem != "" || elem.indexOf(c) == -1 && elem != ""){
          for(let i =0 ; i < win_patterns1.length; i++){
            let p = win_patterns1[i];
            if(g.indexOf(p[0]) != -1 ){
              cnt++;
         }
         if(g.indexOf(p[1]) != -1 ){
              cnt++;
         }
         if(g.indexOf(p[2]) != -1){
              cnt++;
         }
         if(cnt >= 2){
          if( g.indexOf(p[0]) == -1 ){
            c = p[0];
            if(elem.indexOf(c) != -1){
              break;
            }
           } 
          if( g.indexOf(p[1]) == -1){
            c = p[1];
            if(elem.indexOf(c) != -1){
              break;
            }
           } 
          if( g.indexOf(p[2]) == -1){
            c = p[2];
            if(elem.indexOf(c) != -1){
              break;
            }
           } 
        }
        if(elem == ""){
          c = 0;
          break;
         }
        cnt = 0;
          }
          if(c == 0 && elem != "" || c == log && elem != "" || elem.indexOf(c) == -1 && elem != ""){
          while(true){
            let  i =  Math.floor(Math.random() * unarray.length);
            let p = unarray[i];
            if(elem.indexOf(p) != -1){
              c = p;
              break;
            }
          }
         
        }
        log = 0;
        }
      // if(k > 0){
      //   log = c;
      // }
       
    return c;
}

function buttons(){
  for(let i = 1; i <= 9; i++ ){
      document.getElementById(i).addEventListener("click",function(e){
      clickB(e);
      });
  }
}
buttons();
document.getElementById("resert").addEventListener("click",function(){
  resert();
});
document.getElementById("b1").addEventListener("click",function(){
  HvsH();
  document.getElementById("b1").style.display="none";
  document.getElementById("b2").style.display="none";
  document.getElementById("section").style.display = "none";
});
document.getElementById("b2").addEventListener("click",function(){
  HvsR();
  document.getElementById("b1").style.display="none";
  document.getElementById("b2").style.display="none";
});
document.getElementById("X").addEventListener("click",function(){
  fastpass();
  document.getElementById("section").style.display = "none";
});
document.getElementById("O").addEventListener("click",function(){
  secondpass();
  document.getElementById("section").style.display = "none";
});


