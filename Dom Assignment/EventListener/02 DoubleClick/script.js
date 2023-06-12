// // now first wwe have to applay the event listener (doubleclick)and then catch  the element with the help of id  and appalay the css property with help of javascript.

document.addEventListener("dblclick", fun) //eventlistener is dblclick and the function is fun.

function fun() {
    // adding the dblclick event listener tot the elment
    
    let title = document.getElementById("dblclk");
    title.innerText = "You Have Just Double Clicked On Me👍";
    title.style.color = "chartreuse";
    title.style.backgroundColor = "black";
    title.style.padding = "20px 30px";
    title.style.fontWeight = "900";
    title.style.border = "red 5px solid"
    title.style.borderRadius = "15PX";
    title.style.boxShadow = "none";
}

