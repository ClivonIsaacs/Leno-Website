// Wait for the DOM to fully load before running
document.addEventListener("DOMContentLoaded", function () {
  // Select toggleButton & mobileMenu from the DOM
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  if (!toggleButton || !mobileMenu) return;

  // Add click event listener on toggleButton
  toggleButton.addEventListener("click", function () {
    // Toggle active class on mobile menu
    mobileMenu.classList.toggle("active");

    // Read aria-expanded value and toggle it to reflect menu's open/closed state
    const expanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", String(!expanded));
  });

  // Change navbar background-color on scroll
  window.addEventListener("scroll", function () {
    const navbar = this.document.querySelector(".navbar");

    if (this.window.scrollY > 0) {
      navbar.classList.add("navbar--scroll");
    } else {
      navbar.classList.remove("navbar--scroll");
    }
  });

  // Modal
  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const videoButton = document.querySelector(".preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");

  if (!modal || !videoPlayer || !videoButton || !closeButton) return;

  // Open modal when videoButton is clicked
  videoButton.addEventListener("click", function () {
    modal.style.display = "block";

    videoPlayer.src = "https://www.youtube.com/embed/8sXRyHI3bLw";
  });

  // Close modal when closeButton is clicked
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    videoPlayer.src = "";
  });
  // Close modal on outer click
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      videoPlayer.src = "";
    }
  });
});
