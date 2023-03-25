import HowCard from "../HowCard/HowCard";
import "./HowSection.scss";

export default function HowSection() {
  const cards = [
    {
      img: "./images/how1.png",
      title: "Setup Your wallet",
      text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      img: "./images/how2.png",
      title: "Create Collection",
      text: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      img: "./images/how3.png",
      title: "Start Earning",
      text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];
  return (
    <section className="container">
      <h2 className="sectionTitle">How it works</h2>
      <h2 className="sectionSubtitle">Find out how to get started</h2>
      <ul className="sectionList">
        {cards.map((card, index) => (
          <HowCard
            key={index}
            img={card.img}
            title={card.title}
            text={card.text}
          />
        ))}
      </ul>
    </section>
  );
}
