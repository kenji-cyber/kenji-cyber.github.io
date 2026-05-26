
const display = document.getElementById("displayGame");
const hata = document.getElementById("winHata");
const imageBack = document.getElementById("imageCover");
const info = document.getElementById("infomation");
const title = document.getElementById("tittle");

let blockCount = 1, playCount = 0, blockPosition = 20, blockWidth = 100, blockHeight = 36;
let blocks = { block1: { name: "block1", x: 0, y: 0, width: blockWidth, height: blockHeight } };
let plusRemaining = 0, mainblock = null, gameStop = false, maxBlock = 12, minSize = 40;
let linguage = "english", countBlock = 0, flagLimit = false, startBlockMove = null, image = null;
let velocity = 10, enterButton = true, flag = true ,heart = 5 , maxHeart = 5;


    const linguages = {
    english: {
        titleMake() {
            return "Press Enter to Start";
        },
        infoMake() {

            return `
            <strong>🎮 Tower Building Game</strong><br>
            <ul style="padding-left: 20px; margin: 8px 0;">
                <li>Press Enter to start the game</li>
                <li>Press Space to stop the block</li>
                <li>The game speed increases as you clear each level</li>
                <li>You play at the same speed until you clear the level</li>
            </ul>
            <div> Level: <span id="score">${playCount+1}</span></div>
            <div> Height: <span id="height">${countBlock}/${maxBlock}</span></div>
             <div> Speed: <span id="speed">${velocity}px/s</span></div>
             <div> Width:  <span id="width">${Math.floor((blockWidth/100)*100)}%</span></div>
              <div class="buttonConteiner" id="displayButtons">
                <button class="button" onclick="clickButton('english')" id="english" >English</button>
                <button class="button" onclick="clickButton('portuguese')" id="portuguese">Portuguese</button>
                <button class="button" onclick="clickButton('japanese')"id="japanese" >Japanese</button>
              </div>
        `;
        },
        winTitle() {
            return "<h3>　　You Win !</h3><h5> Press Enter to start the next level</h5>";
        },
        loseTitle() {
            return "<h3>You lost one heart!</h3><h5>Press Enter to try again</h5>";
        }
    },

    japanese: {
        titleMake() {
            return "スタートするにはEnterキーを押してください";
        },
        infoMake() {
            return `
            <strong>🎮 タワー作りゲーム</strong><br>
            <ul style="padding-left: 20px; margin: 8px 0;">
                <li>Enterキーでゲームスタート</li>
                <li>スペースキーでブロックを止める</li>
                <li>ステージをクリアすると、スピードが速くなります</li>
                <li>クリアするまでは同じスピードです</li>
            </ul>
            <div> レベル: <span id="score">${playCount+1}</span></div>
            <div> 高さ: <span id="height">${countBlock}/${maxBlock}</span></div>
              <div> スピード: <span id="speed">${velocity}px/s</span></div>
              <div> 幅:  <span id="width">${Math.floor((blockWidth/100)*100)}%</span></div>
             <div class="buttonConteiner" id="displayButtons">
                <button class="button" onclick="clickButton('english')" id="english" >英語</button>
                <button class="button" onclick="clickButton('portuguese')" id="portuguese">ポルトガル語</button>
                <button class="button" onclick="clickButton('japanese')"id="japanese" >日本語</button>
              </div>
        `;
        },
        winTitle() {
            return "<h3>勝ちました！</h3><h5>Enterキーで次のレベルへ</h5>";
        },
        loseTitle() {
            return "<h3>ハートを失いました！</h3><h5>Enterキーでリベンジ</h5>";
        }
    },

    portuguese: {
        titleMake() {
            return "Pressione Enter para começar";
        },
     infoMake() {
            return `
            <strong>🎮 Jogo de Construção de Torres</strong><br>
            <ul style="padding-left: 20px; margin: 8px 0;">
                <li>Pressione Enter para começar o jogo</li>
                <li>Pressione Espaço para parar o bloco</li>
                <li>A velocidade aumenta a cada fase completada</li>
                <li>Você joga com a mesma velocidade até completar a fase</li>
            </ul>
            <div> Level: <span id="score">${playCount+1}</span></div>
            <div> Altura: <span id="height">${countBlock}/${maxBlock}</span></div>
            <div> Velocidade: <span id="speed">${velocity}px/s</span></div>
            <div> Largura:  <span id="width">${Math.floor((blockWidth/100)*100)}%</span></div>
             <div class="buttonConteiner" id="displayButtons">
                <button class="button" onclick="clickButton('english')" id="english" >Inglês</button>
                <button class="button" onclick="clickButton('portuguese')" id="portuguese">Português</button>
                <button class="button" onclick="clickButton('japanese')"id="japanese" >Japonês</button>
              </div>
        `;
        },
        winTitle() {
            return "<h3>Você venceu !</h3><h5> Pressione Enter para o próximo nível</h5>";
        },
        loseTitle() {
            return "<h3>Você perdeu uma vida !</h3><h5> Pressione Enter para tentar novamente</h5>";
        }
    }
}

const castleObject ={
    "Castle_0":{
        "name": "europeCastle",
        "color": "lightgray",
        makeCastle(block){
             const blockElement = document.createElement("div");
                blockElement.style.position = "absolute";
                blockElement.id = block.name;
                blockElement.style.left = block.x + "px";
                blockElement.style.bottom = block.y + "px";
                blockElement.style.width = block.width + "px";
                blockElement.style.height = block.height + "px";
                image = null;
                blockElement.className = "europeCastle";
                blockElement.style.backgroundColor = "lightgray";
               
                return blockElement
        },
        image(){
                imageBack.src = "img/castle.png";
                document.getElementById("footer").style.background = "#98fa36"
                document.getElementById("footer1").style.background = "#98fa36"
        }
    },
    "Castle_1":{
        "name": "japaneseCastle",
        "color": "#dc143c",
        makeCastle(block){
             const blockElement = document.createElement("div");
                blockElement.style.position = "absolute";
                blockElement.id = block.name;
                blockElement.style.left = block.x + "px";
                blockElement.style.bottom = block.y + "px";
                blockElement.style.width = block.width + "px";
                blockElement.style.height = block.height + "px";
                image = null;
                const yane = document.createElement("div");
                    yane.className = "yane";
                    yane.style.width = block.width + "px";
                    yane.id = block.name+"yane";
                    blockElement.className = "japaneseCastle";
                    blockElement.style.backgroundColor = "#dc143c"; // You can change the color as needed
                    blockElement.appendChild(yane);
               
                    return blockElement
        },
        image(){
                imageBack.src = "img/sakura.png";
                document.getElementById("footer").style.background = "#98fa36"
                document.getElementById("footer1").style.background = "#98fa36"
        }
    },
     "Castle_2":{
        "name": "egyptCastle",
        "color": "#dc143c",
         makeCastle(block){
             const blockElement = document.createElement("div");
                blockElement.style.position = "absolute";
                blockElement.id = block.name;
                blockElement.style.left = block.x + "px";
                blockElement.style.bottom = block.y + "px";
                blockElement.style.width = block.width + "px";
                blockElement.style.height = block.height + "px";
                image = null;
                blockElement.className = "egyptCastle";
                blockElement.style.backgroundColor = "#fffacd"; // You can change the color as needed
                return blockElement
        },
        image(){
                imageBack.src = "img/pyramid.png";
                document.getElementById("footer").style.background = "#fffacd"
                document.getElementById("footer1").style.background = "#fffacd"
        }
    },
     "Castle_3":{
        "name": "cake",
        "color": "#ffc0cb",
         makeCastle(block){
             const blockElement = document.createElement("div");
                blockElement.style.position = "absolute";
                blockElement.id = block.name;
                blockElement.style.left = block.x + "px";
                blockElement.style.bottom = block.y + "px";
                blockElement.style.width = block.width + "px";
                blockElement.style.height = block.height + "px";
                image = null;
                blockElement.className = "cake";
                blockElement.style.backgroundColor = "#ffc0cb"; // You can change the color as needed
                return blockElement
        },
        image(){
                imageBack.src = "img/cake.png";
                document.getElementById("footer").style.background = "#ffb6c1"
                document.getElementById("footer1").style.background = "#ffb6c1"
        }
    }


};

title.innerHTML = linguages[linguage].titleMake();

// Create the initial block element and append it to the display
function drawBlocks() {
    const getBlock = document.getElementById(mainblock.name);
    const yane = document.getElementById(mainblock.name + "yane");
    if (yane) yane.style.width = mainblock.width + "px";
    getBlock.style.left = mainblock.x + "px";
    getBlock.style.bottom = mainblock.y + "px";
    getBlock.style.width = mainblock.width + "px";
    getBlock.style.height = mainblock.height + "px";
}

function createBlockElement(block) {
    let id = `Castle_${playCount}`;
    const blockElement = castleObject[id].makeCastle(block);
    const img = document.createElement("img");
    if (block.width > minSize && blockCount > 2) {
        let num = Math.floor(Math.random() * 20) + 1;
        if (num % 2 == 0) {
            img.src = "img/window.png";
            img.className = "window";
            image = img;
            blockElement.appendChild(img);
        }
    } else if (block.width > minSize) {
        img.src = "img/door.png";
        img.className = "door";
        blockElement.appendChild(img);
    }
    return blockElement;
}

function addBlock() {
    if (blockCount <= maxBlock) {
        const newBlockId = "block" + (blockCount++);
        blocks[newBlockId] = {
            name: newBlockId,
            x: 0,
            y: blockPosition,
            width: blockWidth,
            height: blockHeight
        };
        if (painel = document.getElementById("painelInfo")) {
            painel.innerHTML = linguages[linguage].infoMake();
        }
        blockPosition += blockHeight;
        mainblock = blocks[newBlockId];
        display.appendChild(createBlockElement(mainblock));
    } else {
        if (painel = document.getElementById("painelInfo")) {
            painel.innerHTML = linguages[linguage].infoMake();
        }
        gameStop = true;
        clearInterval(startBlockMove);
        winGame();
    }
}

function moveBlock() {
    if (!gameStop) {
        startBlockMove = setInterval(() => {
            if (mainblock.x >= (display.clientWidth - mainblock.width)) {
                flagLimit = true;
            } else if (mainblock.x <= 0) {
                flagLimit = false;
            }
            if (mainblock.x >= 0) {
                if (!flagLimit) {
                    mainblock.x += velocity;
                    if (mainblock.x >= display.clientWidth - mainblock.width) {
                        mainblock.x = display.clientWidth - mainblock.width;
                    }
                } else {
                    mainblock.x -= velocity;
                    if (mainblock.x <= 0) {
                        mainblock.x = 0;
                    }
                }
            }
            drawBlocks();
        }, 50);
    }
}

function cutBlock() {
    let leftMainBlock = mainblock.x;
    let nameblock = "block" + (blockCount - 2);
    let leftBeforeBlock = blocks[nameblock].x;
    let left = leftBeforeBlock - leftMainBlock;
    let value = 0;

    if (leftMainBlock < leftBeforeBlock) {
        value = mainblock.width - left;
        if (value > 0) {
            mainblock.width = value;
            mainblock.x = leftBeforeBlock;
        } else {
            gameStop = true;
        }
    } else if (leftMainBlock > leftBeforeBlock) {
        value = mainblock.width - Math.abs(left);
        if (!(value >= (mainblock.width * 2))) {
            mainblock.width = value;
        } else {
            gameStop = true;
        }
    }

    if (gameStop || mainblock.width <= 0) {
        gameOver();
        return;
    } else {
        blockWidth = mainblock.width;
        if (blockWidth < 40 && image) image.remove();
        countBlock++;
        drawBlocks();
        addBlock();
        moveBlock();
    }
}

function winGame() {
    let left = (mainblock.x + (mainblock.width / 2) - 15);
    title.innerHTML = "";
    hata.style.left = left + "px";
    hata.style.visibility = "visible";
    velocity += 5;
    plusRemaining = 10;
    playCount = playCount >= (Object.keys(castleObject).length-1) ? 0 : ++playCount;
    let text = linguages[linguage].winTitle();
    heart = heart == maxHeart ? heart : ++heart;
    document.getElementById(`heart-${heart}`).src= "img/redheart.png";
    resetGame(text);
}

function gameOver() {
      if(heart <= 1){ 
        document.getElementById(`heart-${heart}`).src= "img/blackheart.png";
        gameoverfinish() 
        
      }else{
        clearInterval(startBlockMove);
        setTimeout(() => { resetBlock(); }, 1000);
        let text = linguages[linguage].loseTitle();
        document.getElementById(`heart-${heart}`).src= "img/blackheart.png";
        resetGame(text);
        heart--;
      }
}
function gameoverfinish(){
     document.getElementById("tittle").style.display = "inline-block";
     document.getElementById("tittle").innerHTML = "<h3>　Game Over !</h3>";
       setTimeout(() => {
     for(let i = 1; maxHeart+1 > i; i++){
           document.getElementById(`heart-${i}`).src= "img/redheart.png"
        }
        blockWidth = 100
        hata.style.visibility = "hidden";
        blockCount = 1;
        countBlock = 0;
        blockPosition = 20;
        playCount = 0;
        velocity = 10;
        mainblock = null;
        flagLimit = false;
        gameStop = false;
        enterButton = true;
        heart = maxHeart;
        if (painel = document.getElementById("painelInfo")) {
            painel.innerHTML = linguages[linguage].infoMake();
        }
        let id = `Castle_${playCount}`;
        castleObject[id].image();
        resetBlock()
          }, 1000);
}

function resetBlock() {
    if (blocks) {
        for (let block in blocks) {
            const blockElement = document.getElementById(block);
            if (blockElement) blockElement.remove();
        }
        blocks = {
            block1: {
                name: "block1",
                x: 0,
                y: 0,
                width: blockWidth,
                height: blockHeight
            }
        };
    }
}

function resetGame(text) {
    setTimeout(() => {
        hata.style.visibility = "hidden";
        blockCount = 1;
        countBlock = 0;
        blockPosition = 20;
        resetBlock();
        document.getElementById("tittle").style.display = "inline-block";
        document.getElementById("tittle").innerHTML = text;
        mainblock = null;
        flagLimit = false;
        gameStop = false;
        enterButton = true;
        if (painel = document.getElementById("painelInfo")) {
            painel.innerHTML = linguages[linguage].infoMake();
        }
        let id = `Castle_${playCount}`;
        castleObject[id].image();
    }, 1000);
}

info.addEventListener("click", () => {
    if (flag) makeDisplay();
    else removePainel();
});

function makeDisplay() {
  
    const div = document.createElement("div");
    div.id = "painelInfo";
    div.style.position = "absolute";
    div.style.top = "55px";
    div.style.right = "10px";
    div.style.color = "white";
    div.style.background = "rgba(0, 0, 0, 0.6)";
    div.style.padding = "10px";
    div.style.fontFamily = "sans-serif";
    div.style.fontSize = "14px";
    div.style.maxWidth = "300px";
    div.style.lineHeight = "1.6";
    div.innerHTML = linguages[linguage].infoMake();
    document.body.appendChild(div);
    info.src = "img/cross.png";
    flag = false;
}

function removePainel() {
    if (painel = document.getElementById("painelInfo")) painel.remove();
    info.src = "img/info.png";
    flag = true;
}

function clickButton(ling) {
    document.getElementById(linguage).style.backgroundColor = "#eeeeee";
    document.getElementById(ling).style.backgroundColor = "#c0c0c0";
    linguage = ling;
    title.innerHTML = linguages[linguage].titleMake();
    if (painel = document.getElementById("painelInfo")) {
        painel.innerHTML = linguages[linguage].infoMake();
    }
}

function makeHeart(){
    const lifebar = document.getElementById("lifebar");
  
    for(let i = maxHeart; i >= 1; i--){
        const imgHeart = document.createElement("img");
        imgHeart.src = "img/redheart.png";
        imgHeart.id = `heart-${i}`;
        lifebar.appendChild(imgHeart);
    }
}

function init() {
    addBlock();
    moveBlock();
   
}

let inputLocked = false;
let gameReady = false; // init完了後にtrueになる

window.addEventListener("keydown", function (event) {
    if (gameStop || inputLocked) return;

    if (event.code === "Enter" && enterButton) {
        inputLocked = true;
        enterButton = false;
        document.getElementById("tittle").style.display = "none";

        // 非同期でゲームを初期化し、完了後にフラグを立てる
        init();
        setTimeout(() => {
            gameReady = true;
            inputLocked = false;
        }, 300); // 必要に応じてinit完了にかかる時間を調整
    }

    if (event.code === "Space" && gameReady && !enterButton) {
        inputLocked = true;

        // ブロック移動を止める（安全に）
        if (startBlockMove !== undefined) {
            clearInterval(startBlockMove);
            startBlockMove = undefined;
        }

        flagLimit = !flagLimit;

        if (!gameStop) {
            if (blockCount > 2) {
                cutBlock();
            } else {
                countBlock++;
                addBlock();
                moveBlock();
            }
        }

        setTimeout(() => {
            inputLocked = false;
        }, 100); // 連打防止
    }
});


makeDisplay();
makeHeart();
console.log("width: " + window.innerWidth + " height: " + window.innerHeight);

document.getElementById("home").addEventListener('click',function(){
    location.href = "../../index.html";
  });
  

