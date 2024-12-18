const QuestionAndAnswer = [
    { id: 0, kanji: "鯰", reading: "ナマズ", falseAnswers: ["いわし", "にべ", "イカ"] },
    { id: 1, kanji: "鮫", reading: "さめ", falseAnswers: ["イルカ", "マダラ", "たこ"] },
    { id: 2, kanji: "献立", reading: "こんだて", falseAnswers: ["ごんだて", "けんだつ", "こうたい"] },
    { id: 3, kanji: "鰹", reading: "カツオ", falseAnswers: ["まぐろ", "ぶり", "かじき"] },
    { id: 4, kanji: "鰆", reading: "さわら", falseAnswers: ["さんま", "アジ", "しいら"] },
    { id: 5, kanji: "育成", reading: "いくせい", falseAnswers: ["そだてる", "ひかえる", "はぐくむ"] },
    { id: 6, kanji: "揺れる", reading: "ゆれる", falseAnswers: ["よれる", "ゆるれる", "ふるれる"] },
    { id: 7, kanji: "脇役", reading: "わきやく", falseAnswers: ["わきえ", "わきが", "わきい"] },
    { id: 8, kanji: "鯆", reading: "イルカ", falseAnswers: ["クジラ", "かつお", "カマス"] },
    { id: 9, kanji: "蛤", reading: "はまぐり", falseAnswers: ["ほたて", "しじみ", "あわび"] },
    { id: 10, kanji: "容赦", reading: "ようしゃ", falseAnswers: ["ようじゃ", "いきし", "やさし"] },
    { id: 11, kanji: "美徳", reading: "びとく", falseAnswers: ["びっとく", "うつくし", "みずも"] },
    { id: 12, kanji: "鱓", reading: "うつぼ", falseAnswers: ["うなぎ", "へび", "あなご"] },
    { id: 13, kanji: "逸れる", reading: "はぐれる", falseAnswers: ["とおれる", "なぎれる", "ぬげれる"] },
    { id: 14, kanji: "鯏", reading: "あさり", falseAnswers: ["いとより", "ぶり", "さより"] },
    { id: 15, kanji: "慌てる", reading: "あわてる", falseAnswers: ["せわてる", "うれる", "ふれる"] },
    { id: 16, kanji: "遭遇", reading: "そうぐう", falseAnswers: ["あっこう", "さっこう", "かっこう"] },
    { id: 17, kanji: "鮇", reading: "いわな", falseAnswers: ["あゆ", "マス", "サケ"] },
    { id: 18, kanji: "朗読", reading: "ろうどく", falseAnswers: ["ろうしょく", "ろうどう", "ろうどん"] },
    { id: 19, kanji: "鮑", reading: "あわび", falseAnswers: ["あさり", "かき", "さざえ"] },
    { id: 20, kanji: "遺産", reading: "いさん", falseAnswers: ["いたす", "いてん", "いせい"] },
    { id: 21, kanji: "悲鳴", reading: "ひめい", falseAnswers: ["びなん", "かなしい", "なきごえ"] },
    { id: 22, kanji: "詐欺", reading: "さぎ", falseAnswers: ["うそつき", "いつわり", "だまし"] },
    { id: 23, kanji: "薔薇", reading: "ばら", falseAnswers: ["そら", "ぱら", "はら"] },
    { id: 24, kanji: "炬燵", reading: "こたつ", falseAnswers: ["たたつ", "ごだつ", "きょたつ"] },
    { id: 25, kanji: "東風", reading: "こち", falseAnswers: ["ひがしかぜ", "とうふう", "どうふう"] },
    { id: 26, kanji: "驢馬", reading: "ろば", falseAnswers: ["ぎょうま", "シマウマ", "うさうま"] },
    { id: 27, kanji: "啄木鳥", reading: "きつつき", falseAnswers: ["ききとり", "くちばし", "かむきどり"] },
    { id: 28, kanji: "雲雀", reading: "ひばり", falseAnswers: ["ひまわり", "いずじゃく", "すずめ"] },
    { id: 29, kanji: "河豚", reading: "ふぐ", falseAnswers: ["かわぶた", "ぷぐ", "ぶく"] },
    { id: 30, kanji: "仙人掌", reading: "さぼてん", falseAnswers: ["さぼでん", "せんごころ", "ざぼてん"] },
    { id: 31, kanji: "凡例", reading: "はんれい", falseAnswers: ["ばんれい", "はんれつ", "ぱんれい"] },
    { id: 32, kanji: "破綻", reading: "はたん", falseAnswers: ["ぱたん", "はてい", "はかん"] },
    { id: 33, kanji: "懸念", reading: "けねん", falseAnswers: ["げれん", "けいねん", "けめん"] },
    { id: 34, kanji: "逼迫", reading: "ひっぱく", falseAnswers: ["ひっばく", "ゆうぱく", "とばく"] },
    { id: 35, kanji: "辟易", reading: "へきえき", falseAnswers: ["こうい", "つみい", "へきい"] },
    { id: 36, kanji: "愛猫", reading: "あいびょう", falseAnswers: ["あいねこ", "あいがけ", "あいぴょう"] },
    { id: 37, kanji: "釣果", reading: "ちょうか", falseAnswers: ["ちょか", "じょうか", "つりか"] },
    { id: 38, kanji: "翠明", reading: "すいめい", falseAnswers: ["ずいめい", "づいめい", "かわせみ"] },
    { id: 39, kanji: "一寸", reading: "ちょっと", falseAnswers: ["ちょうど", "いっずん", "ひとすん"] },
    { id: 40, kanji: "囲炉裏", reading: "いろり", falseAnswers: ["いらり", "いとり", "いとうら"] },
    { id: 41, kanji: "土竜", reading: "もぐら", falseAnswers: ["たぬき", "みみず", "つちのこ"] },
    { id: 42, kanji: "熊猫", reading: "ぱんだ", falseAnswers: ["ひぐま", "ツキノワグマ", "メインクーン"] },
    { id: 43, kanji: "栗鼠", reading: "りす", falseAnswers: ["ネズミ", "ハムスター", "フェネック"] },
    { id: 44, kanji: "梟", reading: "ふくろう", falseAnswers: ["はと", "とび", "からす"] },
    { id: 45, kanji: "鰐", reading: "わに", falseAnswers: ["へび", "ぶり", "スッポン"] },
    { id: 46, kanji: "鰺", reading: "あじ", falseAnswers: ["さば", "いわし", "さんま"] },
    { id: 47, kanji: "鮃", reading: "ひらめ", falseAnswers: ["まごち", "かれい", "たちおう"] },
    { id: 48, kanji: "鮪", reading: "まぐろ", falseAnswers: ["くじら", "さば", "ぶり"] },
    { id: 49, kanji: "鯖", reading: "さば", falseAnswers: ["あじ", "いわし", "まぐろ"] },
    { id: 50, kanji: "鰯", reading: "いわし", falseAnswers: ["あじ", "あいご", "さば"] }
    

    

];

const index = [];
const fake = [];

let countGame = 0;

function choiceKanji() {
    let availableQuestions = QuestionAndAnswer.filter(q => !index.includes(q.id));
    if (availableQuestions.length === 0) return; 

    let randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    index.push(randomQuestion.id);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var startButton = document.getElementById("start");

startButton.addEventListener("click", function() {
    let startflame = document.getElementById("startflame");
    let gameflame = document.getElementById("gameflame");
    startflame.style.display = "none";
    gameflame.style.display = "block";
    choiceKanji();
    makefalse();
    display();
});

function makefalse() {
    fake.length = 0;
    let fakeAns = QuestionAndAnswer[index[countGame]].falseAnswers.slice();
    fakeAns.push(QuestionAndAnswer[index[countGame]].reading);
   
    fake.push(...shuffle(fakeAns).slice(0, 4));
}

function display() {
    let question = document.getElementById("question");
    let kanjis = document.getElementById("kanji");
    let questionOfkanji = QuestionAndAnswer[index[countGame]].kanji;
    question.innerHTML = "(問 " + (countGame + 1) + ") この漢字は何と読む？";
    kanjis.innerHTML = questionOfkanji;

    for (let i = 0; i < 4; i++) {
        let native = "alternative" + (i + 1);
        document.getElementById(native).innerHTML = fake[i];
        document.getElementById(native).value = fake[i];
    }
}

let h1 = document.getElementById("h1");
let body = document.getElementById("body");

let maru = 0;

function buttonClick(e) {
    var e = e || window.event;
    var elem = e.target || e.srcElement;
    var elemId = elem.id;

    let ans = document.getElementById(elemId).value;
    let doct = document.getElementById(elemId);
    let Answer = QuestionAndAnswer[index[countGame]].reading;
    let cir = document.getElementById("circle");
    let cro = document.getElementById("cross");

    if (ans == Answer) {
        cir.style.display = "flex";
        doct.style.background = "linear-gradient(-45deg, rgba(87, 225, 181, 1) 0%, rgba(0, 63, 255, 1) 100%)";
        setTimeout(function() {
            cir.style.display = "none";
        }, 1000);
        maru++;
    } else {
        let correctIndex = fake.indexOf(Answer);
        let correctElemId = "alternative" + (correctIndex + 1);
        let correctElem = document.getElementById(correctElemId);
        cro.style.display = "flex";
        correctElem.style.background = "linear-gradient(-45deg, rgba(87, 225, 181, 1) 0%, rgb(255, 0, 0) 100%)";
        setTimeout(function() {
            cro.style.display = "none";
            correctElem.style.background = "linear-gradient(-45deg, rgba(87, 225, 181, 1) 0%, rgba(0, 63, 255, 1) 100%)";
        }, 1000);
    }

    countGame++;
    if (countGame < 10) {
        setTimeout(function() {
            choiceKanji();
            makefalse();
            display();
        }, 1000);
    } else {
        setTimeout(function() {
            gameflame.style.display = "none";
            let score = (maru / countGame) * 100;
            if (score >= 60) {
                h1.style.color = "rgb(87, 172, 225)";
                body.style.backgroundImage = "url(images/happy.jpg)";
            } else {
                h1.style.color = "rgb(225, 87, 87)";
                body.style.backgroundImage = "url(images/zanen.jpeg)";
            }
            h1.style.display = "flex";
            countUp();
        }, 1000);
    }
}

let p = 0;
function countUp() {
    let interval = setInterval(function() {
        if (p <= (maru * 100)) {
            p++;
            h1.innerHTML = p + "/" + (countGame * 100);
        } else {
            h1.innerHTML = (maru * 100) + "/" + (countGame * 100);
            setTimeout(()=>{
                location.href = "kanji.html";
                clearInterval(interval); 
            },3000);
           
        }
    }, 1); 
}

document.querySelectorAll('.answer-button').forEach(button => {
    button.addEventListener('click', buttonClick);
});


document.addEventListener("DOMContentLoaded", function() {
    var classBtn = document.getElementsByClassName("btn");
    for(let y = 0; y < classBtn.length; y++){
       
        classBtn[y].addEventListener("mouseenter", function() {

            classBtn[y].style.background = "linear-gradient(-45deg, rgba(87, 225, 181, 1) 0%, rgba(0, 63, 255, 1) 100%)";
        });
        
        classBtn[y].addEventListener("mouseleave", function() {
            classBtn[y].style.background = "linear-gradient(-45deg, rgba(87, 225, 181, 1) 0%, rgba(0, 63, 255, 1) 100%)";
        
        });
    }
 });
 document.getElementById("home").addEventListener('click',function(){
    location.href = "../../main/index.html";
  });
