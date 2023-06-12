
// key down event listener
//when we press any key the kew Down eventlisteneris activated
document.addEventListener ("keydown", down);

function down() {
    let box1 = document.getElementById("box");
    box1.style.backgroundColor = "yellow";
    box1.innerText = "Keydown Activated(●'◡'●)";
    box1.style.padding = "10px 20px"; 
}

// key up eventlistener 
//When we remove the key then the keyUp event Listener is activated.
document.addEventListener("keyup", up);

function up() {
    let box2 = document.getElementById("box");
    box2.innerText = "Key Up Activated(❁´◡`❁)"
    box2.style.backgroundColor = "aqua";
    box2.style.padding = "10px 20px";
}