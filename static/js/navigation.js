let navOpenStatus = false;
let buttonNode = document.getElementById("nav-btn");


buttonNode.addEventListener("click", onBtnClickHandler);


function onBtnClickHandler() {
    "use strict";
    navOpenStatus = !navOpenStatus;

    if (navOpenStatus) {
        buttonNode.classList.remove("open");
    } else {
        buttonNode.classList.add("open");
    }
}