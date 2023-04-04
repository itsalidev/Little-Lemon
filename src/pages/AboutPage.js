import "../styles/App.css";
import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <section className="aboutPage">
      <h2>About Little Lemon Restaurant</h2>
      <div className="about">
        <p id="about_owners"> Meet our owners Mario and Adrian</p>
      </div>
      <img
        src="/icons_assets/Mario and Adrian b.jpg"
        width="500px"
        alt="owners Mario and Adrian"
        className="ownersPhoto"
      ></img>

      <h2>Contact Info</h2>
      <div className="contactSection">
        <h3>Our Adress:</h3>
        <p>Chicago, Main Street, 123</p>

        <h3>Our Email:</h3>
        <p> littlelemon@mail.com</p>

        <h3>Our Contact Telephone:</h3>
        <p> +1 1242289111</p>
      </div>
    </section>
  );
}

export default AboutPage;
