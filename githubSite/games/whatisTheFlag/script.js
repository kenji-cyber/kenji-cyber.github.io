let photo = document.getElementById("img");
document.getElementById("box").style.visibility ="hidden";
let resertButton = document.getElementById("resertButton");
resertButton.style.visibility ="hidden";
photo.style.visibility="hidden";


 function restart(){
  photo.style.visibility="hidden";
  document.getElementById("box").style.visibility ="hidden";
  document.getElementById("wo").style.visibility="visible";
  setTimeout(r,5000);
  function r(){
  location.href = "Whatistheflag.html";
  }
 }
function this_program(){
  document.getElementById("startButton").style.visibility ="hidden";
  photo.style.visibility="visible";
  resertButton.style.visibility="visible";
  document.getElementById("box").style.visibility ="visible";

  let Arrayimg = [];
  var i = 0;
  let word ="";
  let currectWord = "";
  var inputValue = "";
  var count = 0;
  var img = makeArray();
  createArray();
  imgs();
  window.addEventListener("keyup", function(e){    
  inputValue = e.key; 
//もし文字が当たったら指定場所に設置
  for(let y = 0; y < img[i].length;y++){
    if(img[i].charAt(y) == inputValue){
      Arrayimg[y] = inputValue;
    }
  }
  //表示する文字列の生成
    for(let str = 0; str < Arrayimg.length; str++){
      word += Arrayimg[str];
      currectWord += " "+Arrayimg[str]+" "; 
    }
    document.getElementById("words").innerHTML = currectWord;
    //全文字当たった時
    if(word == img[i]){
      i++;
      Arrayimg = [];
      word ="";
      document.getElementById("words").innerHTML = currectWord;
      look ="";
      count += 17.7;
      setTimeout(interval,100);
      function interval(){
      imgs();
      countDown0();
      createArray();
      }
     
    }
    word ="";
    currectWord ="";
    
    
});

function makeArray(){
  const imgA = ["brazil","japan","america","england","germany","italia",
                "mexico","singapore","spain","portugal","india","france",
                "slovenia","senegal","greece","china","australia"];
  let maxword = imgA.length;
  let imgB = imgA;
  let array =[];
  let p = 0;
  while(true){
   let  g =  Math.floor(Math.random() * imgB.length);
    array[p] = imgB[g];
    imgB.splice(g,1); 
    if(array.length >= maxword){
      break;
    }
    p++;
  }
  return  array;
}
 function imgs(){
  if(img.length > i){
    photo.src = "images/"+img[i]+".png";
  // }else{
  //  i = 0;
  //  photo.src = "images/"+img[i]+".png";
  // }
}
 }

function  createArray(){
  for(let j = 0; j < img[i].length; j++){
     Arrayimg[j] = " _ ";
     word += Arrayimg[j];
  }
document.getElementById("words").innerHTML = word;
word ="";
}


function countDown0(){
 if(count < 300 ){
  document.getElementById("progress").style.height = count+"px";
 }else{
  document.getElementById("words").style.visibility="hidden";
  
  restart();
 }
}
// countDown0();
// setInterval(countDown0,25);
}
document.getElementById("wo").style.visibility="hidden";
function onclickButton(){
 this_program();

}
//resert
function resert(){
  location.href = "Whatistheflag.html";
}
//timer
let strar = document.getElementById("startButton");
let titleWord = document.getElementById("Word");
let h = 0;
const color0 = ["red","blue","blueviolet"]
const color = ["yellow","red","blue","pink","blueviolet"]
function title(){
  let  i =  Math.floor(Math.random() * color0.length);
strar.style.backgroundColor = color0[i];
  if(h % 2 == 0){
    titleWord.style.color =color[h];
  }else{
    titleWord.style.color =color[h];
  }
  if(h >= 5){
    titleWord.style.color =color[h];
    h = 0;
    titleWord.style.color =color[h];
  }
h++;
}
title();
setInterval(title,800);

document.getElementById("home").addEventListener('click',function(){
  location.href = "../../main/index.html";
})
