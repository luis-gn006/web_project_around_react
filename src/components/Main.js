import profileAvatar from "../images/profile__image.jpg";

function Main() {
  return (
    <>
      <main>
        <section class="profile">
          <div class="profile__column-left">
            <div class="profile__avatar-container">
              <img
                src={profileAvatar}
                alt="imagen de perfil"
                class="profile__avatar"
              />
              <button class="profile__avatar-edit"></button>
            </div>
            <div class="profile__info">
              <div class="profile__name-content">
                <h3 class="profile__name">Jacques Cousteau</h3>
                <button class="profile__button-edit"></button>
              </div>
              <p class="profile__job">Explorador</p>
            </div>
          </div>

          <div class="profile__column-right">
            <button class="profile__button-add">+</button>
          </div>
        </section>

        <section class="popup popup-profile">
          <div class="popup__container">
            <button class="popup__close-button"></button>
            <h2 class="popup__heading">Editar Perfil</h2>
            <form class="popup__form popup__form-profile" novalidate>
              <fieldset class="popup__form-set">
                <label for="name" class="popup__form-label"></label>
                <input
                  type="text"
                  class="popup__form-input popup__form-name"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  required
                  minlength="2"
                  maxlength="40"
                />
                <div class="popup__line popup__line-name"></div>
                <span class="popup__input-error name-error"></span>
                <label for="job" class="popup__form-label"></label>
                <input
                  type="text"
                  class="popup__form-input popup__form-job"
                  id="job"
                  name="job"
                  placeholder="Acerca de mí"
                  required
                  minlength="2"
                  maxlength="200"
                />
                <div class="popup__line popup__line-job"></div>
                <span class="popup__input-error job-error"></span>
                <button
                  type="submit"
                  class="popup__form-button popup__form-button_active popup__save-button-profile"
                >
                  Guardar
                </button>
              </fieldset>
            </form>
          </div>
        </section>

        <section class="popup popup-profile-avatar">
          <div class="popup__container">
            <button class="popup__close-button"></button>
            <h2 class="popup__heading">Cambiar foto de perfil</h2>
            <form class="popup__form popup__form-avatar" novalidate>
              <fieldset class="popup__form-set">
                <label for="avatar" class="popup__form-label"></label>
                <input
                  type="url"
                  class="popup__form-input popup__profile-avatar"
                  id="avatar"
                  name="avatar"
                  placeholder="Enlace a la imagen"
                  required
                />
                <div class="popup__line popup__line-avatar"></div>
                <span class="popup__input-error avatar-error"></span>
                <button
                  type="submit"
                  class="popup__form-button popup__form-button_active popup__save-button-avatar"
                >
                  Guardar
                </button>
              </fieldset>
            </form>
          </div>
        </section>

        <section class="elements">
          <div class="spinner">
            <i class="spinner__i"></i>
          </div>
        </section>
        <section class="popup popup-image-fullscreen">
          <div class="popup__container-image">
            <button class="popup__close-button popup__close-image"></button>
            <img src="" alt="null" class="popup__image" />
            <h5 class="popup__title-image"></h5>
          </div>
        </section>

        <section class="popup popup-delete-card">
          <div class="popup__container popup__container-delete">
            <button class="popup__close-button"></button>
            <h2 class="popup__heading popup__heading-delete">
              ¿Estás seguro/a?
            </h2>
            <form class="popup__form popup__form-delete" novalidate>
              <fieldset class="popup__form-set popup__formset-button">
                <button
                  type="submit"
                  class="popup__form-button popup__form-button_active popup__delete-button"
                  value="delete"
                >
                  Confirmar
                </button>
              </fieldset>
            </form>
          </div>
        </section>

        <section class="popup popup-elements">
          <div class="popup__container">
            <button class="popup__close-button"></button>
            <h2 class="popup__heading">Nuevo lugar</h2>
            <form class="popup__form popup__form-image" novalidate>
              <fieldset class="popup__form-set">
                <label for="title" class="popup__form-label"></label>
                <input
                  type="text"
                  class="popup__form-input popup__form-title"
                  id="title"
                  name="title"
                  placeholder="Título"
                  required
                  minlength="2"
                  maxlength="30"
                />
                <div class="popup__line"></div>
                <span class="popup__input-error title-error"></span>
                <label for="link__image" class="popup__form-label"></label>
                <input
                  type="url"
                  class="popup__form-input popup__form-link"
                  id="linkimage"
                  name="link"
                  placeholder="Enlace a la imagen"
                  required
                />
                <div class="popup__line"></div>
                <span class="popup__input-error linkimage-error"></span>
                <button
                  disabled
                  type="submit"
                  class="popup__form-button popup__form-button_active popup__create-button popup__form-button_disabled"
                  value="create"
                >
                  Crear
                </button>
              </fieldset>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
