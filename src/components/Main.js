import React from "react";
import profileAvatar from "../images/profile__image.jpg";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({
  handleEditAvatarClick,
  handleEditProfileClick,
  handleAddPlaceClick,
}) {
  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <>
      <main>
        <section className="profile">
          <div className="profile__column-left">
            <div className="profile__avatar-container">
              <img
                src={`${
                  !currentUser?.avatar.length == 0
                    ? currentUser?.avatar
                    : profileAvatar
                }`}
                alt="imagen de perfil"
                className="profile__avatar"
              />
              <button
                onClick={handleEditAvatarClick}
                className="profile__avatar-edit"
              ></button>
            </div>
            <div className="profile__info">
              <div className="profile__name-content">
                <h3 className="profile__name">{`${
                  !currentUser?.name.length == 0
                    ? currentUser?.name
                    : "Cargando..."
                }`}</h3>
                <button
                  onClick={handleEditProfileClick}
                  className="profile__button-edit"
                ></button>
              </div>
              <p className="profile__job">{`${
                !currentUser?.about.length == 0
                  ? currentUser?.about
                  : "Cargando..."
              }`}</p>
            </div>
          </div>

          <div className="profile__column-right">
            <button
              onClick={handleAddPlaceClick}
              className="profile__button-add"
            >
              +
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
