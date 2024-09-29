import React from "react";
import formConfig from "../utils/constants";
import FormValidator from "./FormValidator";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setDescription(currentUser.about || "");
    }
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
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
        name={"profile"}
        title={"Editar Perfil"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <form
          onSubmit={handleSubmit}
          className={`popup__form popup__form-profile`}
          noValidate
          ref={formRef}
        >
          <fieldset className="popup__form-set">
            <label htmlFor="name" className="popup__form-label"></label>
            <input
              type="text"
              className="popup__form-input popup__form-name"
              id="name"
              name="name"
              placeholder="Nombre"
              required
              minLength="2"
              maxLength="40"
              onChange={handleChangeName}
              value={name}
            />
            <div className="popup__line popup__line-name"></div>
            <span className="popup__input-error name-error"></span>
            <label htmlFor="job" className="popup__form-label"></label>
            <input
              type="text"
              className="popup__form-input popup__form-job"
              id="job"
              name="job"
              placeholder="Acerca de mí"
              required
              minLength="2"
              maxLength="200"
              onChange={handleChangeDescription}
              value={description}
            />
            <div className="popup__line popup__line-job"></div>
            <span className="popup__input-error job-error"></span>
            <button
              type="submit"
              className={`popup__form-button popup__form-button_active popup__save-button-profile`}
            >
              Guardar
            </button>
          </fieldset>
        </form>
      </PopupWithForm>
    </>
  );
}

export default EditProfilePopup;
