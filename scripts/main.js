var navs = document.querySelectorAll("nav ul li a[href^='#']"); // selcet all anchor links in nav tag
var sections = document.querySelectorAll("main section"); // select all secions

// implentation of smooth scroll using native api
navs.forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// impleantation of indicating current location using native api
window.addEventListener("scroll", event => {
    var fromTop = window.scrollY;

    navs.forEach(link => {
        var section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("item-active");
        } else {
            link.classList.remove("item-active");
        }
    });
});
