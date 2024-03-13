window.addEventListener("scroll", function () {
  const main_header = document.getElementById("main_header");
  if (window.scrollY >= 50) {
    main_header.classList.add("scrolled");
  } else {
    main_header.classList.remove("scrolled");
  }
});

function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
