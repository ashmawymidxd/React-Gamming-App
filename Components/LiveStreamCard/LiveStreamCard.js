import React from "react";
import "./LiveStreamCard.css";
const LiveStreamCard = (props) => {
  return (
    <div className=" p-3 col-md-4">
      <div className="main-card p-3">
        <img src={props.img} alt="" className="circle-image my-2" />
        <h4 className="text-light my-2">{props.header}</h4>
        <p className="text-light">{props.discription}</p>
      </div>
    </div>
  );
};

export default LiveStreamCard;
