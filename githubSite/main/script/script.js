const games = [
    {
        name:"multiTermo",
        image:"multiTermo.png",
        url:"../games/multiTermo/index.html"
    },
    {
        name:"Get the sequence right",
        image:"GetTheSequenceRight.png",
        url:"../games/numbers/index.html"
    },
    {
        name:"Pixel Paint",
        image:"pixelpaint.png",
        url:"../games/pixelPicture/index.html"
    },
    {
        name:"ColorGame",
        image:"colorGame.png",
        url:"../games/colorGame/index.html"
    },
    {
        name:"Tic Tac Toe",
        image:"TicTacToe.png",
        url:"../games/TicTacToe/src/TicTacToe.html"
    },
    {
        name:"Where is the kanji ?",
        image:"kanji.png",
        url:"../games/kanjiGame/index.html"
    },
    {
        name:"kanji Quiz ?",
        image:"kanjiquiz.png",
        url:"../games/kanjiQuiz/kanji.html"
    },
    {
        name:"What is the flag ?",
        image:"flags.jpg",
        url:"../games/whatisTheFlag/Whatistheflag.html"
    },
    {
        name:"Tipping Game",
        image:"tipping.png",
        url:"../games/tippingGame/index.html"
    },
    {
        name:"Quiz",
        image:"quiz.png",
        url:"../games/nazonazo/question.html"
    }
];
const container = document.getElementById("container");

function makeItem(){
    for(let i = 0 ; i < games.length; i++){
       const item = document.createElement("div");
       item.className = "item";
       item.id = games[i].name;
       item.style.backgroundImage = "url(../images/gameImage/"+games[i].image+")";
       const gameTittle = document.createElement("div");
       const tittle = document.createElement("p");
       const link = document.createElement("a");
       gameTittle.className = "gametittle";
       tittle.innerHTML = games[i].name;
       link.href = games[i].url;
       gameTittle.appendChild(tittle); 
       link.appendChild(gameTittle);
       item.appendChild(link);
       container.appendChild(item); 
    }
}
makeItem();

const searchBox = document.getElementById("searchBox");
const listItems = document.querySelectorAll(".item");

searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase();
    listItems.forEach(item => {
        let id = item.id;
        if (id.toLowerCase().includes(query)) {
            document.getElementById(id).style.display = "block";
        } else {
            document.getElementById(id).style.display = "none";
        }
    });
});
var country = "JP";

const timer = document.getElementById("timer");
setInterval(()=>{
    let now = new Date();
   timer.innerHTML = `${now.toLocaleString(country)}`;
 
},1)


