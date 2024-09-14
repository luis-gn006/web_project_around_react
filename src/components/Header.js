import logo from "../images/header__logo.svg";

function Header() {
  return (
    <>
      <header class="header">
        <img src={logo} alt="logo Arround the US" class="header__logo" />
        <div class="header__line"></div>
      </header>
    </>
  );
}

export default Header;
