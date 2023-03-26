import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CollectioPageCard from "../components/CollectionPageCard/CollectionPageCard";

import "./CollectionPage.scss";
import Timer from "../components/Timer/Timer";

export default function CollectionPage() {
  const cards = [
    {
      img: "./images/CollectionPageCard.png",
      accImg: "./images/Collection-acc.svg",
      title: "HokusAI#001 ",
      creator: "Tare",
      price: "0.00",
      bid: "0.00",
    },
    {
      img: "./images/CollectionPageCard.png",
      accImg: "./images/Collection-acc.svg",
      title: "HokusAI#002 ",
      creator: "Tare",
      price: "0.00",
      bid: "0.00",
    },
    {
      img: "./images/CollectionPageCard.png",
      accImg: "./images/Collection-acc.svg",
      title: "HokusAI#003 ",
      creator: "Tare",
      price: "0.00",
      bid: "0.00",
    },
  ];
  return (
    <>
      <Header />
      <figure className="collection__hero">
        <img src="./images/CollectionPage-logo.png" alt="logo" />
      </figure>
      <section className="collection__container collection__about">
        <div className="collection__about__info">
          <h1 className="collection__about__title">Tare x Hokusai Series</h1>
          <h2 className="collection__about__subtitle">Minted on ......</h2>
          <div className="collection__about__topics">
            <div className="collection__about__topic">
              <p className="collection__about__topic__title">Created By</p>
              <div className="collection__about__topic__group">
                <img src="./images/Collection-acc.svg" alt="logo" />
                <p className="collection__about__topic__text">Tare</p>
              </div>
            </div>
            <div className="collection__about__topic">
              <p className="collection__about__topic__title">Description</p>
              <p className="collection__about__topic__text">
                Experience premium diners at Tare Sushi Restaurant in Austin
                Texas through our exclusive NFT collection.
              </p>
            </div>
            <div className="collection__about__topic">
              <p className="collection__about__topic__title">Details</p>
              <div className="collection__about__topic__group">
                <img src="./images/Globe.svg" alt="logo" />
                <a href="#" className="collection__about__topic__text">
                  View on ...
                </a>
              </div>
              <div className="collection__about__topic__group">
                <img src="./images/Globe.svg" alt="logo" />
                <a href="#" className="collection__about__topic__text">
                  View ...
                </a>
              </div>
            </div>
            <div className="collection__about__topic">
              <p className="collection__about__topic__title">Tags</p>
              <div className="collection__about__topic__tags">
                <div className="collection__about__topic__tag">
                  <p className="collection__about__topic__tag__text">SUSHI</p>
                </div>
                <div className="collection__about__topic__tag">
                  <p className="collection__about__topic__tag__text">
                    RESTAURANT
                  </p>
                </div>
                <div className="collection__about__topic__tag">
                  <p className="collection__about__topic__tag__text">TARE</p>
                </div>
                <div className="collection__about__topic__tag">
                  <p className="collection__about__topic__tag__text">HOKUSAI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Timer />
      </section>
      <section className="collection__container collection__cards">
        <div className="collection__cards__upper">
          <h2 className="collection__cards__title">More from this Creator</h2>
          <button className="collection__cards__btn">Go To Creator Page</button>
        </div>
        <ul className="collection__cards__list">
          {cards.map((card, index) => (
            <CollectioPageCard
              key={index}
              img={card.img}
              title={card.title}
              accImg={card.accImg}
              creator={card.creator}
              price={card.price}
              bid={card.bid}
            />
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}
