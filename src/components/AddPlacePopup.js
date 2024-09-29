import React from "react";
import formConfig from "../utils/constants";
import FormValidator from "./FormValidator";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");
  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }
  function handleChangeLink(e) {
    setLink(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: title,
      url: link,
    });
    setTitle("");
    setLink("");
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
        name={"elements"}
        title={"Nuevo lugar"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <form
          onSubmit={handleSubmit}
          className={`popup__form popup__form-elements}`}
          noValidate
          ref={formRef}
        >
          <fieldset className="popup__form-set">
            <label htmlFor="title" className="popup__form-label"></label>
            <input
              type="text"
              className="popup__form-input popup__form-title"
              id="title"
              name="title"
              placeholder="Título"
              required
              minLength="2"
              maxLength="30"
              onChange={handleChangeTitle}
              value={title}
            />
            <div className="popup__line"></div>
            <span className="popup__input-error title-error"></span>
            <label htmlFor="link__image" className="popup__form-label"></label>
            <input
              type="url"
              className="popup__form-input popup__form-link"
              id="linkimage"
              name="link"
              placeholder="Enlace a la imagen"
              required
              onChange={handleChangeLink}
              value={link}
            />
            <div className="popup__line"></div>
            <span className="popup__input-error linkimage-error"></span>
            <button
              type="submit"
              className={`popup__form-button popup__form-button_active popup__save-button-elements`}
            >
              Crear
            </button>
          </fieldset>
        </form>
      </PopupWithForm>
    </>
  );
}

export default AddPlacePopup;
