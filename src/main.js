/* ====== MOBILE  ACCORDION====== */
document.addEventListener("DOMContentLoaded", () => {
  const submenuCheckboxes = document.querySelectorAll(".submenu__checkbox");
  const allMenuLinks = document.querySelectorAll(".menu__link");

  submenuCheckboxes.forEach((cb) => {
    cb.addEventListener("change", (e) => {
      if (e.target.checked) {
        submenuCheckboxes.forEach((other) => {
          if (other !== e.target) other.checked = false;
        });
      }
    });
  });

  allMenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (!link.hasAttribute("for")) {
        submenuCheckboxes.forEach((cb) => (cb.checked = false));
      }
    });
  });
});
