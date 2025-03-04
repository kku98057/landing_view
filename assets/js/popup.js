export const activePopupHandler = (
  className,
  openBtnClassName,
  CloseClassName
) => {
  const popup = document.querySelector(className);
  const openBtn = document.querySelector(openBtnClassName);
  const closeBtn = document.querySelector(CloseClassName);
  openBtn?.addEventListener("click", () => {
    popup.classList.add("active");
  });
  closeBtn?.addEventListener("click", () => {
    popup.classList.remove("active");
  });
};
