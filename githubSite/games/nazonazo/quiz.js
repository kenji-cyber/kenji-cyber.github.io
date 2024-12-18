const QuestionAndAnswer = [ [0,"世界一長い川は？","ナイル川"],
                            [1,"世界一広い砂漠は？","南極"],
                            [2,"世界一人口多い市は？","エンカルナシオン"],
                            [3,"世界一高い山は？","エヴェレスト"],
                            [4,"ワンワンを鳴く動物は？","犬"],
                            [5,"上から読んでも下から読んでも同じ名前の野菜は？","トマト"],
                            [6,"上から読んでも下から読んでも同じ名前の鳥は？","キツツキ"],
                            [7,"逆立ちすると軽くなる生きものは？","イルカ"],
                            [8,"じゃまだけど夜寝るときに着るものは？","パジャマ"],
                            [9,"三と人と日を組み合わせてできる漢字は？","春"],    
                            [10,"太陽系で最も大きな惑星はどれですか？","木星"],
                            [11,"動物の中で最も速く走れるのはどれですか？","チーター"],
                            [12,"人間の体で一番大きな臓器は何ですか？","肝臓"],
                            [13,"一年には何日ありますか？","365日"],
                            [14,"はいているのに、ぬいだりするものは何？","靴"],
                            [15,"走ることもできないのに、いつも道を歩いているものは何？","影"],
                            [16,"夏はあついけど、冬になるとさむくなるのは何？","扇風機"],
                            [17,"泣いているのに、顔が笑っているものは何？","なみだ"],
                            [18,"何もしていないのに、いつも汚れているのは何？","鏡"],
                            [19,"白いものが降ってくるのに、地面に落ちないものは何？","雪"],
                            [20,"中身はなくても重いものは何？","船"],
                            [21,"飛んでいるのに、羽を持っていないものは何？","時間"],
                            [22,"ある場所では見えないけれど、別の場所では見えるものは何？","夢"],
                            [23,"小さくても大きな影響を与えるものは何？","言葉"],
                            [24,"触れることができるのに、つかむことができないものは何？","水"]

]; 
const FakeAnswer =[["アマゾン川","木曾川","堀川"],
                   ["サハラ","ゴビ砂漠","アラビア砂漠"],
                   ["名古屋","香港","ロンドン"],
                   ["富士山","阿蘇山","大洞山"],
                   ["猫","牛","鳥"],
                   ["キャベツ","レタス","りんご"],
                   ["ダチョウ","スズメ","インコ"],
                   ["クジラ","イカ","タコ"],
                   ["着物","T-シャツ","全裸"],
                   ["秋","夏","冬"],
                   ["地球","水星","金星"],
                   ["ライオン","トラ","ウサギ"],
                   ["心臓","脳","肺"],
                   ["354日","367日","364日"],
                   ["帽子","手袋","靴下"],
                   ["風","自転車","時計"],
                   ["アイスクリーム","セミ","かき氷"],
                   ["クマ","雨","テレビ"],
                   ["壁","服","床"],
                   ["雨","雲","霧"],
                   ["箱","車","石"],
                   ["鳥","飛行機","風"],
                   ["音","星","光"],
                   ["種","虫","風"],
                   ["風","雲","砂"]
];

const Question = [];
const Answer = [];
const fake = [];
const index = [];
let idx = 0;
let maru = 0;
let batsu = 0;
function makeQuestion(){
i = 0;
    while(i < 10){
        g =  Math.floor(Math.random() * QuestionAndAnswer.length);
        if(index.includes(QuestionAndAnswer[g][0])){
            continue;
        }else{
            Question.push(QuestionAndAnswer[g][1]);
            Answer.push(QuestionAndAnswer[g][2]);
            index.push(QuestionAndAnswer[g][0]);
        }
        i++;
    }

}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function falseAnswer(){
   const index1 = FakeAnswer[index[idx]];
   index1.push(Answer[idx]);
   fake.length = 0;
   fake.push(...shuffle(index1).slice(0, 4));
}

function display(){
    document.getElementById("question").innerHTML = "(問 "+(idx+1)+") "+Question[idx];

    for(let i = 0; i < 4; i++){
        let native = "alternative"+(i+1);
        document.getElementById(native).innerHTML = fake[i];
        document.getElementById(native).value = fake[i];
    }

}

var gameflame = document.getElementById("gameflame");
var startflame = document.getElementById("startflame");

document.getElementById("start").addEventListener("click",function(){
 
    startflame.style.display ="none";
    gameflame.style.display = "block";
    makeQuestion();
    falseAnswer();
    display();

});

let doct;
let alt;
function buttonClick(e){
var e = e || window.event;
var elem = e.target || e.srcElement;
var elemId = elem.id;
let ans = document.getElementById(elemId).value;
doct = document.getElementById(elemId);
if(ans == Answer[idx]){
   document.getElementById("circle").style.display="flex";
   doct.style.backgroundColor= "lightgreen";
   setTimeout(circle,1000);
   maru++;
  
}else{
    for(let k = 0; k < fake.length;k++){
        if(Answer[idx] == fake[k]){
            w = k;
            break;
        }
    }
     w = "alternative"+(w+1);
     alt =  document.getElementById(w);
    document.getElementById("cross").style.display="flex";
   alt.style.backgroundColor= "lightgreen";
    setTimeout(cross,1000);
   batsu++;

}
   idx++;
   if(idx < Answer.length){
    setTimeout(property,1000);
   }else{
    setTimeout(finish,1000);
    }
  
}

function finish(){
    gameflame.style.display = "none";
    let d = maru/idx;
    if(d >= 0.6){
        document.getElementById("h1").style.color = "blue";
        document.getElementById("body").style.backgroundImage = "url(images/happy.jpg)";
       
    }else{
        document.getElementById("h1").style.color = "red";
        document.getElementById("body").style.backgroundImage = "url(images/zanen.jpeg)";
    }
    document.getElementById("h1").style.display="flex";
  
    countUp();

}

function circle(){
    document.getElementById("circle").style.display="none";
}
function cross(){
    document.getElementById("cross").style.display="none";
    alt.style.backgroundColor ="white";
}

function property(){
    falseAnswer();
    display();
}
let p = 0;
function countUp() {
    let interval = setInterval(function() {
        if (p <= (maru * 100)) {
            p++;
            document.getElementById("h1").innerHTML = p + "/" + (idx * 100);
        } else {
            document.getElementById("h1").innerHTML = (maru * 100) + "/" + (idx * 100);
            setTimeout(()=>{
                location.href = "question.html";
                clearInterval(interval); 
            },3000);
            
        }
    }, 1); // インターバルを適宜調整します（ミリ秒単位）
}



document.addEventListener("DOMContentLoaded", function() {
    var classBtn = document.getElementsByClassName("btn");
    for(let y = 0; y < classBtn.length; y++){
       
        classBtn[y].addEventListener("mouseenter", function() {

            classBtn[y].style.backgroundColor = "lightgreen";
        });
        
        classBtn[y].addEventListener("mouseleave", function() {
            classBtn[y].style.backgroundColor = "white";
        
        });
    }
 });
 document.getElementById("home").addEventListener('click',function(){
    location.href = "../../main/index.html";
  });