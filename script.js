let btnModalShow = document.querySelector(".btn-modal");
let modalWrapper = document.querySelector(".modal-wrapper");
let btnModalClose = document.querySelector(".modal__close");

//функция закрытия модального окна
let closeModalWindow = () => (modalWrapper.style.display = "none");

//сделать модальное окно видимым 
btnModalShow.onclick = function () {
  modalWrapper.style.display = "block";
};

//закрытие модального окна по крестику
btnModalClose.onclick = function () {
  closeModalWindow();
};

//закрытие модального окна по пустой области
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