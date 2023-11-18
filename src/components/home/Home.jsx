import "./home.css";
import { paper, time, homePeople } from "../ImageImport";
const Home = () => {
  return (
    <section className="home-container">
      <div className="intro">
        <h1>
          We Build for You to <span>Connect</span> with Your{" "}
          <span>Neighborhood</span>!
        </h1>
        <p>Share Your Buddy!</p>
        <a className="btn btn-primary" href="/register">
          Join Now!
        </a>
      </div>
      <div className="home-image">
        <img src={homePeople} alt="Group of people" />
      </div>
      {/* --------------- Floating Image and Color --------------- */}
      <div className="floating image time"></div>
      <div className="floating image paper"></div>
      <div className="floating color blue"></div>
      <div className="floating color green"></div>
      <div className="floating color purple"></div>
      <div className="floating color yellow"></div>
      <div className="floating color light"></div>
    </section>
  );
};

export default Home;
