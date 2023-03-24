import CollectionsCard from "../CollectionsCard/CollectionsCard";

export default function Collections() {
  const cards = [
    {
      mainImg: "./images/Collection-main.png",
      img2: "./images/Collection-2.png",
      img3: "./images/Collection-3.png",
      accImg: "./images/Collection-acc.svg",
      title: "Tare x Hokusai Series ",
      creator: "Tare",
    },
    {
      mainImg: "./images/chess.png",
      img2: "./images/chess.png",
      img3: "./images/chess.png",
      accImg: "./images/chess.png",
      title: "{Insert title}",
      creator: "{Insert creator}",
    },
    {
      mainImg: "./images/chess.png",
      img2: "./images/chess.png",
      img3: "./images/chess.png",
      accImg: "./images/User.svg",
      title: "{Insert title}",
      creator: "{Insert creator}",
    },
  ];
  return (
    <section className="container">
      <h2 className="sectionTitle">NFT Collections</h2>
      <h2 className="sectionSubtitle">
        Checkout our weekly updated trending collection.
      </h2>
      <ul className="sectionList">
        {cards.map((card) => (
          <CollectionsCard
            mainImg={card.mainImg}
            img2={card.img2}
            img3={card.img3}
            accImg={card.accImg}
            title={card.title}
            creator={card.creator}
          />
        ))}
      </ul>
    </section>
  );
}
