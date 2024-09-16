function ConfirmationPopup({}) {
  return (
    <>
      <section class="popup popup-delete-card">
        <div class="popup__container popup__container-delete">
          <button class="popup__close-button"></button>
          <h2 class="popup__heading popup__heading-delete">¿Estás seguro/a?</h2>
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
    </>
  );
}

export default ConfirmationPopup;
