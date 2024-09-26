import React from "react";
import "../pages/index.css";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Elements from "./Elements";
import Footer from "./Footer";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  //User info
  const [currentUser, setCurrentUser] = React.useState();
  React.useEffect(() => {
    api.getUserInfo().then((user) => setCurrentUser(user));
  }, []);

  //Popups
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const onEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const onEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const [isAddElementPopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const onAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };
  /*
  const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] = React.useState(false);
  const handleConfirmDeleteClick = () => {
    setConfirmDeletePopupOpen(true);
  };
  */
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  };

  //Cards
  const [cards, setCards] = React.useState([]);
  //Cargar tarjetas
  React.useEffect(() => {
    api.getInitialCards().then((cards) => setCards(cards));
  }, []);
  //Borrar tarjetas (solo en local , no en api)
  const funcDeleteCard = (cardName) => {
    const filterCards = cards.filter((item) => item.name !== cardName);
    setCards(filterCards);
  };
  //Card Like
  function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isLiked = card.likes?.some((i) => i._id === currentUser._id);
    // Envía una petición a la API y obtén los datos actualizados de la tarjeta
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  //Popup imagen
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState([]);
  const funcSelectCard = (card) => {
    setSelectedCard(card);
    setImagePopupOpen(true);
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser }}>
        <Header />
        <Main
          handleEditAvatarClick={onEditAvatarClick}
          handleEditProfileClick={onEditProfileClick}
          handleAddPlaceClick={onAddPlaceClick}
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
        <Elements>
          {cards.map((item) => {
            return (
              <Card
                handleCardLike={handleCardLike}
                card={item}
                url={item.link}
                name={item.name}
                likes={item.likes.length}
                key={item._id}
                handleDeleteCard={funcDeleteCard}
                handleSelectedCard={funcSelectCard}
              />
            );
          })}
        </Elements>
        {selectedCard && (
          <ImagePopup
            name={"image-fullscreen"}
            selectedCard={selectedCard}
            onClose={closeAllPopups}
            isOpen={isImagePopupOpen}
          />
        )}

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
      </CurrentUserContext.Provider>
    </div>
  );
}

export { App };
