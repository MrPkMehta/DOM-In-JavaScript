document.addEventListener("mouseout", out);

function out(){
    let var1 = document.getElementById("messege");
    var1.innerText = "GAME OVER😒"
    var1.style.color = "aqua";
    var1.style.backgroundColor = "#d71d1d"
    var1.style.fontWeight = "900"
    var1.style.border = "4px solid black"
}