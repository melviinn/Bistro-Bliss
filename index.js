const NavLinks = document.querySelectorAll(".nav-link");

NavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    NavLinks.forEach((link) => {
      link.classList.remove("isActive");
    });
    link.classList.add("isActive");
  });
});

console.log(NavLinks);
