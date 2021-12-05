// pull in all required data
const btn = document.querySelector(`button.mobile-nav-btn`);
const menu = document.querySelector(`.mobile-nav`);

// add event listeners to assign classes for mobile nav toggle
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
