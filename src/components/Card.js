function Card({ url, name, likes }) {
  return (
    <div className="element">
      <div className="element__image-content">
        <img src={url} alt={`imagen de ${name}`} className="element__image" />
        <button className="element__button-trash"></button>
      </div>
      <div className="element__footer">
        <p className="element__name">{name}</p>
        <div className="element__like-container">
          <button className="element__button-like"></button>
          <p className="element__likes">{likes}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
