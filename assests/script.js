let cube = document.querySelector("#cube");
console.dir(cube);
// R key: 82 red
// G key: 71 green
// B key: 66 blue

function changeColor(color) {
    cube.style.backgroundColor = color;
}

window.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
        case 82: //---------------- red  
            changeColor("red");
            break;
        case 71: //---------------- green
            changeColor("green");
            break;

        case 66: //---------------- blue
            changeColor("blue");
            break;

        default:
            console.log(e.keyCode);
            break;
    }
});