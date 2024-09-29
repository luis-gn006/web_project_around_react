import React from "react";
import formConfig from "../utils/constants";
import FormValidator from "./FormValidator";
import PopupWithForm from "./PopupWithForm";
function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = "";
  }

  //Form Validator
  const formRef = React.useRef();
  React.useEffect(() => {
    const formValidation = new FormValidator(formConfig, formRef.current);
    formValidation.enableValidation();
  }, []);
  React.useEffect(() => {
    if (!isOpen) {
      const formValidation = new FormValidator(formConfig, formRef.current);
      formValidation.resetValidation();
    }
  }, [isOpen]);
  return (
    <>
      <PopupWithForm
        name={"profile-avatar"}
        title={"Cambiar foto de perfil"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <form
          onSubmit={handleSubmit}
          className={`popup__form popup__form-profile-avatar`}
          noValidate
          ref={formRef}
        >
          <fieldset className="popup__form-set">
            <label htmlFor="avatar" className="popup__form-label"></label>
            <input
              type="url"
              className="popup__form-input popup__profile-avatar"
              id="avatar"
              name="avatar"
              placeholder="Enlace a la imagen"
              required
              ref={avatarRef}
            />
            <div className="popup__line popup__line-avatar"></div>
            <span className="popup__input-error avatar-error"></span>
            <button
              type="submit"
              className={`popup__form-button popup__form-button_active popup__save-button-profile-avatar`}
            >
              Guardar
            </button>
          </fieldset>
        </form>
      </PopupWithForm>
    </>
  );
}

export default EditAvatarPopup;
