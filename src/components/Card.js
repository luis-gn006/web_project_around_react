function Card({
  card,
  url,
  name,
  likes,
  handleDeleteCard,
  handleSelectedCard,
}) {
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
        <button className="element__button-trash" onClick={deleteCard}></button>
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
