const settingsBtn = document.getElementById("settings-btn");
const settingsBox = document.querySelector(".settings");
const backgroundid = document.getElementById("full-page");
const background = document.querySelector(".full-page");
const body = document.querySelector('body');
const msg = document.querySelector('#msg');
const submit = document.querySelector('#send');

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

msg.addEventListener('input', function () {
  const length = msg.value.trim().length;
  if (length > 0 && length < 10) {
    msg.style.color = 'red';
    submit.style.color = '';
    submit.disabled = true;
    submit.classList.remove("enable");

  } else if (length >= 10) {
    msg.style.color = '';
    submit.style.color = 'rgb(188, 181, 181)';
    submit.disabled = false;
    submit.classList.toggle("enable");
  } else {
    msg.style.color = '';
    submit.style.color = '';
    submit.disabled = true;
    submit.classList.remove("enable");
  }
});