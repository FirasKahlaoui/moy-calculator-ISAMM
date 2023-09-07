import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/twitter-svgrepo-com.svg";
import navIcon5 from "../assets/img/github-mark.svg";
import navIcon6 from "../assets/img/website-ui-svgrepo-com.svg";

export const ContactMe = () => {
  return (
    <footer className="footer">
      <h3 className="footer--title">Contact Me</h3>
      <p className="footer--text">
        You can contact me on my social media accounts
      </p>
      <div className="social-icon">
        <a href="https://ifiras.pages.dev/" target="blank">
          <img src={navIcon6} alt="Icon" title="iFiras" />
        </a>
        <a
          href="https://www.linkedin.com/in/firas-kahlaoui-b0a031253/"
          target="blank"
        >
          <img src={navIcon1} alt="Icon" title="LinkedIn" />
        </a>
        <a href="https://www.facebook.com/firas.kahlaoui.566/" target="blank">
          <img src={navIcon2} alt="Icon" title="Facebook" />
        </a>
        <a href="https://www.instagram.com/firas_kahlaouii/" target="blank">
          <img src={navIcon3} alt="Icon" title="Instagram" />
        </a>
        <a href="https://twitter.com/firas_kahlaoui" target="blank">
          <img src={navIcon4} alt="Icon" title="Twitter" />
        </a>
        <a href="https://github.com/FirasKahlaoui" target="blank">
          <img src={navIcon5} alt="" title="GitHub" />
        </a>
      </div>
      <p></p>
    </footer>
  );
};
