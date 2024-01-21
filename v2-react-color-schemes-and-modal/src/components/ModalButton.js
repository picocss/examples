import React from "react";
import { useModal } from "../contexts/ModalContext";

export default function ModalButton(props) {
  const { handleOpen } = useModal();

  return (
    <button onClick={handleOpen} {...props}>
      Open Modal
    </button>
  );
}
