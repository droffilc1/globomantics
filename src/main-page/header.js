import logo from "./GloboLogo.png";

const Header = ({ subtitle }) => {
  return (
    <header className="row">
      <div className="col-md-5">
        <a href="/">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </div>
      <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
    </header>
  );
};

export default Header;
