import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
function Card({
  card,
  url,
  name,
  likes,
  handleDeleteCard,
  handleSelectedCard,
}) {
  const { currentUser } = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const deleteCard = () => {
    handleDeleteCard(name);
  };
  const clickImage = () => {
    handleSelectedCard(card);
  };

  return (
    <div className="element">
      <div className="element__image-content">
        <img
          src={url}
          onClick={clickImage}
          alt={`imagen de ${name}`}
          className="element__image"
        />
        <button
          className={`${
            isOwn ? "element__button-trash" : "element__button-trash-hide"
          }`}
          onClick={deleteCard}
        ></button>
      </div>
      <div className="element__footer">
        <p className="element__name">{name}</p>
        <div className="element__like-container">
          <button
            className={`${
              isLiked ? "element__button-like-active" : "element__button-like"
            }`}
          ></button>
          <p className="element__likes">{likes}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
