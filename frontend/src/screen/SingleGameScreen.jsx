import React, { useEffect, useState, useRef } from "react";

// STYLES
import "../styles/singleGame.css";

// COMPONENTS
import ScrollToTop from "../util/ScrollToTop";
import Metatag from "../components/Metatag";
import GameSwiper from "../components/GameSwiper";

// REDUX related
import { useDispatch, useSelector } from "react-redux";
import { listGameDetails } from "../actions/productActions";

const SingleGameScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const [edition, setEdition] = useState("");
  const [condition, setCondition] = useState("");
  const [message, setMessage] = useState("");

  // REFS
  const gameBgdImg = useRef();

  // REDUX Related
  const dispatch = useDispatch();
  const gameDetails = useSelector((state) => state.gameDetails);
  const { loading, error, game } = gameDetails;

  useEffect(() => {
    dispatch(listGameDetails(match.params.id));
    const innerWidth = window.innerWidth;
    if (innerWidth <= 768) {
      gameBgdImg.current.style.display = "none";
    }
  }, [dispatch, match]);

  const platforms = game.platforms && game.platforms.join(", ");
  const metascore = game.metacriticScore;
  const genres = game.genres && game.genres.join(", ");
  const releaseDate = game.released;
  const category = game.category;
  const bgdImg = game.background_image;

  const addToCartHandler = (e) => {
    e.preventDefault();
    if (!edition || !qty || !condition) {
      setMessage("Please select an option for all the above categories");
    } else if (edition && qty && condition) {
      history.push(
        `/cart/${match.params.id}?qty=${qty}?edition=${edition}?condition=${condition}?category=${category}`
      );
    }
  };

  return (
    <>
      <Metatag title={game.name && game.name} />
      <ScrollToTop />
      <section id="game-content">
        <img
          src={bgdImg}
          ref={gameBgdImg}
          alt="Game Background Image"
          style={{
            backgroundSize: "contain",
            width: "100%",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "-1",
            filter: `grayscale(1)`,
            opacity: ".1",
          }}
        />
        {/* GAME DETAILS */}
        <div className="game-details">
          <div className="game-brief">
            <h2 className="game-title">{game.name && game.name}</h2>
            {/* <h5 className="game-publisher">Publisher: Sony</h5> */}
            <h4 className="game-price" style={{ marginTop: "1rem" }}>
              {game.price && game.price
                ? `AED ${game.price.toFixed(2)}`
                : "TBA"}
            </h4>
            <hr />

            <form className="cart-form">
              <div className="game-quantity">
                <h5>Quantity</h5>
                <select name="quantity" id="quantity">
                  <option
                    value="1"
                    selected
                    onClick={(e) => setQty(e.target.value)}
                  >
                    1
                  </option>
                  <option value="2" onClick={(e) => setQty(e.target.value)}>
                    2
                  </option>
                  <option value="3" onClick={(e) => setQty(e.target.value)}>
                    3
                  </option>
                  <option value="4" onClick={(e) => setQty(e.target.value)}>
                    4
                  </option>
                  <option value="5" onClick={(e) => setQty(e.target.value)}>
                    5
                  </option>
                </select>
                <hr />
              </div>
              <h5>Edition</h5>
              <div className="form-group">
                <input
                  type="radio"
                  name="edition"
                  id="standard"
                  value="standard"
                  onChange={(e) => setEdition(e.target.value)}
                />
                <label htmlFor="standard">Standard</label>

                <input
                  type="radio"
                  name="edition"
                  id="collectors"
                  value="collectors"
                  onChange={(e) => setEdition(e.target.value)}
                />
                <label htmlFor="collectors">Collectors</label>
              </div>

              <hr />

              <h5>Condition</h5>
              <div className="form-group">
                <input
                  type="radio"
                  name="condition"
                  id="new"
                  value="new"
                  onChange={(e) => setCondition(e.target.value)}
                />
                <label htmlFor="new">New</label>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: `${
                    game.countInStock && game.countInStock > 0
                      ? "#20b830"
                      : "#dc143c"
                  }`,
                }}
                disabled={game.countInStock < 1}
                onClick={addToCartHandler}
              >
                {/* {game.countInStock < 1 ? "Out of Stock" : "Add to Cart"} */}
                {game.countInStock < 1 && game.price === 0
                  ? "TBA"
                  : "Add to Cart"}
              </button>
              <small
                style={{
                  textAlign: "center",
                  display: "block",
                  marginTop: "10px",
                  color: "crimson",
                  fontSize: "12px",
                }}
              >
                {message}
              </small>
            </form>
          </div>

          <div className="about-game">
            <h2 className="about-title">About {game.name && game.name}</h2>
            <p className="about-description">{game.description}</p>

            <div className="about-grid-details">
              <div className="about-grid-detail">
                <p>Platforms</p>
                <p>{platforms}</p>
              </div>

              <div className="about-grid-detail">
                <p>Metascore</p>
                <p>{metascore === 0 ? "N/A" : metascore}</p>
              </div>

              <div className="about-grid-detail">
                <p>Genre</p>
                <p>{genres && genres.length >= 1 ? genres : "N/A"}</p>
              </div>

              <div className="about-grid-detail">
                <p>Release Date</p>
                <p>{releaseDate}</p>
              </div>

              <div className="about-grid-detail">
                <p>Developer</p>
                <p>{game.developer}</p>
              </div>

              <div className="about-grid-detail">
                <p>Publisher</p>
                <p>{game.publisher}</p>
              </div>
            </div>
          </div>
        </div>

        {/* GAME GALLERY */}
        <div className="game-gallery">
          <h1>Image Gallery</h1>
          {game.screenshots && <GameSwiper images={game.screenshots} />}
        </div>
      </section>
    </>
  );
};

export default SingleGameScreen;
