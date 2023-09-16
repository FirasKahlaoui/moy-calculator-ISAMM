import { NavBar } from "../components/NavBar";
import { CalcIM } from "../components/calc_pages/Calc_IM";

export default function Calculate() {
  return (
    <div>
      <div className="Home_nav">
        <NavBar />
      </div>
      <div>
        <CalcIM />
      </div>
    </div>
  );
}
