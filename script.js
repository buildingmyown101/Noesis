// Smooth welcome message
console.log("Welcome to Noesis 🚀");

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 20) {
        nav.classList.add("shadow-lg");
    } else {
        nav.classList.remove("shadow-lg");
    }
});

// Waitlist button
const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", () => {
        alert("Thank you for joining the Noesis waitlist! 🚀");
    });
}
