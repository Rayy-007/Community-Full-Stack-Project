import "./about.css";
import { aboutBoy, aboutGirl } from "../ImageImport";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-above">
        <div className="text">
          <h1>Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            iaculis blandit purus, quis venenatis neque rutrum ut. Sed egestas
            tellus sed egestas laoreet. Suspendisse elementum ipsum arcu, non
            ultrices ex eleifend sed. Vestibulum condimentum risus vel nulla
            blandit dignissim. Phasellus congue ultrices ante ac ullamcorper.
            Mauris ut neque eu ex suscipit congue.
          </p>
        </div>
        <div className="about-img">
          <img src={aboutBoy} alt="Boy is riding Rocket" />
        </div>
      </div>
      <div className="about-below">
        <img src={aboutGirl} alt="Gril is writing Mail" />
      </div>
    </section>
  );
};

export default About;
