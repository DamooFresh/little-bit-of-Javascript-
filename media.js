window.onload = screen;
window.onresize = screen;

function screen () {
    myWith = window.innerWidth

    document.getElementById("cage").innerHTML = "Width: " + myWith + " px";
}
