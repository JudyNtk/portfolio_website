// Gallery items and filters
const filters = document.querySelector(".filters");
const galleryItem = document.querySelectorAll(".gallery-item");

filters.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-item")) {
        filters.querySelector(".active").classList.remove("active");
        e.target.classList.add("active"); // s'applique au nouveau filtre sélectionné

        const filtervalue = e.target.getAttribute("data-filter");

        galleryItem.forEach((item) => {
            if (item.classList.contains(filtervalue) || filtervalue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.add("hide");
            }
        })
    }
})

// Fullscreen menu from the side

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}