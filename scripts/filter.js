let body = document.getElementById("body");
let name = document.getElementById("name");
let fixed = document.getElementById("fixed");
let filter = document.getElementById("filter");
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");

let icon = document.querySelectorAll(".icons > a, #social > a");
var len = icon.length;

function color() {
  if (body.classList.contains("bg-dark")) {
    body.classList.remove("bg-dark", "text-light");
    name.classList.remove("text-light");
    fixed.classList.remove("navbar-dark", "bg-dark");
  



setTimeout(() => {
  sun.classList.remove("d-none");
  moon.classList.add("d-none");
  filter.classList.remove("text-light");

    
  }, 250);
    for (var i = 0; i < len; i++) {
      if (icon[i].classList.contains("link-light")) {
        icon[i].classList.remove("link-light");
        icon[i].classList.add("link-dark");
      }
    }

    body.classList.add("bg-light");
    fixed.classList.add("navbar-light", "bg-light");
    filter.classList.add("text-dark", "border-dark");
  } else if (body.classList.contains("bg-light")) {
    
    body.classList.remove("bg-light");
    filter.classList.remove("text-dark", "border-dark");


    body.classList.add("text-light", "bg-dark");
    fixed.classList.add("navbar-dark", "bg-dark");
    filter.classList.add("text-light", "border-light");

    setTimeout(() => {
      moon.classList.remove("d-none");
      sun.classList.add("d-none");
    
    }, 250);

    for (var i = 0; i < len; i++) {
      if (icon[i].classList.contains("link-dark")) {
        icon[i].classList.remove("link-dark");
        icon[i].classList.add("link-light");
      }
    }

  }
}
