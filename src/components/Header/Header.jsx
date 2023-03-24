import "./Header.scss";

export default function Header() {
  return (
    <header className="head__container">
      <p className="head__link">Marketplace</p>
      <div className="head__account">
        <img width={20} height={20} src="./images/User.svg" alt="user" />
        <p className="head__account__text">Sign Up</p>
      </div>
    </header>
  );
}
