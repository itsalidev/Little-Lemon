import Button from "./Button";
import "../styles/Specials.css";
import { Link } from "react-router-dom";

function Specials() {
  return (
    <section className="specials">
      <p className="specialAdv">This week specials!</p>
      <Link to="/order">
        <Button className="button">Online Menu</Button>
      </Link>
    </section>
  );
}

export default Specials;
