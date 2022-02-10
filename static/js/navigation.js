let navOpenStatus = false;


window.addEventListener("load", function () {
    let buttonNode = document.getElementById("nav-btn");
    let sideNavNode = document.getElementById("side-nav");

    buttonNode.addEventListener("click", onBtnClickHandler);


    function onBtnClickHandler() {
        if (navOpenStatus) {
            buttonNode.classList.remove("open");
            sideNavNode.classList.add("d-none");
            navOpenStatus = !navOpenStatus;
        } else {
            buttonNode.classList.add("open");
            sideNavNode.classList.remove("d-none");
            navOpenStatus = !navOpenStatus;
        }
    }
});
