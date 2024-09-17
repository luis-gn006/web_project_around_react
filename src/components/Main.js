import { useState, useEffect } from "react";
import profileAvatar from "../images/profile__image.jpg";
import api from "../utils/Api.js";

function Main({ onEditAvatarClick, onEditProfileClick, onAddElementClick }) {
  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((user) => setUserAvatar(user.avatar));
  }, []);
  useEffect(() => {
    api.getUserInfo().then((user) => setUserDescription(user.about));
  }, []);
  useEffect(() => {
    api.getUserInfo().then((user) => setUserName(user.name));
  }, []);
  return (
    <>
      <main>
        <section className="profile">
          <div className="profile__column-left">
            <div className="profile__avatar-container">
              <img
                src={userAvatar}
                alt="imagen de perfil"
                className="profile__avatar"
              />
              <button
                onClick={onEditAvatarClick}
                className="profile__avatar-edit"
              ></button>
            </div>
            <div className="profile__info">
              <div className="profile__name-content">
                <h3 className="profile__name">{`${
                  !userName.length == 0 ? userName : "Cargando..."
                }`}</h3>
                <button
                  onClick={onEditProfileClick}
                  className="profile__button-edit"
                ></button>
              </div>
              <p className="profile__job">{`${
                !userDescription.length == 0 ? userDescription : "Cargando..."
              }`}</p>
            </div>
          </div>

          <div className="profile__column-right">
            <button onClick={onAddElementClick} className="profile__button-add">
              +
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
