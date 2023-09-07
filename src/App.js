import "./App.css";
import { NavBar } from "./components/NavBar";
import { Main } from "./components/Main";
import { ContactMe } from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <ContactMe />
    </div>
  );
}

export default App;
