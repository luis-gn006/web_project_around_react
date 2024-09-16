function ImagePopup({ title, src }) {
  return (
    <>
      <section className="popup popup-image-fullscreen">
        <div className="popup__container-image">
          <button className="popup__close-button popup__close-image"></button>
          <img src={src} alt={`imagen de ${title}`} className="popup__image" />
          <h5 className="popup__title-image">{title}</h5>
        </div>
      </section>
    </>
  );
}

export default ImagePopup;
