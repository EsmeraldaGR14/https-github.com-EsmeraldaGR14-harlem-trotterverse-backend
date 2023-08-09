import React from "react";
import "./HomePage.css";

function HomePage() {
  const quote =
    "The special thing is no matter where we go, we're always the home team.";
  const author = "Dizzy Grant";
  return (
    <div className="home">
      <div className="slideshow">
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
      </div>
      <div className="quote-container">
        <blockquote className="quote">"{quote}"</blockquote>
        <p className="author">- {author}</p>
      </div>
    </div>
  );
}

export default HomePage;
