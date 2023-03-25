import "./Form.scss";
import "../../global.scss";

export default function Form() {
  return (
    <section className="container">
      <div className="form__wrapper">
        <figure className="form__left">
          <img src="./images/weekly-digest.png" alt="partage" />
        </figure>
        <div className="form__right">
          <h2 className="sectionTitle">Join our weekly digest</h2>
          <h3 className="sectionSubtitle">
            Get exclusive promotions & updates straight to your inbox.
          </h3>
          <div className="sectionInput__wrapper sectionInput__wrapper-disabled">
            <input
              type="text"
              className="sectionInput"
              placeholder="Enter your email here"
            />
            <div className="sectionInput__btn">Subscribe</div>
          </div>
          <div className="form__inputs">
            <input
              type="text"
              className="form__input"
              placeholder="Enter Your Email Address"
            />
            <button className="form__btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
