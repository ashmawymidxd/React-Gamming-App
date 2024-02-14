import React from "react";
import "./DetailesHero.css";
import popular_02 from "../../assets/images/feature-left.jpg";
import popular_03 from "../../assets/images/feature-right.jpg";

function DetailesHero() {
  return <div className="row">
    <div className="col-md-4">
        <img src={popular_02} alt="game" className="rounded-3"/>
    </div>
    <div className="col-md-8">
        <img src={popular_03} alt="game" className="rounded-3"/>
    </div>
  </div>;
}

export default DetailesHero;
