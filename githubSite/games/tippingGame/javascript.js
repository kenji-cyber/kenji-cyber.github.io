
 var yoursquare = 0 ;
//resert
function resert(){
  document.getElementById("button2").style.visibility="hidden";
  document.getElementById("box").style.visibility="hidden";
  document.getElementById("word").style.visibility="hidden";
  document.getElementById("title_box").style.visibility="hidden";
  document.getElementById("h6").style.visibility="hidden";
  document.getElementById( "timestart" ).style.visibility="hidden";
  const timerout = document.getElementById("timerout");
  const progress = document.getElementById("progress");
 progress.style.visibility="hidden";
 timerout.style.visibility="hidden";
 document.getElementById( "timestart" ).style.visibility="visible";
 document.getElementById( "timestart" ).style.fontSize="35px"
 document.getElementById( "timestart" ).innerHTML ="Your Square:"+yoursquare;
 setTimeout(wlr,5000)
}
function wlr(){
location.href = "index.html";
}

function program(){
  const progress = document.getElementById("progress");
  let i = 0;
  let j = 0;
  let word ="";
  let inputValue = "";
  rand_word();
  What_word();
 
  window.addEventListener("keyup", function(e){    
          inputValue = e.key; 
          inputCheck();
   });
 var square = 0;
  function inputCheck(){
    document.getElementById( "kaku" ).innerHTML = square;
      if(inputValue == array[i].charAt(j)){
         word+=inputValue;
         document.getElementById( "check" ).innerHTML = word;
         j++;
       }
     if(word == array[i]){
        document.getElementById( "kaku" ).innerHTML = square+=100;
        document.getElementById( "check" ).innerHTML = "";
        word = "";
        count = 0;
        i++;
        j = 0;
     if(i >= array.length || square > 999){
      yoursquare = square;
      resert();
       }
     What_word();
     Countdown();
     }
    
 
}
function rand_word(){
  
  array = make_array();
  
return array;
}
function make_array(){
  let p = 0;
  let g = 0;
  const arrays = [
    "virtualization", "cloudcomputing", "cybersecurity", "machinelearning", 
    "artificialintel", "databasemanagem", "softwaretesting", "networksecurity", 
    "distributedcomp", "applicationdev", "informationtech", "frontendbackend", 
    "programminglang", "dataanalyticsys", "systemintegration", 
    "digitaltransfor", "continuousdeploy", "servervirtualiz", "databaseencryp", 
    "blockchainledger", "naturalprocessing", "augmentedreality", 
    "devopsautomation", "highavailability", "containerorches"
];
 
  let numarray = arrays;
  let array = [];
  while(true){
  g =  Math.floor(Math.random() * numarray.length);
  array[p] = numarray[g];
  numarray.splice(g,1);
  if(array.length > 10){
    break;
  }
  p++;
  }
  numarray = arrays;
  return array;
}
var wordlen = 7;
function What_word(){
   document.getElementById("word").innerHTML = array[i];
   if(array[i].length > wordlen){
    document.getElementById( "box" ).style.marginLeft ="50px"
    document.getElementById( "box" ).style.width ="350px"
   }
}
var count = 1;
const boxsize = 300;
   function Countdown(){
    if(count <= boxsize ){
      progress.style.width = count+"px";
       count+=1;
    }else{
     i++;
     j = 0;
     count = 0;
     word = "";
     inputValue = "";
     document.getElementById( "check" ).innerHTML = "";
     if(i >= array.length || square > 999){
      yoursquare = square;
      resert();
       }
     }
     What_word();
     inputCheck();
}
Countdown();
setInterval(Countdown,25);

}
//hardmode
function program2(){
  const progress = document.getElementById("progress");
  let i = 0;
  let j = 0;
  let word ="";
  let inputValue = "";
  rand_word();
  What_word();
  window.addEventListener("keyup", function(e){    
          inputValue = e.key; 
          inputCheck();
   });
 var square = 0;
  function inputCheck(){
    document.getElementById( "kaku" ).innerHTML = square;
      if(inputValue == array[i].charAt(j)){
         word+=inputValue;
         document.getElementById( "check" ).innerHTML = word;
         j++;
       }
     if(word == array[i]){
        document.getElementById( "kaku" ).innerHTML = square+=100;
        document.getElementById( "check" ).innerHTML = "";
        word = "";
        count = 0;
        i++;
        j = 0;
        if(i >= array.length || square > 1199){
          yoursquare = square;
          resert();
           }
     What_word();
     Countdown();
     }
    
}
function rand_word(){
        
        array = make_array();
        
      return array;
}
function make_array(){
  let p = 0;
  let g = 0;
  const arrays = [
    "algorithm", "databases", "cloudtech", "cyberware", "virtualize", 
    "frontenddev", "backenddev", "middleware", "machineai", "bigdatapro", 
    "blockchain", "artificial", "datamodel", "encryption", "firewallde", 
    "authentica", "virtualenv", "datastruct", "devopscloud", "programmer", 
    "javascript", "typescript", "machineops", "debugtools", "networking", 
    "containers", "interpreter", "loadbalanc", "datacenter", "microserv"
];
              let numarray = arrays;
              let array = [];
              while(true){
              g =  Math.floor(Math.random() * numarray.length);
              array[p] = numarray[g];
              numarray.splice(g,1); 
              if(array.length > 15){
                break;
              }
              p++;
              }
              numarray = arrays;
        return array;
}
function What_word(){
        document.getElementById("word").innerHTML = array[i];
        if(array[i].length > 7){
          document.getElementById( "box" ).style.marginLeft ="50px"
          document.getElementById( "box" ).style.width ="350px"
        }
}

var count = 1;
const boxsize = 300;
   function Countdown(){
    if(count <= boxsize ){
      progress.style.width = count+"px";
       count+=1;
    }else{
     i++;
     j = 0;
     count = 0;
     word = "";
     inputValue = "";
     document.getElementById( "check" ).innerHTML = "";
     if(i >= array.length || square > 1199){
      yoursquare = square;
      resert();
       }
     }
     What_word();
     inputCheck();
}
Countdown();
setInterval(Countdown,12);
}
  document.getElementById("button2").style.visibility="hidden";
  document.getElementById("box").style.visibility="hidden";
  document.getElementById("word").style.visibility="hidden";
  document.getElementById("title_box").style.visibility="hidden";
  document.getElementById("h6").style.visibility="hidden";
  document.getElementById( "timestart" ).style.visibility="hidden";
  const timerout = document.getElementById("timerout");
  const progress = document.getElementById("progress");
 progress.style.visibility="hidden";
 timerout.style.visibility="hidden";
const button1 = document.getElementById("button1");
var code = "";

function OnButtonClick(){
      document.getElementById( "timestart" ).style.visibility="visible";
      document.getElementById("word").style.marginLeft ="-70px";
      document.getElementById("check").style.marginLeft ="-70px";
        code = "program";
      start_time();
}
function OnButtonClick2(){
      document.getElementById( "timestart" ).style.visibility="visible";
    
        code = "program2";
        start_time();
}
var timer = 3;
const color =["yellow","blue","red","green"];
function start_time(){
        if(timer >= 0){
          if(timer != 0){
            document.getElementById( "timestart" ).style.color = color[timer];
          document.getElementById( "timestart" ).innerHTML = timer;
          }else{
            document.getElementById( "timestart" ).style.color = color[timer];
            document.getElementById( "timestart" ).innerHTML = "Start!";
          }
          timer--;
          setTimeout(start_time,800);
        }else{
          document.getElementById( "timestart" ).style.visibility="hidden";
          document.getElementById( "check" ).style.visibility="visible";
          document.getElementById("word").style.visibility="visible";
          document.getElementById("box").style.visibility="visible";
          document.getElementById("button2").style.visibility="visible";
          document.getElementById("title_box").style.visibility="visible";
          document.getElementById("h6").style.visibility="visible";
          document.getElementById("h6").innerHTML="square:";
          progress.style.visibility="visible";
          timerout.style.visibility="visible";
          if(code == "program"){
            program();
          }else if(code == "program2"){
            program2();
          }

        }
  button1.style.visibility="hidden";
  document.getElementById("button1_1").style.visibility="hidden";
}

//title
var n = 0;
var distext ="";
var text = "Tipping_Game !";
document.getElementById("tg").innerHTML = "";
function title(){
        if(n < text.length){
          distext +=text.charAt(n);
          document.getElementById("title").innerHTML = distext+"|";
          n++;
        }else{
          n = 0;
          distext ="";
          document.getElementById("title").innerHTML = distext+"|";
        }
}
title();
setInterval(title,500);