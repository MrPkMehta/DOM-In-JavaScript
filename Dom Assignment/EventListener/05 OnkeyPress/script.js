document.addEventListener("keypress", hey);


function hey() {
    let title = document.getElementById("ids");
    title.remove("ids"); //hear when anybody press any key, then input bar is removed and some messege is displayed.
    
    // Create element with the help of javascript
let var1 = document.createElement ("h1");
var1.className = "messege";
var1.style.fontSize = "35px";
var1.style.fontWeight = "800";
var1.style.border = "solid 3px black"
var1.style.boxShadow = "0 0 5px black"
var1.style.padding = "15px 20px"
var1.style.backgroundColor = "yellow"
var1.textContent = "Key Press Event Listener SuccessFully Run🤷‍♂️";
document.body.appendChild(var1);
}
