window.addEventListener("scroll", function () {
  const main_header = document.getElementById("main_header");
  if (window.scrollY >= 50) {
    main_header.classList.add("scrolled");
  } else {
    main_header.classList.remove("scrolled");
  }
});

function toggleDropDown() {
  var dropdown = document.getElementById("nav_options");
  dropdown.classList.toggle("hover_nav");
}

// window.onclick = function (event) {
//   if (!event.target.matches(".menu")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     for (var i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
