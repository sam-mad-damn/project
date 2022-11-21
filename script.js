let btnModalShow = document.querySelector(".btn-modal");
let modalWrapper = document.querySelector(".modal-wrapper");
let btnModalClose = document.querySelector(".modal__close");
let closeModalWindow = () => (modalWrapper.style.display = "none");

//сделать блок
btnModalShow.onclick = function () {
  modalWrapper.style.display = "block";
};
btnModalClose.onclick = function () {
  closeModalWindow();
};

modalWrapper.addEventListener("click", (event) => {
  if (event.target == event.currentTarget) {
    closeModalWindow();
  }
});

//отработка нажатия на esc. прячем модальное окно
document.addEventListener("keyup", (e) => {
  if (e.key == "Escape") {
    closeModalWindow();
  }
});