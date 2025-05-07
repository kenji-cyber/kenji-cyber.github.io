const alphabet = [["Q","W","E","R","T","Y","U","I","O","P"],
                   ["A","S","D","F","G","H","J","K","L"],
                   ["Z","X","C","V","B","N","M"]];
const alphabet_JP = [["あ", "い", "う", "え", "お", "か", "き", "く","こ"],
                     ["さ", "し","す","た", "ち", "つ", "て","と","な","に"],
                     [ "ま", "み", "め", "や", "ら","り","る","ろ","が","ぎ"],
                     ["ご","じ","だ", "び", "ぼ","ん","ー"]
                  ];
  

  const sakana = [
    "あいなめ", "あおうお", "あおがい", "あかいか", "あかえび", "あまだい",
    "いいだこ", "いしがに", "いしだい", "うみうし", "あかえい", "おおぼら",
    "おきあみ", "おじさん", "かいだこ", "かんだい", "きびなご", "くまえび",
    "くろだい", "こういか", "しまあじ", "ぎんだら", "たちおう", "とびおう",
    "あまえび", "あんこう", "しまあじ"
  ];
  const yasai = [
    "えだまめ", "ししとう", "たーさい", "だいこん", "とうがん",
    "にんにく", "にんじん", "やーこん","えりんぎ",
  ];
  const tabemono = [
    "うめぼし", "えびちり", "えりんぎ", "おにぎり", "きしめん", "ぎんなん",
    "くろまめ", "こしあん", "たこやき", "てりやき", "とんかつ", "たいやき",
    "かまぼこ", "いかさし", "にくまん", "あじたま", "しおから", "えびてん",
    "かにたま", "しらたま", "いかてん", "あおうし", "かにまき", "うにまき",
    "すきやき", "らーめん", "あんまん", 
  ];
  const fruits = [
    "あさいー","だいだい","ぼんたん","まんごー","いちじく","ここやし"
    ];


const linguage = ["Portuguese","English","Japanese"]; 
const keyboardCol = ["col-one","col-two","col-tree","col-four"];
const keyboard = document.getElementById("keyboard");
const wordboard = document.getElementById("center-box");
var mainAlphabet = [];
var pointer = [];
var col = 6;
var row = 5;
var rowNumber = 0;
var usedWord =[];
var mainWord = [];
var stageClear = 0;
var checkStage = [];
var stage = 1;
var wordsArray = [];
var usedLinguage;
var sizecell = 25;
var cellfont = 15;
var flagInfoPainel = true;
var flagHintPainel = true;
let infos;
var type =[];
var retunlang = "return";
function chooseWord(){
    mainWord = [];
    type = [];
    for(let i = 0; i < stage;i++){
    let randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    while(usedWord.includes(randomWord)){
        randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    }
    mainWord.push(randomWord);
    usedWord.push(randomWord);
    if(usedLinguage === linguage[2]){
       if(tabemono.includes(randomWord)){
        type.push(`${i+1}.食べ物`);
       }else if(sakana.includes(randomWord)){
        type.push(`${i+1}.魚・貝・海`);
       }else if(yasai.includes(randomWord)){
        type.push(`${i+1}.野菜`);
       }else{
        type.push(`${i+1}.フルーツ`);
       }
       
    }
}
//    console.log("words:"+mainWord);
//    console.log(type);
}

function hint(){
    const hint = document.getElementById("imgHint");
    hint.src = "img/cross.png";
    keyboard.style.display = "none";
    wordboard.style.display ="none";
    const body = document.getElementById("display");
    const painel = document.createElement("div");
    painel.style.display = "inline-block";
    painel.id = "HINT";
    painel.style.border = "4px black solid";
    painel.style.width = "250px";
    painel.style.height = "250px";
    painel.style.borderRadius = "20px";
    painel.innerHTML =`<h2>ヒント<h2> <h3>${type}<h3>`;
    painel.style.textAlign = "left";
    painel.style.paddingLeft = "10px";
    painel.style.margin = "50px auto";
    painel.style.background = "#dcdcdc";
    painel.fontSize = "20px";
    body.appendChild(painel);
}
function cancelHint(){
    keyboard.style.display = "block";
    wordboard.style.display ="flex" ;
    const hint = document.getElementById("imgHint");
    hint.src = "img/hint.png";
    let h = document.getElementById("HINT");
    h.remove();
}
function buttonHint(){
    const body = document.getElementById("display");
    const hint = document.createElement("div");
    const h = document.createElement("img");
    h.src = "img/hint.png";
    h.style.width = "30px";
    h.style.height ="30px";
    h.style.paddingTop ="8px";
    h.id = "imgHint";
    hint.style.position ="fixed";
    hint.style.width = "45px";
    hint.style.height = "45px";
    hint.id = "button-hint";
    hint.style.borderRadius = "40px";
    hint.style.bottom = "18px";
    hint.style.left = "45%";
    hint.style.backgroundColor = "#BFFF00";
    hint.appendChild(h);
    body.appendChild(hint);
}

function makeKeyboard(){
  let max = keyboardCol.length;
    if(usedLinguage !== linguage[2]){
       max = keyboardCol.length-1;
    }
    let rig = 10;
    for(let i = 0; i < max; i++){
        const col = document.createElement(keyboardCol[i]);
        col.id = keyboardCol[i];
        col.style.width = "88%";
        col.style.height = "35px";
        col.className = "box";
        col.style.marginLeft = `${rig}px`;
            for(let x = 0; x < mainAlphabet[i].length;x++){
                let char = mainAlphabet[i][x];
                const button = document.createElement("a");
                button.className = "button-key-char";
                button.id = char;
                button.innerHTML = char;
                col.appendChild(button);
            }
        keyboard.appendChild(col);
        rig+=10;
    }
    const enter = document.createElement("a");
    enter.className = "enter-button";
    enter.id = "Enter"
    enter.innerHTML = "ENTER";
    const BackSpace = document.createElement("a");
    BackSpace.className = "BackSpace-button";
    BackSpace.id = "BackSpace"
    BackSpace.innerHTML = "Back Space";
    const col = document.getElementById(keyboardCol[max-1]);
    col.appendChild(enter);
    col.appendChild(BackSpace);
    keyboard.appendChild(col); 
}

function makeWordboard(){
    if(stage >= 3){
       sizecell = 15;
       cellfont = 10;
       wordboard.style.height = "300px";
       const information_button = document.getElementById("information");
       information_button.style.height = "45px";
       information_button.style.width = "45px";
       information_button.style.top = "90%";
    }else{
        sizecell -= 3;
        cellfont -= 2;
    }
for(let s = 1; s < (stage+1);s++){
const table = document.createElement("table");
table.id = s+"-"+"table";
    for(let i = 0; i < col;i++){
        const tr = document.createElement("tr");
        for(let j = 0; j < row; j++){
            const td = document.createElement("td");
            td.id = s+""+i+""+j;
            td.style.width = `${sizecell}px`;
            td.style.height = `${sizecell}px`;
            td.style.fontSize = `${cellfont}px`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
 pointer.push(s+"0"+"0");
 checkStage.push(true);
 wordboard.appendChild(table);
 const index = document.getElementById(pointer[pointer.length-1]);
 index.style.border= "2px #FF4C4C solid";
}

}

function removeTable(){
    for(let i = 0; i < stage; i++){
        let name = (i+1)+"-table";
        const table = document.getElementById(name);
        table.remove();
    }
}

//ポルトガル語バージョン
async function portugueseGame(){
    const painel = document.getElementById("painel");
    painel.remove();
     wordsArray =   await loadInfomation("Portuguese");
    mainAlphabet = alphabet;
    startGame();
}
//英語バージョン
async function englishGame(){
    const painel = document.getElementById("painel");
    painel.remove();
    wordsArray = await loadInfomation("English");
    mainAlphabet = alphabet;
    startGame();
}
//日本語バージョン
async function japaneseGame(){
    const painel = document.getElementById("painel");
    painel.remove();
    row = 4;
    wordsArray =  await loadInfomation("Japanese");
    mainAlphabet = alphabet_JP;
    startGame();
}

function returnMain(){
    location.href = "index_phone.html";
}

//案内表を作成
function infomationPainel(){
    keyboard.style.display = "none";
    wordboard.style.display ="none" ;
    const painel = document.getElementById("painel");
    if(painel){
       painel.style.display = "none";
    }
    const icon = document.getElementById("icon-info");
    icon.src = "img/cross.png";
    createPainel();
}

//案内表
function createPainel(){
    if(!usedLinguage){
        const img = document.getElementById("img");
        img.style.left = "10px";
        img.style.bottom = "50px";
        img.style.transform = "rotate(0deg)";
        img.style.width = "100px";
        img.style.height = "100px";
    }
    keyboard.style.display = "none";
    wordboard.style.display ="none" ;
    const body = document.getElementById("display");
    const painel = document.createElement("div");
    painel.style.display = "inline-block";
    painel.id = "info-painel";
    painel.style.border = "4px black solid";
    painel.style.width ="300px";
    painel.style.height ="100%";
    painel.style.borderRadius = "20px";
    painel.innerHTML = infos;
    painel.style.textAlign = "left";
    painel.style.paddingLeft = "10px";
    painel.style.margin = "50px auto";
    painel.style.background = "#dcdcdc";
    painel.fontSize = "20px";
    body.appendChild(painel);
}
function cancelPainel(){
    if(!usedLinguage){
        const img = document.getElementById("img");
        img.style.left = "5px";
        img.style.bottom = "62%";
        img.style.transform = "rotate(-20deg)";
        img.style.width = "200px";
        img.style.height = "200px";
    }
    keyboard.style.display = "block";
    wordboard.style.display ="flex" ;
    let painel = document.getElementById("info-painel");
    if(painel){
        painel.remove();
    }
    painel = document.getElementById("painel");
    if(painel){
        painel.style.display = "block";
     }
    const icon = document.getElementById("icon-info");
    icon.src = "img/info.png";
}

async function loadInfo(lang) {
    try {
      const res = await fetch("game_data/data.json");
      const data = await res.json();
      infos = data[lang].info;
    } catch (err) {
      console.error("データの読み込みに失敗:", err);
    }
  }

async function loadInfomation(lang) {
    try {
      const res = await fetch("game_data/data.json");
      const data = await res.json();
      infos = data[lang].info;
      return await data[lang].words;
    } catch (err) {
      console.error("データの読み込みに失敗:", err);
    }
  }

document.addEventListener("click",(e)=>{
    //クリックしたものIDを取得(IDからボタンの操作が行う)
    let ID =  e.target.id;
    if(ID === "return"){
        returnMain();
     }
    if(ID === "button-hint" || ID === "imgHint"){
        let painel = document.getElementById("info-painel");
        if(!painel){
       if(flagHintPainel){
        hint();
        
        flagHintPainel = false;
       }else{
        cancelHint();
        flagHintPainel = true;
       }
      }
    }
    if(ID === "information" || ID === "icon-info"){
        let painel = document.getElementById("HINT");
        if(!painel){
        if(flagInfoPainel){
            infomationPainel();
            flagInfoPainel = false;
        }else{
            cancelPainel();
            flagInfoPainel = true;
        }
    }
       
    }
    if(ID === "img"){
        returnMain();
    }
    //言語の選択
    const img = document.getElementById("img");
    if(ID === linguage[0]){
        usedLinguage = linguage[0];
        img.src = "img/multiTermo_BR.png";
        portugueseGame();
    }else if(ID === linguage[1]){
        usedLinguage = linguage[1];
        img.src = "img/multiTermo_US.png";
        englishGame();
    }else if(ID === linguage[2]){
        usedLinguage = linguage[2];
        img.src = "img/multiTermo_JP.png";
        retunlang  = "戻る";
        buttonHint();
        japaneseGame();
    }
    //マスを選択した時の処理
    if (!isNaN(Number(ID)) && ID != null && ID != "") {
        const num = ID;
        let n2 = num[1];
        let n3 = num[2];
        if(n2 == rowNumber){
        for(let i = 0; i < pointer.length; i++){
            if(pointer[i] != "" && checkStage[i]){
            //元のもののボーダーを黒に戻す
            const index = document.getElementById(pointer[i]);
            index.style.border="2px black solid";
            pointer[i] = (i+1)+""+n2+""+n3;
            //ボーダーを青に変える
            const index2 = document.getElementById(pointer[i]);
            index2.style.border="2px #FF4C4C solid";
            }
         }
        }
     
      } else {
        //IDが一文字の場合
        if(ID.length === 1){
            //ちゃんとしたマス（ポインタ）に文字を入力
            for(let i = 0; i < pointer.length; i++){
             if(pointer[i] != "" && checkStage[i]){
                const num = pointer[i];
                let n1 = num[0];
                let n2 = num[1];
                let n3 = num[2];
                karipointer = n1+""+n2+""+n3;
                const index = document.getElementById(karipointer);
                index.style.border="2px black solid";
                index.innerHTML = ID;
            if(n3 < (row-1)){
                n3++;
            }
                pointer[i] = n1+""+n2+""+n3;
                const index2 = document.getElementById(pointer[i]);
                index2.style.border="2px #FF4C4C solid";
           }
    }
       
      
        }else if(ID === "BackSpace"){
            //マスを空にする
            for(let i = 0; i < pointer.length;i++){
                if(pointer[i] != "" && checkStage[i]){
                    const num = pointer[i];
                    let n1 = num[0];
                    let n2 = num[1];
                    let n3 = num[2];
                    karipointer = n1+""+n2+""+n3;
                    const index = document.getElementById(karipointer);
                    index.style.border="2px black solid";
                    index.innerHTML = "";
                    if(n3 > 0){
                        n3--;
                    }else{
                        n3 = 0;
                    }
                    pointer[i] = n1+""+n2+""+n3;
                    const index2 = document.getElementById(pointer[i]);
                    index2.style.border="2px #FF4C4C solid";
                }
            }
          //文字の入力が終わった時の処理
        }else if(ID === "Enter"){
            //まだ終わっていないステージを探す
            let num;
           for(let p = 0; p < checkStage.length; p++){
              if(checkStage[p]){
                num = pointer[p];
              }
           }
            let n1 = num[0];
            let n2 = num[1];
            let word = "";
            let flagKeyCheckChar = true;
            var flagkeyBoard = false;
            //空文字があるかどうかの判断
            for(let i = 0; i < row; i++){
                const char = document.getElementById(n1+""+n2+""+i);
                let character = char.innerHTML;
                if(character === ""){
                    flagKeyCheckChar = false;
                    break;
                }else{
                    word += character;
                }
            }
            if(!flagKeyCheckChar){
                alert("Invalid word");
            }else{
                console.log(word)
                if(!wordsArray.includes(word)){
                    alert("Invalid word");
                }else{
                    for(let s = 1; s < (stage+1);s++){
                        if(checkStage[s-1]){
                        let pointerIndex = pointer[s-1];
                        if(pointerIndex.length <= 1){
                        for(let p = 0; p < pointer.length; p++){
                            if(pointer[p].length > 1){
                                pointerIndex = pointer[p];
                            }
                         }
                        }
                    if(word === mainWord[s-1]){
                        for(let i = 0; i < row; i++){
                            const char = document.getElementById(s+""+pointerIndex[1]+""+i);
                            char.style.background = "#00ff7f";
                            char.style.color = "#000";
                            const index = document.getElementById(pointerIndex);
                            index.style.border="2px black solid";
                            pointer[s-1] = "";
                            checkStage[s-1] = false;
                            console.log("checkStage:"+checkStage);
                          
                        }
                        stageClear++;
                    }else{
                        let arrayWord = word;
                        let arrayMainWord = mainWord[s-1];
                        let invalidChar = [];
                        //場所が違うけど文字が合っています
                        for(let i = 0; i < arrayWord.length;i++){
                            for(let j = 0 ; j < arrayMainWord.length;j++){
                                if(arrayWord[i] === arrayMainWord[j] && !invalidChar.includes(arrayWord[i])){
                                    const char = document.getElementById(s+""+pointerIndex[1]+""+i);
                                    char.style.background = "#ffff00";
                                    char.style.color = "#000";
                                    invalidChar.push(arrayMainWord[j]);
                                    break;
                                }
                            }
                           
                        }
                        //場所と文字が当てます
                        for(let i = 0; i < arrayWord.length;i++){
                            if(arrayWord[i] === arrayMainWord[i]){
                                const char = document.getElementById(s+""+pointerIndex[1]+""+i);
                                char.style.background = "#00ff7f";
                                char.style.color = "#000";
                            }
                        }

                        const index = document.getElementById(pointerIndex);
                        index.style.border="2px black solid";
                        let n3 = pointerIndex[2];
                        let n2 = pointerIndex[1];
                        if(n2 < col){
                             n2++;
                             n3 = 0;
                             flagkeyBoard = true;
                        }
                        n2 = n2 === (col) ? (col-1) : n2;
                        pointer[s-1] = s+""+n2+""+n3;
                        const index2 = document.getElementById(pointer[s-1]);
                        index2.style.border="2px #FF4C4C solid";

                    }
                }
            }
                if(stage === stageClear){
                    if(stage < 4){ 
                        setTimeout(()=>{
                            removeTable();
                            stage++;
                            stageClear = 0;
                            checkStage = [];
                            pointer = [];
                            rowNumber = 0;

                            makeWordboard();
                            
                            chooseWord();
                        },1500);
                       
                    }
                }else{
                    if(flagkeyBoard){
                        rowNumber++;
                        flagkeyBoard = false;
                    }
                    if(rowNumber > (col-1)){
                        youlose();
                    }
                }
              
                 
                }

            }
        }
      }
})
function youlose(){
    let hint = document.getElementById("button-hint");
    if(hint){
    hint.remove();
    }
    let info = document.getElementById("information");
    if(info){
        info.remove();
    }
    keyboard.style.display = "none";
    wordboard.style.display ="none" ;
    const body = document.getElementById("display");
    const painel = document.createElement("div");
    painel.id = "Losepainel";
    painel.style.border = "4px black solid";
    painel.style.width ="300px";
    painel.style.height ="200px";
    painel.style.borderRadius = "20px";
    painel.style.display = "inline-block";
    painel.innerHTML = `<h2>YOU LOSE!</h2><h3>Currect Word: ${mainWord}</h3>`;
    painel.style.textAlign ="center";
    painel.style.margin = "200px auto";
    painel.style.background = "#FF4C4C";
    const btn = document.createElement("button");
    btn.id = "return";
    btn.style.border = "2px black solid";
    btn.style.borderRadius = "10px";
    btn.style.width ="70px";
    btn.style.height ="40px";
    btn.style.margin = "10px auto";
    btn.innerHTML = retunlang;
    btn.style.alignItems = "center";
    btn.style.background = "#BFFF00";
    painel.appendChild(btn);
    body.appendChild(painel);
}

function painel(){
    const body = document.getElementById("display");
    const painel = document.createElement("div");
    painel.id = "painel";
    painel.style.position = "fixed";
    painel.style.border = "5px black solid";
    painel.style.width ="250px";
    painel.style.height ="250px";
    painel.style.borderRadius = "20px";
    painel.innerHTML = "Choose Language";
    painel.style.fontSize = "25px";
    painel.style.textAlign ="center";
    painel.style.top = "32%";
    painel.style.left = "20%";
    painel.style.background = "#00FFFF";
    for(let i = 0; i < linguage.length; i++){
        const button = document.createElement("button");
        button.id = linguage[i];
        button.style.border = "2px black solid";
        button.style.borderRadius = "10px";
        button.style.width ="120px";
        button.style.height ="40px";
        button.type = "button";
        button.className ="button-linguage";
        button.style.fontSize ="20px";
        button.style.margin = "10px 5px 10px 10px";
        button.innerHTML = linguage[i];
        button.style.background = "#BFFF00";
        painel.appendChild(button);
    }
    body.appendChild(painel);
}

function startGame(){
    const img = document.getElementById("img");
    img.style.left = "10px";
    img.style.bottom = "10px";
    img.style.transform = "rotate(0deg)";
    img.style.width = "60px";
    img.style.height = "60px";
    keyboard.style.display = "block";
    wordboard.style.display ="flex" ;
    makeKeyboard();
    makeWordboard();
    chooseWord();
}
document.getElementById("home").addEventListener('click',function(){
    location.href = "../../main/index.html";
  });
window.addEventListener("DOMContentLoaded", () => {
      painel();
      const lang = navigator.language;
      if (lang.startsWith("ja")) {
        loadInfo("Japanese");
      } else if (lang.startsWith("pt")) {
       loadInfo("Portuguese");
      } else{
       loadInfo("English");
      } 
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
     
        if (!isMobile) {
            location.href = `index.html`;
        }
  });

