import profileAvatar from "../images/profile__image.jpg";

function Main({ onEditAvatarClick, onEditProfileClick, onAddElementClick }) {
  return (
    <>
      <main>
        <section className="profile">
          <div className="profile__column-left">
            <div className="profile__avatar-container">
              <img
                src={profileAvatar}
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
                <h3 className="profile__name">Jacques Cousteau</h3>
                <button
                  onClick={onEditProfileClick}
                  className="profile__button-edit"
                ></button>
              </div>
              <p className="profile__job">Explorador</p>
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
