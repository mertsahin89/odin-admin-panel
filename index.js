let hamburgerButton =  document.querySelector(".hamburger-button");

let mobileSidebar = document.querySelector(".mobile-sidebar");

hamburgerButton.addEventListener("click", ()=>{
    if (mobileSidebar.style.display === "none") {
        mobileSidebar.style.display = "flex";
    } else {
        mobileSidebar.style.display = "none";
    }
})

/* create fibonacci in js*/
