var write = document.querySelector(".write-btn");
var popup = document.querySelector(".modal-window");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var fullname = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=email]");
var content = popup.querySelector("[name=content]");

write.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  fullname.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!fullname.value || !email.value || !content.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
