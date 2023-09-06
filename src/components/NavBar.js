import logo from "../assets/img/logo.svg";

export const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" className="nav--icon"/>
      <h3 className="nav--logo_text">MyISAMMGrade</h3>
      <h4 className="nav--title">ISAMM - Grade Calculator</h4>
    </nav>
  );
};
