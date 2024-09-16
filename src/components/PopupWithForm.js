import { Children } from "react";

function PopupWithForm({ name, title, isOpen, children, buttonText, onClose }) {
  return (
    <>
      <section
        className={`popup popup-${name} ${isOpen ? "popup__opened" : " "}`}
      >
        <div className="popup__container">
          <button onClick={onClose} className="popup__close-button"></button>
          <h2 className="popup__heading">{title}</h2>
          <form className={`popup__form popup__form-${name}`} noValidate>
            <fieldset className="popup__form-set">
              {children}
              <button
                type="submit"
                className={`popup__form-button popup__form-button_active popup__save-button-${name}`}
              >
                {buttonText}
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
}

export default PopupWithForm;
