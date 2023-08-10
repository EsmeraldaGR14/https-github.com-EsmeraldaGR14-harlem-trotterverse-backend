import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./HomePage.css";

function HomePage() {
  const images = [
    "Marques_Haynes.png",
    "teamphoto_color.png",
    "Umbrella_bwdribble.png",
  ];
  const quote =
    "The special thing is no matter where we go, we're always the home team.";
  const author = "Dizzy Grant";
  return (
    <div className="home">
      <div className="slideshow">
        <Slide arrows={false}>
          {images.map((image) => (
            <div className="each-slide-effect" key={image}>
              <img
                src={`${process.env.PUBLIC_URL}/images/backgroundAssets/${image}`}
                alt=" "
              />
            </div>
          ))}
        </Slide>
      </div>
      <div className="quote-container">
        <blockquote className="quote">"{quote}"</blockquote>
        <p className="author">- {author}</p>
      </div>
    </div>
  );
}

export default HomePage;
