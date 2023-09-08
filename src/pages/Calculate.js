import { NavBar } from "../components/NavBar";
import {CalcIM} from "../components/calc_pages/Calc_IM";

export default function Calculate() {
  return (
    <div>
      <NavBar />
      <div>
        <CalcIM />
      </div>
    </div>
  );
}
