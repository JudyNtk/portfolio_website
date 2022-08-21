// Fullscreen from the side

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/* Bubbles part */
document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".layer").forEach(function (move) {
        let moving_value = move.getAttribute("data-value");
        let x = (e.clientX * moving_value) / 250;
        let y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateY(" + x + "px) translateY(" + y + "px)";
    });
}