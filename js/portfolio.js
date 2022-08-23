// Gallery items and filters
filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Showong filtered items
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hiding elements which aren't selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Adding active class to the current button
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


// const filters = document.querySelector(".filters");
// const galleryItem = document.querySelectorAll(".gallery-item");

// filters.addEventListener("click", (e) => {
//     if (e.target.classList.contains("filter-item")) {
//         filters.querySelector(".active").classList.remove("active");
//         e.target.classList.add("active"); // s'applique au nouveau filtre sélectionné

//         const filtervalue = e.target.getAttribute("data-filter");

//         galleryItem.forEach((item) => {
//             if (item.classList.contains(filtervalue) || filtervalue === "all") {
//                 item.classList.remove("hide");
//                 item.classList.add("show");
//             } else {
//                 item.classList.add("hide");
//             }
//         })
//     }
// })

// Fullscreen menu from the side

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}