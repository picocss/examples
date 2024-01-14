/*
 * Modal
 *
 * Pico.css - https://picocss.com
 * Copyright 2019-2024 - Licensed under MIT
 */

// Config
const scrollbarWidthCssVar = "--pico-scrollbar-width";
const animationDuration = 400; // ms

// Toggle modal
const toggleModal = (event) => {
  event.preventDefault();
  const modal = document.getElementById(event.currentTarget.dataset.target);
  if (!modal) return;
  modal && (isModalOpen(modal) ? closeModal(modal) : openModal(modal));
};

// Is modal open
const isModalOpen = (modal) => modal.hasAttribute("open") && modal.getAttribute("open") !== "false";

// Open modal
const openModal = (modal) => {
  const scrollbarWidth = getScrollbarWidth();
  if (scrollbarWidth) {
    html.style.setProperty(scrollbarWidthCssVar, `${scrollbarWidth}px`);
  }
  const visibleModal = modal;
  modal.setAttribute("open", true);
};

// Close modal
const closeModal = (modal) => {
  modal.removeAttribute("open");
};

// Close with a click outside
document.addEventListener("click", (event) => {
  const modal = event.target.closest("dialog");
  const modalContent = modal && modal.querySelector("article");
  const isClickInside = modalContent && modalContent.contains(event.target);
  modal && !isClickInside && closeModal(modal);
});

// Close with Esc key
document.addEventListener("keydown", (event) => {
  const modals = document.querySelectorAll("dialog[open]:not([open=false])");
  const isOpen = modals.length > 0;
  if (!isOpen) return;
  if (event.key === "Escape") {
    modals.forEach((modal) => closeModal(modal));
  }
});

// Get scrollbar width
const getScrollbarWidth = () => {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  return scrollbarWidth;
};

// Is scrollbar visible
const isScrollbarVisible = () => {
  return document.body.scrollHeight > screen.height;
};
