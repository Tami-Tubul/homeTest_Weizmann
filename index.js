//***********************scroll************************* *//

// Get the button
let scrollBtn = document.getElementById("scroll-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//***********************modal************************* *//
var loginModal = document.getElementById('loginModal');

function openModal() {
    loginModal.style.display = "block";
}

function closeModal() {
    loginModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

//*************progress circle***************/

let circularProgress = document.querySelector(".circular-progress")
let progressValue = document.querySelector(".progress-value")

let progressStartValue = 0,
    progressEndValue = 10000,
    speed = 1;

let progress = setInterval(() => {
    
    progressStartValue < 8000  ? progressStartValue += 10 : progressStartValue += 1;

    progressValue.textContent = Math.floor(progressStartValue).toLocaleString();

    circularProgress.style.background = `conic-gradient(#fefefe ${progressStartValue * 0.036}deg,  #070720 0deg)`

    if (progressValue.textContent == "8,029")
        clearInterval(progress);

}, speed)


//******************animated articles***************/

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active")
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();


//*************mobile menu******************/
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("open")
})