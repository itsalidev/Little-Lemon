import Button from "./Button";
import { Link } from "react-router-dom";
import "../styles/CallToAction.css";
import "../styles/Button.css";

function CallToAction() {
  return (
    <article className="mainContent">
      <section className="mainText">
        <h1 className="displayTitle">Little Lemon</h1>
        <h2 className="subtitle">Florida</h2>
        <p className="description">
          We are a family owned Promising restaurant, focused on Healthy recipes
          served with a modern twist.
        </p>
        <Link to="/reservations">
          <Button className="button">Reserve a Table</Button>
        </Link>
      </section>
      <img
        className="restaurantPhoto"
        src="/icons_assets/restauranfood.jpeg"
        alt="restaurant food"
        width="300px"
      ></img>
    </article>
  );
}

export default CallToAction;
