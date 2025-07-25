// Optional for future use — mobile menu toggle, animations, dynamic menus etc.
// // Currently not needed because hover is handled by CSS
// let mainbar = document.querySelectorAll(".navbar");
// let menus = document.querySelectorAll("#menu");
// let submenus = document.querySelectorAll(".submenu");




// Toggle mobile menu
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navbar").classList.toggle("open");
});

// Mobile submenu toggle on click
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Prevent link navigation
      item.classList.toggle("show");

      // Close other submenus
      menuItems.forEach((el) => {
        if (el !== item) {
          el.classList.remove("show");
        }
      });
    }
  });
});


document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navbar").classList.toggle("open");
  document.getElementById("authLinks").classList.toggle("open");
});

// Search button
document.getElementById("searchBtn").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    alert("Searching for: " + query);
  }
});

searchButton.addEventListener('click', () => {
  alert('Search feature coming soon!');
});


