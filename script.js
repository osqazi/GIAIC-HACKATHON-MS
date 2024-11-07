var btn = document.getElementById("skill-btn");
var box = document.getElementById("skill-sec");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    if ((box === null || box === void 0 ? void 0 : box.style.visibility) === "hidden") {
        box.style.visibility = "visible";
        btn.innerText = "Hide Skills";
        box.style.display = "flex";
    }
    else {
        box.style.visibility = "hidden";
        btn.innerText = "Show Skills";
        box.style.display = "none";
    }
    ;
});
