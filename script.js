// ================= MOBILE MENU =================

// Select the menu button and navigation links.
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile navigation menu.
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ================= NAVIGATION =================

// Close the mobile menu when a navigation link is clicked.
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ================= CONTACT FORM =================

// Select the contact form.
const contactForm = document.getElementById("contactForm");

// Handle contact form submission.
contactForm.addEventListener("submit", function(event) {

    // Prevent the browser from refreshing the page.
    event.preventDefault();

    // Get values entered by the user.
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check that all fields contain information.
    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields.");

        return;
    }

    // Display a success message.
    alert(
        `Thank you, ${name}! Your message has been received.`
    );

    // Clear the form after successful submission.
    contactForm.reset();
});