import "./terms.css";
import { termsBoy, termsGirl } from "../ImageImport";

const Terms = () => {
  return (
    <section className="terms-condition">
      <div className="first">
        <h1>Terms And Conditions</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis
          blandit purus, quis venenatis neque rutrum ut. Sed egestas tellus sed
          egestas laoreet. Suspendisse elementum ipsum arcu, non ultrices ex
          eleifend sed. Vestibulum condimentum risus vel nulla blandit
          dignissim. Phasellus congue ultrices ante ac ullamcorper. Mauris ut
          neque eu ex suscipit congue.
        </p>
      </div>
      <div className="second">
        <div className="img-con">
          <img src={termsBoy} alt="Boy" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis
          blandit purus, quis venenatis neque rutrum ut. Sed egestas tellus sed
          egestas laoreet. Suspendisse elementum ipsum arcu, non ultrices ex
          eleifend sed. Vestibulum condimentum risus vel nulla blandit
          dignissim. Phasellus congue ultrices ante ac ullamcorper. Mauris ut
          neque eu ex suscipit congue.
        </p>
      </div>
      <div className="third">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis
          blandit purus, quis venenatis neque rutrum ut. Sed egestas tellus sed
          egestas laoreet. Suspendisse elementum ipsum arcu, non ultrices ex
          eleifend sed. Vestibulum condimentum risus vel nulla blandit
          dignissim. Phasellus congue ultrices ante ac ullamcorper. Mauris ut
          neque eu ex suscipit congue.
        </p>
        <div className="img-con">
          <img src={termsGirl} alt="Girl" />
        </div>
      </div>
    </section>
  );
};

export default Terms;
