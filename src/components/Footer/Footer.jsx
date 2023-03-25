import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer__wrapper">
      <div className="container footer__container">
        <div className="footer__colls">
          <div className="footer__coll">
            <h2 className="footer__title">NFT Marketplace</h2>
            <p className="footer__text">
              Mint fractional NFT, sell and <br /> buy fractions to share their
              utilities.
            </p>
            <p className="footer__text">Join our community</p>
            <ul className="footer__links">
              <a href="#" className="footer__link">
                <img src="./images/DiscordLogo.svg" alt="logo" />
              </a>
              <a href="#" className="footer__link">
                <img src="./images/YoutubeLogo.svg" alt="logo" />
              </a>
              <a href="#" className="footer__link">
                <img src="./images/TwitterLogo.svg" alt="logo" />
              </a>
              <a href="#" className="footer__link">
                <img src="./images/InstagramLogo.svg" alt="logo" />
              </a>
            </ul>
          </div>
          <div className="footer__coll">
            <h2 className="footer__title">Explore</h2>
            <p className="footer__text">Marketplace</p>
            <p className="footer__text">Rankings</p>
            <p className="footer__text">Connect a wallet</p>
          </div>
          <div className="footer__coll">
            <h2 className="footer__title">Join our weekly digest</h2>
            <p className="footer__text">
              Get exclusive promotions & updates <br /> straight to your inbox.
            </p>
            <div className="sectionInput__wrapper sectionInput__wrapper-disabled">
              <input
                type="text"
                className="sectionInput"
                placeholder="Enter your email here"
              />
              <div className="sectionInput__btn sectionInput__btn-orange">
                Subscribe
              </div>
            </div>
          </div>
        </div>
        <div className="footer__line"></div>
        <p className="footer__copywright">Ⓒ Partage</p>
      </div>
    </footer>
  );
}
