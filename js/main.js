var btn = document.getElementById("btn");
btn.addEventListener("click", Hello());


function Hello() {
    console.log("Hello!");
    var jupp = document.createElement("button")
    btn.appendChild(jupp);
}