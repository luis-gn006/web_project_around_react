import React from "react";
import PopupWithForm from "./PopupWithForm";
function ConfirmDeleteCardPopup({ isOpen, onClose, handleSubmit }) {
  return (
    <>
      <PopupWithForm
        name={"delete-card"}
        title={"¿Estás seguro/a?"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <form
          onSubmit={handleSubmit}
          className={`popup__form popup__form-delete-card`}
          noValidate
        >
          <fieldset className="popup__form-set">
            <button
              type="submit"
              className={`popup__form-button popup__form-button_active popup__save-button-delete-card`}
            >
              Confirmar
            </button>
          </fieldset>
        </form>
      </PopupWithForm>
    </>
  );
}

export default ConfirmDeleteCardPopup;
