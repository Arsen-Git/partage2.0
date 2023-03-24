import "./Hero.scss";
import "../../global.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1 className="hero__title">
          Shared <br /> NFT Utilities
        </h1>
        <h2 className="hero__subtitle">
          Get the most out of fractionalization
        </h2>
        <button className="hero__btn">Get Started</button>
      </div>
      <figure className="hero__right">
        <img src="./images/Partage_logo.png" alt="logo" />
      </figure>
    </section>
  );
}
