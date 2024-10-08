import React from "react";
import "../pages/index.css";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import ConfirmDeleteCardPopup from "./ConfirmDeleteCardPopup.js";
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
  const [cardToDelete, setCardToDelete] = React.useState({});
  const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] =
    React.useState(false);
  const handleDeleteClick = (card) => {
    setCardToDelete(card);
    setConfirmDeletePopupOpen(true);
  };
  //Cerrar popups
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setConfirmDeletePopupOpen(false);
  };
  React.useEffect(() => {
    document.addEventListener("keydown", (e) => {
      e.key == "Escape" && closeAllPopups();
    });
    document.addEventListener("click", (e) => {
      e.target.classList.contains("popup") && closeAllPopups();
    });
  });

  //Cards
  const [isCards, setIsCards] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  //Cargar tarjetas
  React.useEffect(() => {
    setIsCards(true);
    api
      .getInitialCards()
      .then((cards) => setCards(cards))
      .finally(() => {
        setIsCards(false);
      });
  }, []);
  //Borrar tarjetas
  const handleConfirmDeleteCard = () => {
    if (cardToDelete) {
      return api.deleteCard(cardToDelete?._id).then(() => {
        setCards((state) => state.filter((c) => c._id !== cardToDelete._id));
        closeAllPopups();
      });
    }
  };
  //Card Likes
  function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isLiked = card.likes?.some((i) => i._id === currentUser._id);
    // Envía una petición a la API y obtén los datos actualizados de la tarjeta
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }
  //Actualizar info perfil
  const handleUpdateUser = async ({ name, about }) => {
    return await api.patchUserInfo(name, about).then((newUserInfo) => {
      setCurrentUser(newUserInfo);
      closeAllPopups();
    });
  };
  //Crear nueva tarjeta
  const handleAddPlace = async ({ name, url }) => {
    return await api.postNewCard(name, url).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    });
  };
  //Actualizar avatar
  const handleUpdateAvatar = async ({ avatar }) => {
    return await api.patchUserAvatar(avatar).then((newAvatar) => {
      setCurrentUser(newAvatar);
      closeAllPopups();
    });
  };
  //Popup de imagen
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
          isCards={isCards}
          handleCardLike={handleCardLike}
          funcDeleteCard={handleDeleteClick}
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
        <ConfirmDeleteCardPopup
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          onConfirmDelete={handleConfirmDeleteCard}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export { App };
