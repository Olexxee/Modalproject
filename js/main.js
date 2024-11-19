const OpenModal = document.getElementById("openModal");
const modalElement = document.querySelector(".modal");
const contentElement = document.querySelector(".content");

OpenModal.addEventListener("click", () => {
  modalElement.classList.add("open");
});

modalElement.addEventListener("click", () => {
  modalElement.classList.remove("open");
});
