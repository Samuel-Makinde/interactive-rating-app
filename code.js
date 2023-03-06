const spans = document.querySelectorAll('.my-span');
const messageEl = document.getElementById("message");

spans.forEach(span =>{
    span.addEventListener("click", () =>{
        spans.forEach( span =>{
            span.classList.remove("active");
        })
        span.classList.add("active");
        messageEl.textContent = `You selected ${span.textContent} out of 5`;
    })
})
function showPage() {
    const mainPage = document.querySelector(".main-page");
    const hiddenPage = document.querySelector(".hidden-page");

    mainPage.style.display = "none";
    hiddenPage.style.display = "block";

    setTimeout(()=>{
        hiddenPage.style.opacity = 1;
    })
}

