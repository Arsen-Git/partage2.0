import "./CollectionsCard.scss";

export default function CollectionsCard({
  mainImg,
  img2,
  img3,
  title,
  accImg,
  creator,
}) {
  return (
    <div className="collectionCard">
      <img className="collectionCard__mainImg" src={mainImg} alt="img" />
      <div className="imgs">
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <div className="addMore">
          <p className="addMore__text">1025+</p>
        </div>
      </div>
      <h2 className="collectionCard__title">{title}</h2>
      <div className="collectionCard__footer">
        <img width={24} height={24} src={accImg} alt="acc" />
        <p className="collectionCard__text">{creator}</p>
      </div>
    </div>
  );
}
