import "./CreatorsCard.scss";

export default function CreatorsCard({ img, title, sales }) {
  return (
    <div className="creators__card">
      <img src={img} alt="img" />
      <h3 className="creators__card__title">{title}</h3>
      <p className="creators__card__text">
        Total Sales:{" "}
        <span className="creators__card__text-light">{sales} BTC</span>
      </p>
    </div>
  );
}
