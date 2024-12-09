const filterButtons = document.querySelectorAll(".category");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    const box = document.getElementById("box");

   
    projects.forEach((project) => {
      if (category === "all" || project.getAttribute("data-category") === category) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });
  });
});

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    navbar.classList.add('scrolled'); // Add class when scrolled past 100px
    navbar.style.height = '100px';
  } else {
    navbar.classList.remove('scrolled'); // Remove class when less than 100px
  }
});


const image = document.getElementById('dynamic-image');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    image.src = "./Images/A.png"; // Change to another image
  } else {
    image.src = "./Images/A (6).png"; // Revert to the original image
  }
});