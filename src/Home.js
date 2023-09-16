import "./App.css";
import { NavBar } from "./components/NavBar";
import { Main } from "./components/Main";
import { ContactMe } from "./components/ContactMe";

function Home() {
  return (
    <div className="Home">
      <div className="Home_nav">
      <NavBar />
      </div>
      <Main />
      <ContactMe />
    </div>
  );
}

export default Home;
