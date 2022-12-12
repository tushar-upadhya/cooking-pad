let btn = document.querySelector("button");

btn.addEventListener("click", fun);

function fun() {
    let name = prompt("enter name");
    btn.textContent = "HI :" + name;
}
