const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");



// add event listener on each buttons
buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        count.innerHTML++;
        setColor();
    }

    if (e.target.classList.contains("subtract")) {
        count.innerHTML--;
        setColor();
    }

    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0;
        setColor();
    }

})

// function that reset the color
function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "yellow"
    } else if (count.innerHTML < 0) {
        count.style.color = "#ff4500"
    } else {
        count.style.color = "#fff"
    }
};

