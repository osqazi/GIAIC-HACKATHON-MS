const btn = document.getElementById("skill-btn");
const box = document.getElementById("skill-sec");

btn?.addEventListener("click", ()=>{
    
    if(box?.style.visibility === "hidden"){
        box.style.visibility = "visible";
        btn.innerText = "Hide Skills";
        box.style.display = "flex";
    }else{
        box.style.visibility = "hidden";
        btn.innerText = "Show Skills";
        box.style.display = "none";

    };
});
