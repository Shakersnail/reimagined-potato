let btn = document.getElementById("btn");
btn.onclick = () => console.log("Hello!");

document.getElementById("btn").addEventListener("click", Hello()); 

function Hello()
{
    console.log("Hello!");
}