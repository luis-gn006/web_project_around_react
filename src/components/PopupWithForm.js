import React from "react";
function PopupWithForm({ name, title, isOpen, children, onClose }) {
  return (
    <>
      <section
        className={`popup popup-${name} ${isOpen ? "popup__opened" : " "}`}
      >
        <div className="popup__container">
          <button onClick={onClose} className="popup__close-button"></button>
          <h2 className="popup__heading">{title}</h2>
          {children}
        </div>
      </section>
    </>
  );
}

export default PopupWithForm;
