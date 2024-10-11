let cube = document.querySelector("#cube");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let fuchsia = document.querySelector(".fuchsia");
let color = document.querySelector(".color");
console.dir(cube);


// Function to change the cube color :
function changeColor(colorCube) {
    cube.style.backgroundColor = colorCube;
}

// Function to display the appropriate text based on color :
function textDisplay(colorCube) {
    // Text initially hidden
    red.style.display = "none";
    green.style.display = "none";
    blue.style.display = "none";

    if (colorCube === "red") {
        fuchsia.style.display = "none";
        red.style.display = "block";
        red.style.color = "darkred";
    } else if (colorCube === "green") {
        fuchsia.style.display = "none";
        green.style.display = "block";
        green.style.color = "greenyellow";
    } else if (colorCube === "blue") {
        fuchsia.style.display = "none";
        blue.style.display = "block";
        blue.style.color = "darkblue";
    }
}

window.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
        // console.dir(e.keyCode); // To check the e.keyCode of keys
        case 82: //---------------- R key: 82 red  
            changeColor("red");
            textDisplay("red");
            break;
        case 71: //---------------- G key: 71 green
            changeColor("green");
            textDisplay("green");
            break;

        case 66: //---------------- B key: 66 blue
            changeColor("blue");
            textDisplay("blue");
            break;

        default:
            console.log(e.keyCode);
            break;
    }
});