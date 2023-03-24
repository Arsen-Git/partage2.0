import "./HowCard.scss";

export default function HowCard({ img, title, text }) {
  return (
    <div className="card">
      <img src={img} alt="img" />
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
    </div>
  );
}
