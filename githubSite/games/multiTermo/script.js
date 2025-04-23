const alphabet = [["Q","W","E","R","T","Y","U","I","O","P"],
                   ["A","S","D","F","G","H","J","K","L"],
                   ["Z","X","C","V","B","N","M"]];
const alphabet_JP = [["あ", "い", "う", "え", "お", "か", "き", "く","け","こ"],
                   ["さ", "し","す","せ","そ","た", "ち", "つ", "て","と","な","に"],
                   [ "ま", "み", "め", "や", "ら","り","る","ろ","が","ぎ"],
                   ["ご","じ","だ","ど", "び", "ぼ","ん","ー"]
                ];
const words_English = [
    "APPLE", "BRAVE", "CANDY", "DELTA", "EAGLE", "FANCY", "GIANT", "HAPPY", "IVORY", "JOKER",
    "KNEEL", "LUCKY", "MAGIC", "NOBLE", "OCEAN", "PIANO", "QUIET", "RAVEN", "SHINE", "TIGER",
    "ULTRA", "VIVID", "WHALE", "XENON", "YOUTH", "ZEBRA", "ANGEL", "BEACH", "CLIMB", "DREAM",
    "EVENT", "FLAME", "GRAPE", "HOUSE", "IMAGE", "JELLY", "KARMA", "LEMON", "MANGO", "NERDY",
    "ORBIT", "PAINT", "QUEEN", "ROBOT", "SUGAR", "TRACK", "UNDER", "VOCAL", "WRIST", "XEROX",
    "YIELD", "ZESTY", "AMBER", "BLAZE", "CRISP", "DRIFT", "EMBER", "FLOOD", "GLOBE", "HINGE",
    "INFER", "JAUNT", "KIOSK", "LUNAR", "MINOR", "NUDGE", "OXIDE", "PEARL", "QUILT", "RISKY",
    "SPIKE", "TREND", "UNTIE", "VIGOR", "WRATH", "XYLEM", "YOUNG", "ZONAL", "ALERT", "BLOOM",
    "COUCH", "DIZZY", "EQUIP", "FROST", "GLOOM", "HASTE", "IDEAL", "JUMPS", "KNACK", "ROYAL",
    "MOIST", "NIFTY", "OCCUR", "PRIDE", "QUACK", "ROUGH", "SMILE", "THORN", "UNZIP", "VAULT",
    "FALSE", "RANGER", "LARGE", "ALERT","BREAK", "BREIF", "BREED", "BRING", "AUDIO", "BLACK",
      "APPLE",
  "HAPPY",
  "SMILE",
  "SNACK",
  "DANCE",
  "GAMES",
  "JOKES",
  "PIZZA",
  "MOVIE",
  "SWEET",
  "HELLO",
  "BUDDY",
  "FUNNY",
  "COCOA",
  "TREAT",
  "HOUSE",
  "SHIRT",
  "JEANS",
  "BOOKS",
  "SKATE",
  "BEACH",
  "CLOUD",
  "SUGAR",
  "MAGIC",
  "MUSIC",
  "CHIPS",
  "CANDY",
  "JELLY",
  "PARTY",
  "FAIRY",
  "BLOCK",
  "CHAIR",
  "CRUST",
  "SLIDE",
  "SWING",
  "BREAD",
  "FRIES",
  "COLOR",
  "BRUSH",
  "WATER",
  "TRAIN",
  "TRUCK",
  "HORSE",
  "PUPPY",
  "STARS"
  ];
  const words_Portuguese= [
    "ABACO", "BANCO", "CEGAR", "DENTE", "EXATO", "FUGIR", "GOSTO", "ROSTO", "IDEAL", "JOGAR",
    "KOALA", "LUZIR", "MISTO", "NOBRE", "OUSAR", "PROSA", "QUERO", "RISCO", "SUTIL", "TURVO",
    "URDIR", "VELOZ", "XAMPU", "YOGAR", "ZINCO", "AMIDO", "BERRO", "CASAL", "DADOS", "CHATO",
    "EXAME", "FALHO", "GABAR", "HONRA", "ISOLA", "JANIO", "KENDO", "LIMPO", "MODAL", "NUVEM",
    "ODIAR", "PUXAR", "QUASE", "ROUPA", "SONAR", "TORRE", "ULTRA", "VINIL", "ZELAR", "ACENO",
    "BRISA", "CHUVA", "DROGA", "ETAPA", "FESTA", "GRATO", "HOTEL", "INVES", "JUSTO", "TERMO",
    "LIVRO", "MASSA", "NARIZ", "OSTRA", "PARDO", "QUEDA", "RIVAL", "SALTO", "TIGRE", "TEMPO",
    "VAPOR", "ZUMBI", "ATIVO", "BLOCO", "CARTA", "DORES", "ECOAR", "FIXAR", "GANHO", "CONTA",
    "INATO", "JUNHO", "KARMA", "LENTO", "MORAR", "NEGRO", "OLEOS", "PENTE", "QUOTA", "RADAR",
    "SOPRO", "TRAPO", "URUBU", "VERBO", "ZELOS", "ANTES", "BANAL", "CINTO", "DUELO", "ESQUI",
    "FALAR", "GOSTO",  "IDEAL", "JUNTA", "FILME", "LINDO", "MATAR", "BARCO", "OUTRO",
    "PRAZO", "QUERO", "ROLAR", "SUBIR", "TENSO", "SONHO", "VALER", "ZEBRA", "ALUNO", "BATER",
    "CORPO", "DESTA", "FELIZ", "FILHO", "FILHA", "CARRO", "POMBO", "CARPA", "VEADO",
    "GOLFE", "ALUNA", "GALHO", "RITMO", "VIGOR", "SABER", "VIVER", "PEDRA", "TARDE", "FICAR",
    "VEZES", "JULHO", "PRATO", "AMIGO", "PODAR", "AREIA", "AVISO", "BANHO", "BOLSO", "ANZOL",
    "BURRO", "CABRA", "TERRA", "CASAL", "CHAVE", "FRUTA", "HOMEM","AMIGO",
  "AREIA",
  "AVISO",
  "BABAR",
  "BANHO",
  "BOLAS",
  "BOLSO",
  "BURRO",
  "CABRA",
  "CASAL",
  "CHAVE",
  "CLARO",
  "DENTE",
  "DOCES",
  "FORMA",
  "FRUTA",
  "HOMEM",
  "LIMPA",
  "MASSA",
  "MESMO",
  "NUVEM",
  "OSSOS",
  "PEIXE",
  "PEDRA",
  "ROUPA",
  "RODAS",
  "SONHO",
  "TERRA",
  "TRIGO",
  "VIDRO"
  ];
  const sakana = [
    "あいなめ", "あおうお", "あおがい", "あかいか", "あかえび", "あまだい",
    "いいだこ", "いしがに", "いしだい", "うみうし", "あかえい", "おおぼら",
    "おきあみ", "おじさん", "かいだこ", "かんだい", "きびなご", "くまえび",
    "くろだい", "こういか", "しまあじ", "ぎんだら", "たちおう", "とびおう",
    "あまえび", "あんこう"
  ];
  const yasai = [
    "えだまめ", "ししとう", "たーさい", "だいこん", "とうがん",
    "にんにく", "にんじん", "やーこん"
  ];
  const tabemono = [
    "うめぼし", "えびちり", "えりんぎ", "おにぎり", "きしめん", "ぎんなん",
    "くろまめ", "こしあん", "たこやき", "てりやき", "とんかつ", "たいやき",
    "かまぼこ", "いかさし", "にくまん", "あじたま", "しおから", "えびてん",
    "かにたま", "しらたま", "いかてん", "あおうし", "かにまき", "うにまき",
    "すきやき", "らーめん"
  ];
const fruits = [
"あさいー","だいだい","ぼんたん","まんごー","いちじく","ここやし"
];
var words_Japanese = [];

const info_br = `<h2>Como jogar ?</h2>
               <p> 1. Você precisa adivinhar a palavra.</p>

               <p> 2. Você tem 6 tentativas por cada rodada.</p>

               <p>  3. A cada tentativa, você escreve uma palavra de 5 letras.</p>

               <h3> O jogo indica se as letras estão corretas:</h3>

                <p> 4. 🟩 Verde: a letra está na posição correta.</p>

                <p> 5. 🟨 Amarelo: a letra existe na palavra, mas está na posição errada.</p>

                <p> 6. ⬜ Cinza: a letra não está na palavra.</p>

                <p> 7. De acordo com que se acerta a palavra mais palavras são adicionadas a cada rodada.</p>

                <p>8. Não precisa se preocupar com os acentos das palavras.</p>

                <p> Use essas dicas para descobrir a palavra correta!</p>
                `;
const info_us = `<h2>How to play?</h2>
                    <p>1. You need to guess the word.</p>

                   <p>2. You have 6 attempts per round.</p>

                    <p>3. Each attempt must be a 5-letter word.</p>

                    <h3> The game tells you if the letters are correct:</h3>

                    <p>4. 🟩 Green: the letter is in the correct position.</p>

                    <p>5. 🟨 Yellow: the letter is in the word, but in the wrong position.</p>

                    <p>6. ⬜ Gray: the letter is not in the word.</p>
                    
                    <p>7. As you guess the word correctly, more words are added in each round.</p>

                    <p>Use these clues to find the correct word!</p>
                `;
const info_jp = `<h2>遊び方は？</h2>

                    <p>1. 単語を当ててください。</p>

                   <p>2. 各ラウンドに6回のチャンスがあります。</p>

                    <p>3. 各回で4文字の単語を入力します。</p>

                    <h3>ゲームは文字が正しいかどうかを教えてくれます：</h3>

                    <p>4. 🟩 緑：文字も位置も正しい。</p>

                    <p>5. 🟨 黄色：単語に文字があるが、位置が違う。</p>

                    <p>6. ⬜ 灰色：その文字は含まれていません。</p>

                    <p>7. 単語は（野菜、魚・貝、食べ物、フルーツ）に限っています（日本語バージョンのみ）。</p>

                    <p>8. 正しい単語を当てると、次のラウンドでさらに多くの単語が追加されます。</p>

                    <p>9. カタカナの単語をひらがなで入力すること。</p>

                    <p>このヒントを使って正しい言葉を見つけましょう！</p>
                `;
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
var flagInfoPainel = true;
var flagHintPainel = true;
let infos = info_br+info_us+info_jp;
var type =[];
var retunlang = "return";
function chooseWord(){
    mainWord = [];
    type =[];
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
//  console.log("words:"+mainWord);
//  console.log(type);
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
    hint.style.width = "50px";
    hint.style.height = "50px";
    hint.id = "button-hint";
    hint.style.borderRadius = "40px";
    hint.style.top = "80px";
    hint.style.right = "10px";
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
        col.style.width = "900px";
        col.style.height = "60px";
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
for(let s = 1; s < (stage+1);s++){
const table = document.createElement("table");
table.id = s+"-"+"table";
    for(let i = 0; i < col;i++){
        const tr = document.createElement("tr");
        for(let j = 0; j < row; j++){
            const td = document.createElement("td");
            td.id = s+""+i+""+j;
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
function portugueseGame(){
    const painel = document.getElementById("painel");
    painel.remove();
    wordsArray = words_Portuguese;
    mainAlphabet = alphabet;
    startGame();
}
//英語バージョン
function englishGame(){
    const painel = document.getElementById("painel");
    painel.remove();
    wordsArray = words_English;
    mainAlphabet = alphabet;
    startGame();
}
//日本語バージョン
function japaneseGame(){
    const painel = document.getElementById("painel");
    painel.remove();
    row = 4;
    for(let i = 0; i < tabemono.length;i++){
        words_Japanese.push(tabemono[i]);
    }
    for(let i = 0; i < sakana.length;i++){
        words_Japanese.push(sakana[i]);
    }
    for(let i = 0; i < yasai.length;i++){
        words_Japanese.push(yasai[i]);
    }
    for(let i = 0; i < fruits.length;i++){
        words_Japanese.push(fruits[i]);
    }
    

    wordsArray = words_Japanese;
    mainAlphabet = alphabet_JP;
    startGame();
}
function returnMain(){
    location.href = "index.html";
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
    keyboard.style.display = "none";
    wordboard.style.display ="none" ;
    const body = document.getElementById("display");
    const painel = document.createElement("div");
    painel.style.display = "inline-block";
    painel.id = "info-painel";
    painel.style.border = "4px black solid";
    painel.style.width ="520px";
    painel.style.height ="100%";
    painel.style.borderRadius = "20px";
    painel.innerHTML = infos;
    painel.style.textAlign = "left";
    painel.style.paddingLeft = "10px";
    painel.style.margin = "200px auto";
    painel.style.background = "#dcdcdc";
    body.appendChild(painel);
}
function cancelPainel(){
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
    const img = document.getElementById("img");
    if(ID === linguage[0]){
        usedLinguage = linguage[0];
        retunlang = "voltar";
        img.src = "img/multiTermo_BR.png";
        portugueseGame();
    }else if(ID === linguage[1]){
        usedLinguage = linguage[1];
        infos = info_us+info_br+info_jp;
        img.src = "img/multiTermo_US.png";
        englishGame();
    }else if(ID === linguage[2]){
        usedLinguage = linguage[2];
        infos = info_jp+info_us+info_br;
        img.src = "img/multiTermo_JP.png";
        retunlang  = "戻る";
        buttonHint();
        japaneseGame();
    }
    if (!isNaN(Number(ID)) && ID != null && ID != "") {
        const num = ID;
        let n2 = num[1];
        let n3 = num[2];
       console.log(pointer);
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
            }
          
        }else if(ID === "Enter"){
            let num;
           for(let p = 0; p < pointer.length; p++){
              if(pointer[p].length > 1){
                num = pointer[p];
              }
           }
            let n1 = num[0];
            let n2 = num[1];
            let word = "";
            let flagKeyCheckChar = true;
            var flagkeyBoard = false;
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
                          //場所と文字が当てます
                          for(let i = 0; i < arrayWord.length;i++){
                            if(arrayWord[i] === arrayMainWord[i]){
                                const char = document.getElementById(s+""+pointerIndex[1]+""+i);
                                char.style.background = "#00ff7f";
                                char.style.color = "#000";
                                invalidChar.push(arrayWord[i]);
                            }
                        }
                        //場所が違うけど文字が合っています
                        for(let i = 0; i < arrayMainWord.length;i++){
                            for(let j = 0 ; j < arrayWord.length;j++){
                                if(arrayMainWord[i] === arrayWord[j] && !invalidChar.includes(arrayWord[j])){
                                    const char = document.getElementById(s+""+pointerIndex[1]+""+j);
                                    char.style.background = "#ffff00";
                                    char.style.color = "#000";
                                    invalidChar.push(arrayWord[j]);
                                    break;
                                }
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
                       
                    }else{
                        youWin();
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
function youWin(){
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
    painel.id = "WinsPainel";
    painel.style.border = "4px black solid";
    painel.style.width ="300px";
    painel.style.height ="200px";
    painel.style.borderRadius = "20px";
    painel.style.display = "inline-block";
    painel.innerHTML = `<h2>YOU Wins !</h2><h3>Congratulations you is very smart !</h3>`;
    painel.style.textAlign ="center";
    painel.style.margin = "200px auto";
    painel.style.background = "#BFFF00";
    const btn = document.createElement("button");
    btn.id = "return";
    btn.style.border = "2px black solid";
    btn.style.borderRadius = "10px";
    btn.style.width ="70px";
    btn.style.height ="40px";
    btn.style.margin = "10px auto";
    btn.innerHTML = retunlang;
    btn.style.alignItems = "center";
    btn.style.background = "#00FFFF";
    painel.appendChild(btn);
    body.appendChild(painel);
}
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
    btn.style.margin = "10px";
    btn.style.marginRight = "50px";
    btn.innerHTML = retunlang;
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
    painel.style.width ="410px";
    painel.style.height ="250px";
    painel.style.borderRadius = "20px";
    painel.innerHTML = "Choose Language";
    painel.style.fontSize = "40px";
    painel.style.textAlign ="center";
    painel.style.left = "35%";
    painel.style.top = "30%";
    painel.style.background = "#00FFFF";
    for(let i = 0; i < linguage.length; i++){
        const button = document.createElement("button");
        button.id = linguage[i];
        button.style.border = "2px black solid";
        button.style.borderRadius = "10px";
        button.style.width ="120px";
        button.style.height ="60px";
        button.type = "button";
        button.className ="button-linguage";
        button.style.fontSize ="20px";
        button.style.margin = "40px 5px 10px 10px";
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
    img.style.width = "150px";
    img.style.height = "150px";
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
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            location.href = "index_phone.html";
        }
  });
