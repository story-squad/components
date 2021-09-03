import React, { useState } from "react";
import "./styles.scss";

const Flip = (): React.ReactElement => {

  const flipFunk = () => {
    var card = document.getElementById("card");
    if (card?.classList.contains("card--flipped")) {
      card.classList.add("card--unflip");
      setTimeout(function () {
        card?.classList.remove("card--flipped", "card--unflip");
      }, 500);
    } else {
      card?.classList.add("card--flipped");
    }
  };

  return (
    <div className="card-scene">
      <div id="card" onClick={() => flipFunk()} className="card">
        <div className="card-backing">
          <div className="back-main">Cows are content.</div>
        </div>
        <div className="card-front">
          <div className="main-pane">Chicken is content.</div>
        </div>
      </div>
    </div>
  );
};

export default Flip;
