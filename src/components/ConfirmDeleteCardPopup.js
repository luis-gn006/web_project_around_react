import React from "react";
import PopupWithForm from "./PopupWithForm";
function ConfirmDeleteCardPopup({ isOpen, onClose, handleSubmit }) {
  return (
    <>
      <PopupWithForm
        name={"delete-card"}
        title={"¿Estás seguro/a?"}
        isOpen={isOpen}
        buttonText={"Confirmar"}
        onClose={onClose}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default ConfirmDeleteCardPopup;
