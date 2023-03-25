import "./Creators.scss";
import "../../global.scss";

import CreatorsCard from "../CreatorsCard/CreatorsCard";

export default function Creators() {
  const cards = [
    {
      img: "./images/Creators.png",
      title: "Tare",
      sales: "00.00",
    },
    {
      img: "./images/Creators.png",
      title: "Tare",
      sales: "34.12",
    },
  ];
  return (
    <section className="container">
      <div className="upper">
        <div className="upper__left">
          <h2 className="sectionTitle">Top Creators</h2>
          <h2 className="sectionSubtitle">
            Checkout Top Rated Creators on the NFT Marketplace
          </h2>
        </div>
        <button className="creators__btn">View Rankings</button>
      </div>
      <ul className="sectionList">
        {cards.map((card, index) => (
          <CreatorsCard
            key={index}
            img={card.img}
            title={card.title}
            sales={card.sales}
          />
        ))}
      </ul>
    </section>
  );
}
