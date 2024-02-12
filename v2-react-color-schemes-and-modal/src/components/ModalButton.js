import React from "react";
import { useModal } from "../contexts/ModalContext";

export default function ModalButton({ children, ...props }) {
  const { handleOpen } = useModal();

  return (
    <button onClick={handleOpen} {...props}>
      {children}
    </button>
  );
}
