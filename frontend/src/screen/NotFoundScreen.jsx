import React from "react";

// STYLES
import "../styles/404.css";

// COMPONENTS
import ScrollToTop from "../util/ScrollToTop";

// IMAGES IMPORT
import luigisTorch from "../assets/images/Luigi_Torch.jpg";
import luigiHiding from "../assets/images/Luigis_Mansion-Hiding.jpg";

const NotFoundScreen = ({ history }) => {
  return (
    <>
      <ScrollToTop />
      <section id="notFoundContainer">
        <img class="section-bgd" src={luigiHiding} alt="Luigi Hiding" />
        <div class="content-404">
          <img class="torch-img" src={luigisTorch} alt="Luigi's Torch" />
          <h1>UH OH!</h1>
          <p>
            You've come to an unknown part of the web. Take caution and head
            home!
          </p>
          <div class="button-flex">
            <button>
              <a href="/">HEAD HOME</a>
            </button>
            <button>
              <a onClick={() => history.goBack()}>GO BACK</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundScreen;
