// access all the html element
const decBtn = document.getElementById("dec");
const disBtn = document.getElementById("varr");
const incBtn = document.getElementById("inc");
const resBtn = document.getElementById("res");


// for decrement button
dec.addEventListener("click", decrement);
function decrement() {
    const value = Number(varr.innerText);
    if (value > -30){
        varr.innerText = value-1;
    }
    else {
        alert("Below -30 Values Are Not Allowed")
    }

}

// for increment button

inc.addEventListener("click", increment);
function increment() {
    const value = Number(varr.innerText);
    if (value >= 30){
        alert("Above 30 values are not allowed");
    }
    else{
        varr.innerText = value + 1;
    }

}


// for reset button
resBtn.addEventListener("click",reset);

function reset() {
    varr.innerText = 0;

}