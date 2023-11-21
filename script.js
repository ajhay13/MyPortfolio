document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      var targetId = this.getAttribute("href"); // Get the target section's ID
      var targetSection = document.querySelector(targetId);

      navLinks.forEach(function (otherLink) {
        if (otherLink !== link) {
          otherLink.classList.remove("active");
        }
      });

      link.classList.add("active");

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section
      }
    });
  });
});
