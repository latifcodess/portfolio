const settingsBtn = document.getElementById("settings-btn");
const settingsBox = document.querySelector(".settings");
const backgroundid = document.getElementById("full-page");
const background = document.querySelector(".full-page");
const body = document.querySelector('body');

settingsBtn.addEventListener("click", () => {
  settingsBox.classList.toggle("active");
  background.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

backgroundid.addEventListener("click", ()=> {
  background.classList.remove("active");
  settingsBox.classList.remove("active");
  body.classList.remove("no-scroll");
});