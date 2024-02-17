import React from "react";
import { useModal } from "../contexts/ModalContext";

export default function Modal(props) {
  const { modalIsOpen, handleClose } = useModal();

  const handleClickOverlay = (event) => {
    if (event.target === event.currentTarget) {
      handleClose(event);
    }
  };

  return (
    <dialog onClick={handleClickOverlay} open={modalIsOpen} {...props}>
      <article>
        <header>
          <button aria-label="Close" rel="prev" onClick={handleClose}></button>
          <h3>Confirm your action!</h3>
        </header>
        <p>
          Cras sit amet maximus risus. Pellentesque sodales odio sit amet augue finibus
          pellentesque. Nullam finibus risus non semper euismod.
        </p>
        <footer>
          <button className="secondary" onClick={handleClose}>
            Cancel
          </button>
          <button onClick={handleClose}>Confirm</button>
        </footer>
      </article>
    </dialog>
  );
}
