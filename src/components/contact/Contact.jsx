import "./contact.css";
import { contactGirl, contactArrow } from "../ImageImport";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-above">
        <h1>Get In Touch With Us</h1>
        <div className="above-image">
          <img src={contactGirl} alt="Girl using Computer" />
        </div>
      </div>
      <div className="contact-below">
        <div className="form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea cols="30" rows="4" placeholder="Message"></textarea>
          <button className="btn btn-primary">Submit</button>
        </div>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Contact;
