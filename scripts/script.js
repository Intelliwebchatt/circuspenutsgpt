// Mobile nav toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.style.transform =
    navLinks.style.transform === "translateX(0%)" 
      ? "translateX(100%)" 
      : "translateX(0%)";
});

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Optional: You could add smooth scroll or minor animations here.
// Keep an eye on user preferences for reduced motion to maintain accessibility.
