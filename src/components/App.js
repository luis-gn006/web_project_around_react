import React from "react";
import "../pages/index.css";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import Footer from "./Footer";

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
  const funcDeleteCard = (card) => {
    api.deleteCard(card?._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
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
  //Actualizar info perfil
  const handleUpdateUser = ({ name, about }) => {
    api.patchUserInfo(name, about).then((newUserInfo) => {
      setCurrentUser(newUserInfo);
      closeAllPopups();
    });
  };
  //Crear nueva tarjeta
  const handleAddPlace = ({ name, url }) => {
    api.postNewCard(name, url).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    });
  };
  //Actualizar avatar imagen
  const handleUpdateAvatar = ({ avatar }) => {
    api.patchUserAvatar(avatar).then((newAvatar) => {
      setCurrentUser(newAvatar);
      closeAllPopups();
    });
  };
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
          cards={cards}
          handleCardLike={handleCardLike}
          funcDeleteCard={funcDeleteCard}
          funcSelectCard={funcSelectCard}
          selectedCard={selectedCard}
          closeAllPopups={closeAllPopups}
          isImagePopupOpen={isImagePopupOpen}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddElementPopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />
        <PopupWithForm
          name={"delete-card"}
          title={"¿Estás seguro/a?"}
          isOpen={""}
          buttonText={"Confirmar"}
          onClose={closeAllPopups}
        />

        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export { App };
