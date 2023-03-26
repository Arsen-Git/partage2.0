import "./CollectionPageCard.scss";

export default function CollectionPageCard({
  img,
  accImg,
  title,
  creator,
  price,
  bid,
}) {
  return (
    <div className="collectionPageCard">
      <figure className="collectionPageCard__img">
        <img src={img} alt="logo" />
      </figure>
      <div className="collectionPageCard__info">
        <h2 className="collectionPageCard__title">{title}</h2>
        <div className="collectionPageCard__author">
          <img src={accImg} alt="author" />
          <p className="collectionPageCard__author__text">{creator}</p>
        </div>
        <div className="collectionPageCard__prices">
          <div className="collectionPageCard__prices__group">
            <p className="collectionPageCard__prices__title">Price</p>
            <p className="collectionPageCard__prices__price">{price} BTC</p>
          </div>
          <div className="collectionPageCard__prices__group">
            <p className="collectionPageCard__prices__title">Highest Bid</p>
            <p className="collectionPageCard__prices__price">{bid} BTC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
