import { useState } from "react";
import "../pages/index.css";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import Elements from "./Elements";
import Footer from "./Footer";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] = useState(false);
  const handleConfirmDeleteClick = () => {
    setConfirmDeletePopupOpen(true);
  };
  const [isAddElementPopupOpen, setAddElementPopupOpen] = useState(false);
  const handleAddElementClick = () => {
    setAddElementPopupOpen(true);
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddElementPopupOpen(false);
  };
  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddElementClick={handleAddElementClick}
      />
      <PopupWithForm
        name={"profile-avatar"}
        title={"Cambiar foto de perfil"}
        isOpen={isEditAvatarPopupOpen}
        buttonText={"Guardar"}
        onClose={closeAllPopups}
      >
        <label htmlFor="avatar" className="popup__form-label"></label>
        <input
          type="url"
          className="popup__form-input popup__profile-avatar"
          id="avatar"
          name="avatar"
          placeholder="Enlace a la imagen"
          required
        />
        <div className="popup__line popup__line-avatar"></div>
        <span className="popup__input-error avatar-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name={"profile"}
        title={"Editar Perfil"}
        isOpen={isEditProfilePopupOpen}
        buttonText={"Guardar"}
        onClose={closeAllPopups}
      >
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
        />
        <div className="popup__line popup__line-job"></div>
        <span className="popup__input-error job-error"></span>
      </PopupWithForm>
      <Elements />

      <PopupWithForm
        name={"delete-card"}
        title={"¿Estás seguro/a?"}
        isOpen={""}
        buttonText={"Confirmar"}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name={"elements"}
        title={"Nuevo lugar"}
        isOpen={isAddElementPopupOpen}
        buttonText={"Crear"}
        onClose={closeAllPopups}
      >
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
        />
        <div className="popup__line"></div>
        <span className="popup__input-error linkimage-error"></span>
      </PopupWithForm>

      <Footer />
    </div>
  );
}

export { App };
