let navOpenStatus = false;

window.addEventListener("load", function () {
  let buttonNode = document.getElementById("nav-btn");
  let sideNavNode = document.getElementById("side-nav");
  let bodyNode = document.getElementById("body");

  buttonNode.addEventListener("click", onBtnClickHandler);

  function onBtnClickHandler() {
    if (navOpenStatus) {
      bodyNode.classList.remove("prevent-scroll");
      buttonNode.classList.remove("open");
      sideNavNode.classList.add("d-none");
      navOpenStatus = !navOpenStatus;
    } else {
      bodyNode.classList.add("prevent-scroll");
      buttonNode.classList.add("open");
      sideNavNode.classList.remove("d-none");
      navOpenStatus = !navOpenStatus;
    }
  }
});
