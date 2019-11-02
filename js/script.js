const output = document.querySelector(".output");
const button = document.querySelector("button");
button.addEventListener("click", showMessage);

function showMessage(){
    const input = document.querySelector("input").value;
    output.innerHTML = `<h2>Hello, welcome ${input} to my page!</h2>`;
}