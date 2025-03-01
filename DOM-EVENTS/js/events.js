console.log("External file")

// option 2 to handle event
function makeYellow() {
    document.body.style.backgroundColor = "yellow";
}
function makeRed() {
    document.body.style.backgroundColor = "red";
}

// option 3: get element by ID and then set onclick
const btnMakeBlue = document.getElementById("btn-make-blue");
//   console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

// option 3: different version 
const btnMakePurple = document.getElementById("btn-make-purple");
btnMakePurple.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = "purple";
}