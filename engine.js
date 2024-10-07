const emoji = [
    "😁",
    "😁",
    "😣",
    "😣",
    "🙄",
    "🙄",
    "😆",
    "😆",
    "🤑",
    "🤑",
    "😨",
    "😨",
    "🤯",
    "🤯",
    "😝",
    "😝"
];
let open = [];
let shuffle = emoji.sort(()=>(Math.random()>0.5?2:-1));
for(let i=0; i < emoji.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffle[i];
    box.onclick = click;
    document.querySelector(".game").appendChild(box);
}
function click(){
    if(open.length <2){
        this.classList.add("boxOpen");
        open.push(this);
    }
    if(open.length ==2){
        setTimeout(checkMatch, 500);
    }
}
function checkMatch(){
    if(open[0].innerHTML === open[1].innerHTML){
        open[0].classList.add("boxMatch");
        open[1].classList.add("boxMatch");
    }
    else{
        open[0].classList.remove("boxOpen");
        open[1].classList.remove("boxOpen");
    }
    open =[];

    if(document.querySelectorAll(".boxMatch").length === emoji.length){
        alert("PARABENS, VOCÊ VENCEU!");
    }
}