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

// preloader
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

});// ===========================
// QUOTE FORM TO WHATSAPP
// ===========================

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value;
        const mobile = document.getElementById("mobile").value;
        const email = document.getElementById("email").value;
        const business = document.getElementById("business").value;
        const size = document.getElementById("size").value;
        const quantity = document.getElementById("quantity").value;
        const location = document.getElementById("location").value;
        const message = document.getElementById("message").value;

        if(name === "" || mobile === ""){
            alert("Please fill Name and Mobile Number.");
            return;
        }

        const text =
`📩 *NEW QUOTE REQUEST*

👤 Name: ${name}
📞 Mobile: ${mobile}
📧 Email: ${email}

🏢 Business: ${business}

🥤 Bottle Size: ${size}
📦 Quantity: ${quantity}

📍 Delivery: ${location}

📝 Requirement:
${message}

-------------------------
Shree Shyam Customized Water Bottle Label`;

        const url = `https://wa.me/917709953326?text=${encodeURIComponent(text)}`;

        window.open(url,"_blank");

    });

}