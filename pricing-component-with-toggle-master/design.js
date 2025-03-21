const buttonScroll = document.querySelector("#buttonScroll");
const scrollButton = document.querySelector(".scrollButton");
const yearlySub = document.querySelectorAll(".yearly");
const monthlySub = document.querySelectorAll(".monthly");

scrollButton.addEventListener("click", () => {
    if (scrollButton.style.justifyContent === "flex-end") {
        scrollButton.style.justifyContent = "flex-start";
        for(let month of monthlySub){
            month.style.display = "none"
        }
        for(let year of yearlySub){
            year.style.display = "block"
        }
    } else if (scrollButton.style.justifyContent !== "flex-end") {
        scrollButton.style.justifyContent = "flex-end";
        for(let month of monthlySub){
            month.style.display = "block"
        }
        for(let year of yearlySub){
            year.style.display = "none"
        }
    };

})