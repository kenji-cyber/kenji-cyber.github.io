





const colors = [["#000000","#696969","#808080","#a9a9a9","#c0c0c0","#d3d3d3"],
                ["#ffffff","#fffafa","#f5f5f5","#f8f8ff","#fffaf0","#f5f5f5"],
                ["#ffff00","#ffd700","#ffa500","#daa520","#f0e68c","#ff8c00"],
                ["#ff0000","#dc143c","#ff4500","#ff6347","#ff7f50","#b22222"],  
                ["#0000ff","#1e90ff","#87cefa","#87ceeb","#191970","#000080"],   
                ["#008000","#228b22","#2e8b57","#3cb371","#66cdaa","#8fbc8f"],
                ["#800080","#8b008b","#9400d3","#ff00ff","#ee82ee","#ffc0cb"],
                ["#00ffff","#00ffff","#40e0d0","#48d1cc","#00ced1","#20b2aa"],
                ["#ffe4c4","#ffe4b5","#ffdead","#ffebcd","#ffdab9","#ffe4e1"],  
                ["#7fffd4","#98fb98","#90ee90","#00ff7f","#00fa9a","#7cfc00"],
                ["#cd853f","#b8860b","#d2691e","#a0522d","#8b4513","#800000"],
                ["#ffa07a","#fa8072","#f08080","#e9967a","#bc8f8f","#cd5c5c"] 
            ];
var colorI = colors.length;
var colorj = colors[0].length;
const colorsTable = document.getElementById("colorsTable");
var saveTable = [];
var saveColorTable = [];
function makeTableColor(){
   
    for(let i = 0; i < colorI; i++ ){
        const row = document.createElement("tr");
         row.id = "c-tr"+i;
        for(let j = 0; j < colorj; j++){
            const cell = document.createElement("td");
            cell.id = "color"+i+"-"+j;
            cell.style.backgroundColor = colors[i][j];
            cell.classList.add('td');
            row.appendChild(cell);
            
           
        }
        colorsTable.appendChild(row);
    }
    document.getElementById("color0-0").style.border = "2px solid blue";
}
var pictureI = 36;
var picturej = 36;
const pictureTable = document.getElementById("pictureTable");
function makeTablePicture(){
    for(let i = 0; i < pictureI; i++ ){
        const row = document.createElement("tr");
         row.id = "p-tr"+i;
        for(let j = 0; j < picturej; j++){
            const cell = document.createElement("td");
            cell.id = "picture"+i+"-"+j;
            cell.classList.add('td');
            row.appendChild(cell);  
            saveTable.push("picture"+i+"-"+j);
        }
        pictureTable.appendChild(row);
    }
}
let paintcolor = "#000000";
var beforecolorid = "color0-0";
function colorClick(){
    for(let i = 0; i < colorI; i++ ){
        for(let j = 0; j < colorj; j++){
            let id = "color"+i+"-"+j;
            let color = document.getElementById(id);
            color.addEventListener('click',function(){
                if(beforecolorid == ""){
                    beforecolorid = id;
                    color.style.border ="2px solid blue";
                }else{
                    document.getElementById(beforecolorid).style.border ="2px solid black";
                    color.style.border ="2px solid blue";
                    beforecolorid = id;
                }
                paintcolor = color.style.backgroundColor;
            })
        }
    }
}


var typePincel = 'click';
document.getElementById("pen").style.backgroundColor = "#87cefa";
document.getElementById("pen").addEventListener('click',() =>{
    typePincel = 'mousedown';
    document.getElementById("pen").style.backgroundColor = "#87cefa";
    document.getElementById("pincel").style.backgroundColor="#ffffff";
    saveColor();
    remakeTable();
    pixelClick();
})
document.getElementById("pincel").addEventListener('click',() =>{
     document.getElementById("pen").style.backgroundColor ="#ffffff"; 
    document.getElementById("pincel").style.backgroundColor="#87cefa";
    typePincel = 'mousemove';
    saveColor();
    remakeTable();
    pixelClick();
})

function pixelClick(){
    for(let i = 0; i < pictureI; i++ ){
        for(let j = 0; j < picturej; j++){
            let id = "picture"+i+"-"+j;
            let pixel = document.getElementById(id);
            pixel.addEventListener(typePincel,function(){
                if(paintcolor != null){
                        pixel.style.backgroundColor = paintcolor;
                  
                }else{
                    alert("choose color");
                }
               
            })
        }
    }
}

function saveColor(){
    for(let i = 0; i < saveTable.length;i++){
        let color = document.getElementById(saveTable[i]).style.backgroundColor;
        saveColorTable.push(color);
    }
    saveTable = [];
}
function remakeTable(){
    pictureTableoff();
    let n = 0;
    for(let i = 0; i < pictureI; i++ ){
        const row = document.createElement("tr");
         row.id = "p-tr"+i;
        for(let j = 0; j < picturej; j++){
            const cell = document.createElement("td");
            cell.id = "picture"+i+"-"+j;
            cell.style.backgroundColor = saveColorTable[n];
            saveTable.push("picture"+i+"-"+j);
            cell.classList.add('td');
            row.appendChild(cell);  
            n++;
        }
        pictureTable.appendChild(row);
    }

    saveColorTable = [];
}


var box = "spacing-1";
var rePi;
var rePj;
document.getElementById("resize").addEventListener('click',()=>{
    rePi = document.getElementById("width").value;
    rePj = document.getElementById("height").value;
    resizeTable();
})
var collapseWidth = 70;
var collapseHeight = 47;

var spacing0Width = 75;
var spacing0Height = 44;

var spacing1Width = 65;
var spacing1Height = 39;

function resizeTable(){
    pictureTableoff();
    pictureI = rePi;
    picturej  = rePj;
    if(box == "collapse"){
        if( pictureI > collapseHeight || picturej > collapseWidth){
            alert("sizes over");
            pictureI = collapseHeight;
            picturej = collapseWidth;
        }
    }else if(box == "spacing-0"){
        if( pictureI > spacing0Height || picturej > spacing0Width){
            alert("sizes over");
            pictureI = spacing0Height;
            picturej = spacing0Width;
           
        }
    }else if(box == "spacing-1"){
        if( pictureI > spacing1Height || picturej > spacing1Width){
            alert("sizes over");
            pictureI = spacing1Height;
            picturej = spacing1Width;
           
        }
    }
    document.getElementById("width").value = pictureI;
    document.getElementById("height").value = picturej;
    saveTable = [];
    saveColorTable = [];
    makeTablePicture();
    pixelClick();
}

var collapseI = 40;
var collapseJ = 40;

var spacing0I = 36;
var spacing0J = 36;

var spacing1I = 36;
var spacing1J = 36;

document.getElementById("collapse").addEventListener('click',()=>{
  box = "collapse";
  pictureTable.style.borderCollapse = "collapse";
  rePi = collapseI;
  rePj = collapseJ;
  resizeTable();
})
document.getElementById("spacing-0").addEventListener('click',()=>{
    box = "spacing-0";
    pictureTable.style.borderCollapse = "separate";
    pictureTable.style.borderSpacing = "0";
    rePi = spacing0I;
    rePj = spacing0J;
    resizeTable();
})
document.getElementById("spacing-1").addEventListener('click',()=>{
    box = "spacing-1";
    pictureTable.style.borderCollapse = "separate";
    pictureTable.style.borderSpacing = "2px";
    rePi = spacing1I;
    rePj = spacing1J;
    resizeTable();
})

function pictureTableoff(){
    for(let i = 0; i < pictureI; i++ ){
      let tr =  document.getElementById("p-tr"+i);
      tr.remove();
        }
}

window.onload = function (){
    makeTablePicture();
    makeTableColor();
    colorClick();
    pixelClick();
};
var flag = false;
var  link;
document.getElementById("capture").addEventListener("click", () => {
    const content = document.getElementById("pictureTable");
    html2canvas(content).then(canvas => {
        // 画像として保存
        const img = canvas.toDataURL("image/png");
        const output = document.getElementById("output");
        const imageElement = new Image();
        imageElement.src = img;

        // ダウンロードリンクを作成
        if(!flag){
            link = document.createElement("a");
            link.id = "link";
        }
        link.download = "image.png";
        link.href = img;
        link.textContent = "Download Image";
        if(!flag){
            output.appendChild(link);
            flag = true;
        }
        document.getElementById("link").addEventListener("click",() =>{
            link.textContent = "";
        })
       
    });
});

document.getElementById("home").addEventListener('click',function(){
    location.href = "../../main/index.html";
  });
