// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Back to Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Preloader
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.display = "none";
    }
}const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {

    const btn = faq.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        faq.classList.toggle("active");

        const icon = btn.querySelector("span");

        icon.textContent = faq.classList.contains("active") ? "−" : "+";

    });

});